import React, {Component} from 'react';

import MainInput from "../../../components/inputs/mainInput/mainInput";

import Calendar from './calendar';

import {CalendarModalWrapp, CalendarBody, InfoInput} from './CalendarStyled';

import closed from '../../../assets/media/icon/close.svg';
import arrow from '../../../assets/media/icon/arrow.svg';

import axiosInstance from "../../../service/iTeacherApi";
import TimeModal from "../timeModal/timeModal";

export default class CalendarModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      showCalendar: false,
      timeModal: false,
      timeData: null
    }
  }

  // show calendarSchedule
  showCalendar() {
    this.setState({showCalendar: !this.state.showCalendar})
    this.setState({timeModal: false})
  }

  handleDateChange = data => {
    this.setState({data, showCalendar: false})
  };

  // создание события
  createNewSchedule = async (e) => {
    e.preventDefault();

    let lesson = null;
    // const lesson = typeof this.props.data === 'object' ? this.props.data.id : JSON.parse(this.props.course.lessons)[0].id;
    if (typeof this.props.data === 'object') {
      lesson = this.props.data.id
    } else {
      if (this.props.course.lessons && this.props.course.lessons.length > 0) {
        const lessonArray = JSON.parse(this.props.course.lessons)
        if (lessonArray.length > 0)
          lesson = lessonArray[0].id
      }

    }

    // формирум объект для отправки на сервер
    const object = {
      date: e.target.date.value,
      time: e.target.time.value,
      user: this.props.course.teacher,
      student: this.props.course.student,
      course: this.props.course.id,
      lesson: lesson,
      status: 'active'
    }

    // отправляем данные на сервер и закрываем модалку переходя на следующий шаг
    await axiosInstance.post(`/schedules/`, object)
        .then(res => {
          // активируем курс
          this.props.active();
          // заркываем модалку и переходим на следующй шаг
          this.props.finish()
        })
        .catch(error => console.error(error));
  }

  selectTime = (value) =>  {
    this.setState({timeData: value})
    this.setState({timeModal: false})
  }

  openTimeModal() {
    this.setState({timeModal: !this.state.timeModal})
    this.setState({showCalendar: false})
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
{/*<<<<<<< HEAD*/}
{/*          <h3>{typeof this.props.data === 'object' ? 'Назначить занятие' : 'Назначьте первое занятие'}</h3>*/}
{/*          <InfoInput>*/}
{/*=======*/}
          <h3>Назначьте первое занятие</h3>
          <InfoInput arrow={this.state.showCalendar}>
{/*>>>>>>> origin/dropDownKolya*/}
            <p className={'openCalendar'} onClick={() => this.showCalendar()}>Дата</p>

            <div
              className={'showData'}>
              {data && <input type={'text'} readOnly={true} name={'date'} value={data.toLocaleDateString()}/>}
            </div>
            <img onClick={() => this.showCalendar()} className={'arrow'} src={arrow} alt="icon"/>
            {
              showCalendar
                ? <Calendar
                  new
                  templateCalendarStyle
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
            readOnly
            onClick={() => this.openTimeModal()}
            defaultValue={this.state.timeData}
            arrow={!this.state.timeModal}
            showArrow
          />
          {
            this.state.timeModal &&  <TimeModal templateTimeModal selectTime={this.selectTime}/>
          }
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
