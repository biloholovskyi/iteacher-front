import React, {Component} from "react";
import Dropzone from 'react-dropzone';
import axios from "axios";

import InputText from "../../../inputs/inputsAdmin/inputText/inputText";
import Button from "../../../buttons/button/button";

import {TextModalBody, TextModalOverlay, ImageZone} from './styled';

import closed from "../../../../assets/media/icon/close.svg";
import arrow from '../../../../assets/media/icon/arrow-left.svg';

import ServerSettings from "../../../../service/serverSettings";

export default class AddImageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      file: '',
      imagePreviewUrl: '',
      type: 'add',
      indexTask: 0,
      indexSection: 0,
      indexLesson: 0
    }
  }

  componentDidMount() {
    // это похоже нужно удалить
    setTimeout(() => {
      this.file = React.createRef();
    }, 1000)
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
    const data = new FormData();
    data.set("task_type", "PHOTO");
    data.set("title", this.state.text);
    data.set("section", this.props.section.id);
    data.set("file", this.state.file);

    // return
    const task = {
      section: this.props.section.id,
      title: this.state.text,
      file: this.state.file,
      task_type: 'PHOTO',
    }

    // отправляем его на сервер
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const serverSettings = new ServerSettings();

    await axios.post(`${serverSettings.getApi()}api/tasks/`, data)
      .then(res => {
        console.log(res);
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
    const {section, close} = this.props;
    const {indexTask, text, file, indexSection, indexLesson, imagePreviewUrl} = this.state;
    // обновляем текущую секцию
    const newTask = {
      ...section.tasks[indexTask],
      task_type: 'PHOTO',
      title: text,
      file: imagePreviewUrl ? imagePreviewUrl : file,
    }

    this.props.update(newTask, indexLesson, indexSection, true, indexTask);

    // обновляем сервер
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    // данные для сервера
    const data = new FormData();
    data.set("task_type", "PHOTO");
    data.set("title", text);
    // нужно проверить был ли изминен файл
    if(this.state.imagePreviewUrl) {
      data.set("file", file);
    }

    const serverSettings = new ServerSettings();
    await axios.put(`${serverSettings.getApi()}api/tasks/${newTask.id}/update/`, data)
      .then(res => {
        close()
      })
      .catch(error => console.error(error));
  }

  // add image function
  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    function uploadImage(file) {
      console.log(`Загружено изображение ${file.name}:`, file);
      this.props.close();
    }

    const {back, close} = this.props;

    const {imagePreviewUrl, file} = this.state;

    // code for download image

    let $imagePreview = null;

    if (imagePreviewUrl || file) {
      $imagePreview = (
        <ImageZone>
          <img alt={'img'} className={'bannerVisible'} src={imagePreviewUrl ? imagePreviewUrl : file}/>
          <input
            ref={this.file}
            accept="image/*"
            className={'hidden-input'}
            id="contained-button-file"
            name={'banner'}
            onChange={(e) => this._handleImageChange(e)}
            type={'file'}
          />
        </ImageZone>
      );
    } else {
      $imagePreview = (

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
                ref={this.file}
                {...getInputProps()}
                accept="image/*"
                className={'hidden-input'}
                id="contained-button-file"
                name={'banner'}
                onChange={(e) => this._handleImageChange(e)}
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

            <h2 className={'title'}>Изображение</h2>

          </div>

          <InputText
            placeholder={'Условия упражнения'}
            value={this.state.text}
            set={(value) => this.setState({text: value})}
          />

          {$imagePreview}

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