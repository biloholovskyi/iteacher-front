import React from 'react';
import {Link} from "react-router-dom";

import {NonoCoursesWrap, AddCourse} from './styled';

import square from '../../../assets/media/image/course_empty.svg'
import library from '../../../assets/media/icon/library.svg';

const NoneCourses = () => {
  return (
    <NonoCoursesWrap>

      <div className="caption">
        <div className="BigTitle">Курсы</div>
        <AddCourse>
          <Link to='/addCourses'>Библиотека курсов
            <img src={library} alt="icon"/>
          </Link>
        </AddCourse>
      </div>

      <img src={square} alt="image"/>
      <p>У вас еще нет курсов</p>
      <div className="small_title">Выберите необходимый курс в библиотеке</div>
    </NonoCoursesWrap>
  )
}

export default NoneCourses;
