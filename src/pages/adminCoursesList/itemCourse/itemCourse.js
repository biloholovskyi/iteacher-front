import React from 'react';
import {Link} from 'react-router-dom';

import CourseCover from "../../../components/courseCover/courseCover";

import {
  ItemCourseWrap,
  SpanTitle,
  SpanPrice
} from './itemCourseStyled';

const ItemCourse = ({course}) => (
  <ItemCourseWrap>
    <Link to={`/admin-panel/templates/${course.id}`}>
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
