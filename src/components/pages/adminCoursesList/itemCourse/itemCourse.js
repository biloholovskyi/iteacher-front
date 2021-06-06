import React from 'react';
import {Link} from 'react-router-dom';

import CourseCover from "../../../courseCover/courseCover";

import {
  ItemCourseWrap,
  SpanTitle,
  SpanPrice
} from './itemCourseStyled';

const ItemCourse = ({course}) => (
  <ItemCourseWrap>
    <Link to={`/admin/courses/${course.id}`}>
      <CourseCover course={course} template/>

      <SpanTitle>
        {course.name}
      </SpanTitle>

      <SpanPrice>
        {course.price} ₽
      </SpanPrice>

    </Link>
  </ItemCourseWrap>
);

export default ItemCourse;
