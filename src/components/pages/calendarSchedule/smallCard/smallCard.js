import React, {useEffect, useRef, useState} from 'react';
import {useHistory} from "react-router";

import ModalCard from './ModalCard';

import {SmallCardWrap, ActiveCard} from "./styled";

import arrow from '../../../../assets/media/icon/arrow-modal.svg'

const SmallCard = ({events, course}) => {
  const history = useHistory();

  const [modalCard, setModalCard] = useState(false);
  const [lessonData, setLessonData] = useState({})

  useEffect(() => {
    // получаем нужный урок
    const lessonIndex = JSON.parse(course.lessons).findIndex(l => parseInt(l.id) === parseInt(events.lesson));
    setLessonData(JSON.parse(course.lessons)[lessonIndex]);
  }, [])

  // ссылка на модалку
  const selectListEl = useRef(null);

  const closeCardModal = () => {
    setModalCard(false)
  }

  // закрытие при клике вне списка области
  const closeOutsideClick = (e) => {
    // проверяем был ли клик по списку
    if (selectListEl.current && !selectListEl.current.contains(e.target)) {
      setModalCard(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => closeOutsideClick(e));
  }, []);

  return (
    <>
      {
        events.status === 'process'
          ? (
            <ActiveCard
              id={events.id}
              onClick={() => history.push('/class_room/' + events.class_room)}
            >
              <div>Урок начался</div>
              <div>Нажмите чтобы войти</div>
              <img src={arrow} alt="icon"/>
            </ActiveCard>
          ) : (
            <SmallCardWrap
              id={events.id}
              ref={selectListEl}
              onClick={() => setModalCard(true)}>
              <div className="indicator"/>
              <div className="title">{lessonData.name}</div>
            </SmallCardWrap>
          )
      }

      {
        modalCard && (
          <ModalCard
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