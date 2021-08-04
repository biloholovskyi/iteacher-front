import React from 'react';
import { connect } from "react-redux";
import PopupLesson from '../popupLesson';

import {setTemplate, getAllTemplates} from "../../../../actions";
import axiosInstance from "../../../../service/iTeacherApi";

export const PopupEditLesson = (props) => {
  // задаем старрые данные урока
  const oldData = props.selectTemplate.lesson.find(lesson => parseInt(lesson.id) === parseInt(props.id));

  const editLessonData = async (name) => {
    // создаем новый объект урока
    const newLesson = {
      ...oldData,
      name
    }

    // обновляем текущий шаблон
    const indexLesson = props.selectTemplate.lesson.findIndex(lesson => parseInt(lesson.id) === parseInt(newLesson.id));
    const newTemplate = {
      ...props.selectTemplate,
      lesson: [...props.selectTemplate.lesson.slice(0, indexLesson), newLesson, ...props.selectTemplate.lesson.slice(indexLesson + 1)]
    }
    props.setTemplate(newTemplate);

    // обновляем список всех шаблонов
    const indexTemplate = props.allTemplates.findIndex(template => parseInt(template.id) === parseInt(props.selectTemplate.id));
    const newTemplatesList = [...props.allTemplates.slice(0, indexTemplate), newTemplate, ...props.allTemplates.slice(indexTemplate + 1)];
    props.getAllTemplates(newTemplatesList);

    await axiosInstance.put(`/lesson/${newLesson.id}/update/`, newLesson)
      .then(res => {
        props.close();
      })


      .catch(error => console.error(error));
  }

  return (
    <PopupLesson
      // не понятно что за типы он передавал
      type={2}

      func={editLessonData}
      close={props.close}
      name = {oldData.name}
      // это похоже для сортировки или драга
      num = { 1 }
      // это тоже похоже только для сортировки и драга
      countLessons = { 1 }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    selectTemplate: state.selectTemplate,
    allTemplates: state.templates
  }
};

const mapDispatchToProps = {
  setTemplate,
  getAllTemplates
};

export default connect( mapStateToProps, mapDispatchToProps )( PopupEditLesson );