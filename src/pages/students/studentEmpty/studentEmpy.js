import React from 'react';
import {Link} from "react-router-dom";

import {StudentEmptyWrap, AddCourse, SelectCourse} from './styled';
import square from '../../../assets/media/image/students_empty.svg';
import plus from "../../../assets/media/icon/plus.svg";
import arrow from "../../../assets/media/icon/arrow_right_color.svg";

const StudentEmpty = ({courses}) => {
  return (
    <StudentEmptyWrap>
      <img src={square} alt="image"/>
      <p>У вас нет учеников</p>
      {
        courses.length >= 1
          ? <div className="smallTitle">Вы можете добавлять учеников к курсам.</div>
          : <div className="smallTitle">Вы можете добавлять учеников к курсам. У вас пока нет курсов</div>
      }

      {
        courses.length >= 1

          ? <SelectCourse>
            <Link to='/courses'>Перейти к курсам
              <img src={arrow} alt="icon"/>
            </Link>
          </SelectCourse>

          :<AddCourse>
            <Link to='/addCourses'>Добавить курс
              <img src={plus} alt="icon"/>
            </Link>
          </AddCourse>
      }
    </StudentEmptyWrap>
  )
}

export default StudentEmpty;