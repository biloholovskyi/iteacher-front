import React, {useState, useEffect, useRef} from "react";
import {useHistory} from "react-router";

import MainButton from "../../../components/buttons/mainButton/mainButton";
import ModalButtons from "./modalButtons/modalButtons";

import {ModalCardWrap, Caption, InfoBlock} from './styled';

import closed from '../../../assets/media/icon/close.svg';
import editor from './media/edit.svg'
import ava from "../../../assets/media/icon/avatar.svg";

import axiosInstance from "../../../service/iTeacherApi";

const ModalCard = ({close, event, course, lesson, studentData, update}) => {
  const [student, setStudent] = useState('');

  // состояние модалки "редактировать/удалить"
  const [buttonsModal, setButtonsModal] = useState(false)

  const history = useHistory();

  useEffect(() => {
    document.addEventListener("click", (e) => closeModalButtons(e));
  }, []);


  useEffect(() => {
    setStudent(studentData);
  }, [studentData])

  // создание урока (классной комнаты)
  const startLesson = async () => {
    let idClassRoom = null;

    // получаем данные урока
    await axiosInstance.get(`/lesson/${event.lesson}/`)
      .then(res => {
        const data = {
          name: res.data.name,
          lesson: JSON.stringify(res.data),
          lesson_id: event.lesson,
          status: 'progress',
          status_teacher: 'false',
          status_student: 'false',
          student: event.student,
          teacher: event.user
        }

        // получаем данные курса для формирования JSON
        axiosInstance.get(`/courses/${event.course}/`)
          .then(res => {
            data.course = JSON.stringify(res.data)
          })
          .then(() => {
            // создаем новую комнату
            axiosInstance.post(`/classrooms/`, data)
              .then(res => {
                idClassRoom = res.data.id
                // обновляем статус события
                const dataEvent = {
                  ...event,
                  status: 'process',
                  class_room: idClassRoom
                }

                axiosInstance.put(`/schedules/${event.id}/update/`, dataEvent)
                  .then(() => {
                    history.push('/class-room/' + idClassRoom)
                  })
                  .catch(error => console.error(error));
              })
              .catch(error => console.error(error));
          })
          .catch(er => console.error(er))
      })
      .catch(error => console.error(error));
  }

  // удаление урока
  const deleteLesson = async () => {
    const data = {
      ...event,
      status: 'deleted'
    }
    await axiosInstance.put(`/schedules/${data.id}/update/`, data)
      .then(() => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
      })
      .catch(error => console.error(error));
  }

  const [time, setTime] = useState(null);
  // добавляем 0
  const addZero = (number) => {
    return parseInt(number) < 10 ? `0${number}` : number;
  }
  // запускаем таймер
  setInterval(() => {
    // получаем текущее время по москве
    const getCurrentTime = () => {
      const time = new Date(Date.now());
      const year = time.getUTCFullYear();
      const month = time.getUTCMonth();
      const day = time.getUTCDate();
      const second = time.getUTCSeconds();
      const hour = time.getUTCHours();
      const minute = time.getUTCMinutes();

      const needTime = new Date(Date.UTC(year, month, day, hour, minute, second));
      return needTime.getTime();
    }

    const currentTime = getCurrentTime();

    // получаем время начала урока
    const getStartTime = () => {
      const stringDate = `${event.date.split('.')[2]}-${event.date.split('.')[1]}-${event.date.split('.')[0]} ${event.time}:00`
      const time = new Date(stringDate);
      return time.getTime();
    }

    const startTime = getStartTime();

    // получаем разницу во времени
    const timeToStart = startTime - currentTime;

    // переводим в читабельную строку
    let hour = timeToStart / 3600000;
    hour = hour.toString().split('.')[0];

    let minute = timeToStart / 60000;
    // отнимаем часы из минут
    minute = minute - (parseInt(hour) * 60)
    minute = minute.toString().split('.')[0];

    let second = timeToStart / 1000;
    // отинмаем минуты из секунд
    second = second - (parseInt(timeToStart / 60000) * 60);
    second = second.toString().split('.')[0];

    let timeString = `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
    if (timeToStart < 0) {
      timeString = false;
    }
    setTime(timeString)
  }, 1000)

  // ссылка на модалку
  const modalEl = useRef(null);
  // закрытие модалки "редактировать/удалить"
  const closeModalButtons = (e) => {
    // проверяем был ли клик по списку
    if (modalEl.current === e.target && !modalEl.current.contains(e.target)) {
      setButtonsModal(false);
    }
  }

  return (
    <ModalCardWrap className={'card'}>
      <div className="right">

        {/*модалка "редактировать/удалить"*/}
        {
          buttonsModal && <ModalButtons update={update} event={event} onDelete={deleteLesson}/>
        }

        <Caption>
          <div className="title_block">
            <img src={student && student.photo ? student.photo : ava} alt="" className="photo"/>
            <div className="info-block">
              <div className="title">{student.name || student.email}</div>
              <div className="date">{event.date}, {event.time}</div>
            </div>
          </div>
          <div className="btn_block">
            <button onClick={() => {
              setButtonsModal(true)
            }}><img src={editor} alt="icon"/></button>
            <button
              onClick={close}
            ><img src={closed} alt="icon"/></button>
          </div>
        </Caption>

        <InfoBlock>
          <div className="info">
            <span>Курс</span>
            <div className="course_name">{course.name}</div>
          </div>
          <div className="info info--last">
            <span>Занятие</span>
            <div className="student_name">
              <div className="name">{lesson.name}</div>
            </div>
          </div>
          {
            event.status !== 'process' ? (
              <div className={'timer-block'}>
                <div className="timer-block__text">{time ? 'Начнется через' : 'Скоро начнется'}</div>
                <div className="timer-block__info">
                  <div className="timer">{time}</div>
                  <MainButton
                    text={'Начать'}
                    func={startLesson}
                  />
                </div>
              </div>
            ) : (
              <div className={'timer-block'}>
                <div className="timer-block__text">Урок начался!</div>
                <div className="timer-block__info">
                  <MainButton
                    text={'Войти'}
                    func={() => history.push('/class-room/' + event.class_room)}
                  />
                </div>
              </div>
            )
          }

        </InfoBlock>

      </div>
    </ModalCardWrap>
  )
}

export default ModalCard;