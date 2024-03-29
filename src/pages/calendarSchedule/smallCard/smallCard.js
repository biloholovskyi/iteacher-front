import React, {useEffect, useRef, useState} from 'react';

import ModalCard from './ModalCard';
import {SmallCardWrap} from "./styled";
import ava from '../../../assets/media/icon/avatar.svg'

import axiosInstance from "../../../service/iTeacherApi";


const SmallCard = ({events, course, update}) => {

  const [modalCard, setModalCard] = useState(false);
  const [lessonData, setLessonData] = useState({})
  // данные студента
  const [studentData, setStudentData] = useState(null)

  // ширина эмейла студента
  const [titleW, setTitleW] = useState(0)

  useEffect(() => {
    setTitleWidthOnResize();
    window.addEventListener('resize', setTitleWidthOnResize)
  }, [])

  const setTitleWidthOnResize = () => {
    try {
      if(window.innerWidth > 991) {
        const k = window.innerWidth < 1260 ? 64 : 68;
        const width = selectListEl.current.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].clientWidth - k;
        setTitleW(width)
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    // получаем нужный урок
    const lessonIndex = JSON.parse(course.lessons).findIndex(l => parseInt(l.id) === parseInt(events.lesson));
    setLessonData(JSON.parse(course.lessons)[lessonIndex]);
  }, [])

  // ссылка на карточку
  const selectListEl = useRef(null);

  const closeCardModal = () => {
    setModalCard(false)
  }

  // закрытие при клике вне списка области
  const closeOutsideClick = (e) => {
    // // проверяем был ли клик по списку
    // if (e.target !== selectListEl.current && !selectListEl.current.contains(e.target)) {
    //   console.log(e.target !== selectListEl.current)
    //   console.log(e.target)
    //   console.log(selectListEl.current)
    //   setModalCard(false);
    // }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => closeOutsideClick(e));
  }, []);

  // получаем данные студента
  const getStudentData = async () => {
    await axiosInstance.get(`/users/${events.student}/`)
      .then(res => {
        setStudentData(res.data);
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getStudentData().catch(error => console.error(error));
  }, [events]);

  return (
    <>
      {
        events.status !== 'deleted' && (
          <>
            <SmallCardWrap
              titleW={titleW}
              id={events.id}
              ref={selectListEl}
              onClick={() => setModalCard(true)}
            >
              {/*<div className="indicator"/>*/}
              <img src={studentData && studentData.photo ? studentData.photo : ava} alt="" className="photo"/>
              <div className="title">{studentData ? studentData.name ? studentData.name : studentData.email : ''}</div>
            </SmallCardWrap>

            {
              modalCard && events.status !== 'completed' && (
                <ModalCard
                  update={update}
                  studentData={studentData}
                  event={events}
                  course={course}
                  lesson={lessonData}
                  close={closeCardModal}
                />
              )
            }
          </>
        )
      }

    </>
  )
}

export default SmallCard;