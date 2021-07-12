import React, {useEffect, useRef, useState} from 'react';
import {useHistory} from "react-router";
import axios from "axios";

import ModalCard from './ModalCard';

import {SmallCardWrap} from "./styled";

import ava from '../../../assets/media/icon/avatar.svg'

import ServerSettings from "../../../service/serverSettings";

const api = new ServerSettings();

const SmallCard = ({events, course}) => {

  const [modalCard, setModalCard] = useState(false);
  const [lessonData, setLessonData] = useState({})
  // данные студента
  const [studentData, setStudentData] = useState(null)

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
    await axios.get(`${api.getApi()}api/users/${events.student}/`)
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
        events.status !== 'completed' &&
        (
          <SmallCardWrap
            id={events.id}
            ref={selectListEl}
            onClick={() => setModalCard(true)}
          >
            {/*<div className="indicator"/>*/}
            <img src={studentData && studentData.photo ? `${api.getApi()}${studentData.photo.slice(1)}` : ava}
                 alt="photo" className="photo"/>
            <div className="title">{studentData && studentData.name}</div>
          </SmallCardWrap>
        )
      }

      {
        modalCard && (
          <ModalCard
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

export default SmallCard;