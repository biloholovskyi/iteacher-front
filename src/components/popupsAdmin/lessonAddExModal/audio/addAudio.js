import React, {Component} from "react";
import Dropzone from 'react-dropzone';

import InputText from "../../../inputs/inputsAdmin/inputText/inputText";
import Button from "../../../buttons/button/button";

import {TextModalBody, TextModalOverlay, AudioWrap} from './styled';
import {ImageZone} from "../image/styled";

import closed from "../../../../assets/media/icon/close.svg";
import arrow from '../../../../assets/media/icon/arrow-left.svg';
import dlt from '../../../../assets/media/icon/trash_basket.svg'
import axios from "axios";
import ServerSettings from "../../../../service/serverSettings";

export default class AddAudioModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      name: '',
      file: '',
      audioPreview: '',
      deleteAudio: false,
      type: 'add',
      indexTask: 0,
      indexSection: 0,
      indexLesson: 0,
      file_size: ''
    }
  }

  componentDidMount() {
    this.setTypeModal();
  }

  // проверяем модалка на создания или редактирование
  setTypeModal = () => {
    const {edit, template, lesson, section} = this.props;
    // нужно передать старые значения
    const currentLessonIndex = template.lesson.findIndex(l => parseInt(l.id) === parseInt(lesson));
    const currentSectionIndex = template.lesson[currentLessonIndex].sections.findIndex(s => parseInt(s.id) === parseInt(section.id));
    const currentTaskIndex = template.lesson[currentLessonIndex].sections[currentSectionIndex].tasks.findIndex(task => parseInt(task.id) === parseInt(edit));
    const currentTaskData = template.lesson[currentLessonIndex].sections[currentSectionIndex].tasks[currentTaskIndex];
    if (typeof edit === 'number') {
      this.setState({
        type: 'edit',
        text: currentTaskData.title,
        file: currentTaskData.file,
        file_size: currentTaskData.file_size,
        name: currentTaskData.name_video,
        indexTask: currentTaskIndex,
        indexLesson: currentLessonIndex,
        indexSection: currentSectionIndex
      });
    } else {
      this.setState({
        indexTask: currentTaskIndex,
        indexLesson: currentLessonIndex,
        indexSection: currentSectionIndex
      });
    }
  }

  // создаем задание
  createTask = async () => {
    const {indexSection, indexLesson} = this.state;
    // получаем размер файла
    const file_size = this.state.file.size < 1000000 ? Math.round(this.state.file.size / 1024) + " kb" : Math.round(this.state.file.size / 1024 / 1024) + " mb";

    const data = new FormData();
    data.set("task_type", "AUDIO");
    data.set("title", this.state.text);
    data.set("section", this.props.section.id);
    data.set("file", this.state.file);
    data.set("name_video", this.state.name);
    data.set("file_size", file_size);

    // return
    const task = {
      section: this.props.section.id,
      title: this.state.text,
      file: this.state.file,
      task_type: 'AUDIO',
      name_video: this.state.name,
      file_size: this.state.file_size
    }

    // отправляем его на сервер
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const serverSettings = new ServerSettings();

    await axios.post(`${serverSettings.getApi()}api/tasks/`, data)
      .then(res => {
        // обновляем данные выбранной секции
        this.props.update(res.data, indexLesson, indexSection);
        this.props.close();
      })
      .catch(error => {
        console.error(error)
      });
  }

  // изминения задания
  editTask = async () => {
    const {section, setActiveSection, close, template, setTemplate, allTemplates, setAllTemplate} = this.props;
    const {indexTask, text, file, indexSection, indexLesson, file_size, name, audioPreview} = this.state;
    const file_sizeData = file_size !== ''
      ? this.state.file.size < 1000000 ? Math.round(this.state.file.size / 1024) + " kb" : Math.round(this.state.file.size / 1024 / 1024) + " mb"
      : file_size
    // обновляем текущую секцию
    const newTask = {
      ...section.tasks[indexTask],
      task_type: 'AUDIO',
      title: text,
      file_size: !isNaN(file_sizeData) ? file_sizeData : section.tasks[indexTask].file_size,
      name: name,
    }

    this.props.update(newTask, indexLesson, indexSection, true, indexTask);

    // обновляем сервер
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    // данные для сервера
    const data = new FormData();
    data.set("title", text);
    data.set("name_video", name);
    // нужно проверить был ли изминен файл
    if(this.state.audioPreview) {
      data.set("file", file);
      const file_size = this.state.file.size < 1000000 ? Math.round(this.state.file.size / 1024) + " kb" : Math.round(this.state.file.size / 1024 / 1024) + " mb";
      data.set('file_size', file_size);
    }

    const serverSettings = new ServerSettings();
    await axios.put(`${serverSettings.getApi()}api/tasks/${newTask.id}/update/`, data)
      .then(res => {
        close()
      })
      .catch(error => console.error(error));
  }

  DeleteAudioItem = () => {
    this.setState(() => {
      return {
        ...this.state,
        deleteAudio: true
      }
    });
    setTimeout(() => {
      this.setState(() => {
        return {
          ...this.state,
          deleteAudio: false,
          file: '',
          audioPreview: '',
        }
      })
    }, 500)
  }

  // add audio file

  _handleAudioChange(e) {

    e.preventDefault();

    let reader = new FileReader();

    let file = e.target.files[0];

    reader.onloadend = () => {

      this.setState({

        file: file,

        audioPreview: reader.result

      });

    }

    reader.readAsDataURL(file)

  }

  render() {
    function uploadImage(file) {
      this.props.close();
    }

    const {back, close} = this.props;

    const {audioPreview, file, deleteAudio} = this.state;

    // code for download audio file
    let $audioPreview = null;

    if (audioPreview) {
      $audioPreview = (
        <ImageZone>

          {/*<audio ref="audio_tag" src={audioPreview} controls />*/}

          <AudioWrap>
            <div className="video__container">
              <span className="video__play"/>
            </div>

            <div className="video__wrap video__wrap_1">
              <span className="video__text">{file.name.split(".mp3")[0]}</span>
              <span className="video__subtext">{file.type}, {Math.round(file.size / 1024 / 1024) + " mb"}</span>
            </div>

            <button
              onClick={this.DeleteAudioItem}
              className={'delete_btn'}
            >
              <img src={dlt} alt="icon"/>
            </button>
          </AudioWrap>

          {/*<input*/}

          {/*  accept=".mp3,audio/*"*/}
          {/*  className={'hidden-input'}*/}
          {/*  id="contained-button-file"*/}
          {/*  name={'banner'}*/}
          {/*  onChange={(e) => this._handleAudioChange(e)}*/}
          {/*  type={'file'}*/}

          {/*/>*/}

        </ImageZone>

      );

    } else {

      $audioPreview = (

        <Dropzone onDrop={acceptedFile => uploadImage(acceptedFile)}>

          {({getRootProps, getInputProps, isDragActive}) => (

            <div {...getRootProps()} className={`cover__row cover__row_3`}>

              {isDragActive

                ? <span className="cover__title">Загрузить!</span>

                : <>

                  <span className="cover__title">Перетащите файл сюда</span>

                  <span className="cover__subtitle">или</span>

                  <Button
                    text="Выбрать файл на устройстве"
                    type="cover"
                  />

                </>}

              <input

                {...getInputProps()}
                accept=".mp3,audio/*"
                className={'hidden-input'}
                id="contained-button-file"
                name={'banner'}
                onChange={(e) => this._handleAudioChange(e)}

              />

            </div>

          )}

        </Dropzone>

      );

    }

    return (

      <TextModalOverlay>
        <TextModalBody>
          <img onClick={close} className={'closed'} src={closed} alt="icon"/>
          <div className="caption">
            <button
              onClick={back}
              className={'arrow_back'}>

              <img src={arrow} alt="icon"/>
            </button>

            <h2 className={'title'}>Аудиофайл</h2>
          </div>
          <InputText
            placeholder={'Условия упражнения'}
            value={this.state.text}
            set={(value) => this.setState({text: value})}
          />
          <InputText
            placeholder={'Название аудио'}
            value={this.state.name}
            set={(value) => this.setState({name: value})}
          />
          {
            deleteAudio
              ? <Dropzone onDrop={acceptedFile => uploadImage(acceptedFile)}>
                {({getRootProps, getInputProps, isDragActive}) => (
                  <div {...getRootProps()} className={`cover__row cover__row_3`}>
                    {isDragActive
                      ? <span className="cover__title">Загрузить!</span>
                      : <>
                        <span className="cover__title">Перетащите файл сюда</span>
                        <span className="cover__subtitle">или</span>
                        <Button
                          text="Выбрать файл на устройстве"
                          type="cover"
                        />
                      </>}
                    <input
                      {...getInputProps()}
                      accept=".mp3,audio/*"
                      className={'hidden-input'}
                      id="contained-button-file"
                      name={'banner'}
                      onChange={(e) => this._handleAudioChange(e)}
                    />
                  </div>
                )}
              </Dropzone>
              : $audioPreview
          }
          <Button
            type=""
            text="Добавить"
            func={this.state.type === 'add' ? this.createTask : this.editTask}
          />
        </TextModalBody>
      </TextModalOverlay>

    )
  }

}