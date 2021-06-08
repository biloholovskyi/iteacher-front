import React  from "react";

import CourseCover from "../../courseCover/courseCover";

import {CourseListItem} from "./usersStyled";

const CourseLIstItemWrap = ({course}) => {
  return(
    <CourseListItem>
      <CourseCover course={course} extraSmall={true}/>
      <div className="title">{course.name}</div>
    </CourseListItem>
  )
}

export default CourseLIstItemWrap;