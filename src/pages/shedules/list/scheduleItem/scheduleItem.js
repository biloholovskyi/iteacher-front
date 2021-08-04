import React, {useState, useEffect} from "react";
import {useHistory} from "react-router";

import MainButton from "../../../../components/buttons/mainButton/mainButton";

import Timer from "../timer/timer";
import MainInfo from "../mainInfo/mainInfo";
import MobileButton from "../mobileButton/mobileButton";
import NewLesson from "../newLesson/newLesson";

import {HomeWorkItemWrap, LeftTimes, NameCourse} from './styled';

import ok from '../../../../assets/media/icon/ok-green.svg';

import axiosInstance from "../../../../service/iTeacherApi";

// type - нужен что бы понимать вошел студент или преподаватель
const ScheduleItem = ({done, event, course, type}) => {
  const history = useHistory();

  // ширина экрана
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const handlerResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => handlerResize())
  }, [])

  const [lessonData, setLessonData] = useState({})
  const [lessonNumber, setLessonNumber] = useState(1);
  // новый урок
  const [newLesson, setNewLesson] = useState(false);

  useEffect(() => {
    if(type === 'student') {
      // получаем массив из стора
      const storeList = localStorage.getItem('i-teacher-new-schedules');
      if(storeList) {
        const parseList = JSON.parse(storeList);
        const status = parseList.find(lesson => parseInt(lesson) === parseInt(event.id));
        if(status === undefined) {
          setNewLesson(true);
          parseList.push(event.id);
          localStorage.setItem('i-teacher-new-schedules', JSON.stringify(parseList));
        }
      } else {
        setNewLesson(true);
        localStorage.setItem('i-teacher-new-schedules', JSON.stringify([event.id]));
      }
    }
  }, [event])

  useEffect(() => {
    // получаем нужный урок
    const lessonIndex = JSON.parse(course.lessons).findIndex(l => parseInt(l.id) === parseInt(event.lesson));
    setLessonData(JSON.parse(course.lessons)[lessonIndex]);
    setLessonNumber(lessonIndex + 1);
  }, [])

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

  return (
    <>
      {
        windowWidth < 440 && event.status === 'process' ? (
          <MobileButton/>
        ) : (
          <HomeWorkItemWrap>
            {/*основная информация урока*/}
            <MainInfo course={course} event={event} lessonNumber={lessonNumber} lessonData={lessonData}/>

            {/*название курса*/}
            <NameCourse>
              <div className="td-wrapper td-wrapper--no-flex">
                <p className="label">Курс</p>
                <p className="name">{course.name}</p>
              </div>
            </NameCourse>

            {
              type === 'student' ? newLesson ? <NewLesson/> : <td/> : null
            }

            {/*таймер*/}
            {
              event.status === 'active' && <Timer event={event} type={type}/>
            }

            {/*кнопка начала урока*/}
            {
              event.status === 'active' && type === 'teacher'
                // если урок еще не начат
                ? (
                  <td className="right" style={{width: '1%', whiteSpace: 'nowrap'}}>
                    <div className="td-wrapper td-wrapper--end td-wrapper--no-padding schedule-buttons" style={{paddingRight: '16px'}}>
                      <MainButton text={'Начать урок'} type={'button'} func={() => startLesson()}/>
                    </div>
                  </td>
                )
                // если урок уже начат
                : event.status === 'process' && (
                <td className="right" style={{width: '1%', whiteSpace: 'nowrap'}} colSpan={2}>
                  <div className="td-wrapper td-wrapper--end td-wrapper--no-padding" style={{paddingRight: '16px'}}>
                    <p className="alert-text">Урок начался!</p>
                    <MainButton
                      text={'Войти'}
                      type={'button'}
                      classList={'schedule-start-button'}
                      func={() => history.push('/class-room/' + event.class_room)}
                    />
                  </div>
                </td>
              )
            }

            {
              done && (
                <td className="right">
                  <div className="td-wrapper td-wrapper--end">
                    <div className={'DoneBlock'}>
                      <img src={ok} alt="icon"/>
                      <LeftTimes className={'done'}>Домашнее задание выполнено</LeftTimes>
                    </div>
                  </div>
                </td>
              )
            }
          </HomeWorkItemWrap>
        )
      }
    </>
  )
}

export default ScheduleItem;