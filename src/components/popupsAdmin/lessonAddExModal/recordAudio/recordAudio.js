import React, {Component} from "react";

import InputText from "../../../inputs/inputsAdmin/inputText/inputText";
import Button from "../../../buttons/button/button";
import AudioPlace from "./audioPlace/audioPlace";

import {TextModalBody, TextModalOverlay} from '../audio/styled';

import closed from "../../../../assets/media/icon/close.svg";
import arrow from '../../../../assets/media/icon/arrow-left.svg';
import axios from "axios";
import ServerSettings from "../../../../service/serverSettings";

export default class RecordAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      name: '',
      type: 'add',
      indexTask: 0,
      indexSection: 0,
      indexLesson: 0,
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
    data.set("task_type", "RECORD");
    data.set("title", this.state.text);
    data.set("section", this.props.section.id);

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
    const {section, close} = this.props;
    const {indexTask, text, indexSection, indexLesson} = this.state;

    // обновляем текущую секцию
    const newTask = {
      ...section.tasks[indexTask],
      task_type: 'RECORD',
      title: text
    }

    this.props.update(newTask, indexLesson, indexSection, true, indexTask);

    // обновляем сервер
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    // данные для сервера
    const data = new FormData();
    data.set("title", text);

    const serverSettings = new ServerSettings();
    await axios.put(`${serverSettings.getApi()}api/tasks/${newTask.id}/update/`, data)
      .then(res => {
        close()
      })
      .catch(error => console.error(error));
  }

  render() {
    const {back, close} = this.props;

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

            <h2 className={'title'}>Запись аудио</h2>
          </div>
          <InputText
            placeholder={'Условия упражнения'}
            value={this.state.text}
            set={(value) => this.setState({text: value})}
          />

          <AudioPlace/>

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