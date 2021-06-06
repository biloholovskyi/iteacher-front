import React, {Component} from 'react';
import axios from "axios";

import MainInput from "../../../inputs/mainInput/mainInput";

import Calendar from './calendar';

import {CalendarModalWrapp, CalendarBody, InfoInput} from './CalendarStyled';

import closed from '../../../../assets/media/icon/close.svg';
import arrow from '../../../../assets/media/icon/arrow.svg';

import ServerSettings from "../../../../service/serverSettings";

export default class CalendarModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      showCalendar: false
    }
  }

  // show calendarSchedule
  showCalendar() {
    this.setState({showCalendar: !this.state.showCalendar})
  }

  handleDateChange = data => {
    this.setState({data, showCalendar: false})
  };

  // создание события
  createNewSchedule = async (e) => {
    e.preventDefault();

    // формирум объект для отправки на сервер
    const object = {
      date: e.target.date.value,
      time: e.target.time.value,
      user: this.props.course.teacher,
      student: this.props.course.student,
      course: this.props.course.id,
      lesson: JSON.parse(this.props.course.lessons)[0].id,
      status: 'active'
    }

    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();
    // отправляем данные на сервер и закрываем модалку переходя на следующий шаг
    await axios.post(`${server.getApi()}api/schedules/`, object)
        .then(res => {
          // активируем курс
          this.props.active();
          // заркываем модалку и переходим на следующй шаг
          this.props.finish()
        })
        .catch(error => console.error(error));
  }

  render() {
    const {close} = this.props;
    const {data, showCalendar} = this.state;
    return (
      <CalendarModalWrapp>
        <CalendarBody onSubmit={(e) => this.createNewSchedule(e)}>
          <img className={'close'} src={closed} alt="icon" onClick={(e) => {
            close(e)
          }}/>
          <h3>Назначьте первое занятие</h3>
          <InfoInput>
            <p className={'openCalendar'} onClick={() => this.showCalendar()}>Дата</p>

            <div
              className={'showData'}>
              {data && <input type={'text'} readOnly={true} name={'date'} value={data.toLocaleDateString()}/>}
            </div>
            <img onClick={() => this.showCalendar()} className={'arrow'} src={arrow} alt="icon"/>
            {
              showCalendar
                ? <Calendar
                  onChange={this.handleDateChange}
                />
                : null
            }
          </InfoInput>
          <MainInput
            type={'text'}
            label={'Время'}
            name={'time'}
            required={true}
          />
          <button
            type={'submit'}
            className={'addLesson'}
          >
            Назначить занятие
          </button>
        </CalendarBody>
      </CalendarModalWrapp>
    )
  }
}
