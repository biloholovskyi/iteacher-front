import React from "react";

import CourseLIstItemWrap from "../CourseLIstItemWrap";

import {CourseListBody, CourseListModal} from "../usersStyled";

import closeImg from "../../../../assets/media/icon/close.svg";
import arrows from "../../../../assets/media/icon/arrow-left.svg";

const CoursesList = ({courses, close, back}) => {
  return (
    <CourseListModal>
      <img onClick={close} src={closeImg} alt="icon" className={'closed'}/>
      <div onClick={back} className="caption">
        <img src={arrows} alt="icons"/>
        <p>Курсы</p>
      </div>

      <CourseListBody>
        {courses.map(course => {
          return <CourseLIstItemWrap key={course.id} course={course}/>
        })}
      </CourseListBody>
    </CourseListModal>
  )
}

export default CoursesList;