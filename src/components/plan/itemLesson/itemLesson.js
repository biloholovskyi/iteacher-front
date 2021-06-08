import React, {useState, useEffect} from 'react';
import {sortableHandle} from 'react-sortable-hoc';
import {NavLink} from "react-router-dom";

import {ItemLessonWrap} from './itemLessonStyled';
import {connect} from "react-redux";

const ItemLesson = ({data, id, index, course, count = '1', onTouch, onEdit, onDelete}) => {

  const [lessonData, setLessonData] = useState({});

  // передача данных урока
  useEffect(() => {
    setLessonData(data);
  })

  // это нужно будет удалить и переделать
  const DragHandle = sortableHandle(() => (
    <span className="item-lesson__move"/>
  ));

  return (
    <ItemLessonWrap to={`/admin/courses/${course}/lessons/${lessonData.id}`}>
      <DragHandle/>
      <span className="item-lesson__number">#</span>
      <span className="item-lesson__count">{count}</span>
      <span
        className="item-lesson__name"
        onClick={onTouch}
      >
        {lessonData.name}
      </span>
      <span className="item-lesson__more"/>
      <span
        className="item-lesson__delete"
        onClick={(e) => onDelete(e, id)}
      />

      <span
        className="item-lesson__edit"
        onClick={(e) => onEdit(e, id)}
      />

    </ItemLessonWrap>
  );
}

const mapStateToProps = (state) => {

  return {
    // это нужно удалить
    lessons: state.lessons
  }

};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemLesson);