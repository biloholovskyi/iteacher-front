import React, {Component} from "react";
import axios from "axios";

import InputText from "../../../inputs/inputsAdmin/inputText/inputText";
import Button from "../../../buttons/button/button";

import {TextModalBody, TextModalOverlay} from './styled';

import closed from "../../../../assets/media/icon/close.svg";
import arrow from '../../../../assets/media/icon/arrow-left.svg';

import ServerSettings from "../../../../service/serverSettings";

export default class VideoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      link: '',
      name: '',
      type: 'add',
      indexTask: 0,
      indexSection: 0,
      indexLesson: 0
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
        link: currentTaskData.link,
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

  // создаем видео задание
  createTask = async () => {
    const {indexTask, indexSection, indexLesson} = this.state;
    // создаем объект задания
    const task = {
      section: this.props.section.id,
      title: this.state.text,
      link: this.state.link,
      name_video: this.state.name,
      task_type: 'VIDEO',
    }

    // отправляем его на сервер
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const serverSettings = new ServerSettings();
    await axios.post(`${serverSettings.getApi()}api/tasks/`, task)
      .then(res => {
        // обновляем данные выбранной секции
        this.props.update(res.data, indexLesson, indexSection);
        this.props.close();
      })
      .catch(error => console.error(error));
  }

  // изминения задания
  editTask = async () => {
    const {section, setActiveSection, close, template, setTemplate, allTemplates, setAllTemplate} = this.props;
    const {indexTask, text, link, name, indexSection, indexLesson} = this.state;

    // обновляем текущую секцию
    const newTask = {
      ...section.tasks[indexTask],
      link,
      name_video: name,
      task_type: 'VIDEO',
      title: text
    }

    this.props.update(newTask, indexLesson, indexSection, true, indexTask);

    // обновляем сервер
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const serverSettings = new ServerSettings();
    await axios.put(`${serverSettings.getApi()}api/tasks/${newTask.id}/update/`, newTask)
      .then(res => {
        close()
      })
      .catch(error => console.error(error));
  }

  render() {
    const {back, close} = this.props;
    const {type} = this.state;

    return (
      <TextModalOverlay>
        <TextModalBody>
          <img onClick={close} className={'closed'} src={closed} alt="icon"/>
          <div className="caption">
            {
              type === 'add' ? (
                <button
                  onClick={back}
                  className={'arrow_back'}>
                  <img src={arrow} alt="icon"/>
                </button>
              ) : null
            }
            <h2 className={'title'}>Видео</h2>
          </div>

          <InputText
            placeholder={'Условия упражнения'}
            value = { this.state.text }
            set = { ( value ) => this.setState({ text: value }) }
          />

          <div className="addVideoSection">
            <InputText
              placeholder={'Ссылка на видео'}
              value = { this.state.link }
              set = { ( value ) => this.setState({ link: value }) }
            />
            <p>Вставьте ссылку на видео из Youtube, Google Drive, Vkontakte, Vimeo или TED. </p>
          </div>

          <InputText
            placeholder={'Название видео (необязательно)'}
            value = { this.state.name }
            set = { ( value ) => this.setState({ name: value }) }
          />

          <Button
            type = ""
            text={type === 'add' ? 'Добавить' : 'Сохранить'}
            func={type === 'add' ? this.createTask : this.editTask}
          />
        </TextModalBody>
      </TextModalOverlay>

    )
  }

}