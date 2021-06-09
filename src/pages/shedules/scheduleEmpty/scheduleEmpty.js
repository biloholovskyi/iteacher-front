import React from 'react';

import {NonoCoursesWrap, AddCourse} from './styled';

import empty from '../../../assets/media/image/schedule_empty.svg';
import plus from "../../../assets/media/icon/plus.svg";

const ScheduleEmpty = ({teacher, open}) => {
  return (
    <NonoCoursesWrap>
      <img src={empty} alt="image"/>
      <p>У вас нет запланированых занятий</p>
      {
        teacher && (
          <AddCourse onClick={()=>open(true)} className={'openModal'}>
            Добавить урок
            <img src={plus} alt="icon"/>
          </AddCourse>
        )
      }
    </NonoCoursesWrap>
  )
}

export default ScheduleEmpty;