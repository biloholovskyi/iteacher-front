import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";

import Button from "../../../buttons/button/button";
import {setTypeAdminHead, setTemplate, getAllTemplates} from "../../../../actions";

import {IconArrow, HeaderInput, ChangeTime} from './headerCreateStyled';
import axios from "axios";
import axiosInstance from "../../../../service/iTeacherApi";

const HeaderCreate = (props) => {
  const history = useHistory();
  const {
    type,
    name,
    selectTemplate,
    setTypeAdminHead,
    setTemplate,
    getAllTemplates,
    allTemplates,
    selectSection
  } = props;
  // задаем имя в шапке
  const [headerName, setHeaderName] = useState(name);
  // задаем тип
  const [headerType, setHeaderType] = useState('course');
  // проверяем происходит ли редактирование
  const [editing, setEditing] = useState(false);

  // задаем тип
  useEffect(() => {
    setHeaderType(type);
  })

  // задаем имя при рендере страницы
  useEffect(() => {
    // проверяем есть ли уже имя и тот ли у нас тип
    if (headerName && headerType === type || editing) {
      return
    }
    setHeaderName(name)
  });

  const onChangeName = (e) => {
    setEditing(true);
    setHeaderName(e.target.value);
  }

  // меняем название шаблона
  const saveChangeName = async (e) => {
    setEditing(false);
    // проверяем поменялось ли название
    if (selectTemplate.name === headerName) {
      return
    }

    // обновляем данные в шапке
    setTypeAdminHead(type, headerName);

    // обновляем данные текущем шаблоне
    const newTemplate = {
      ...selectTemplate,
      name: headerName
    }
    setTemplate(newTemplate);

    // обновляем данные в списке всех шаблонов
    const index = allTemplates.findIndex(t => parseInt(t.id) === parseInt(newTemplate.id));
    const newTemplatesList = [
      ...allTemplates.slice(0, index),
      newTemplate,
      ...allTemplates.slice(index + 1)
    ]
    getAllTemplates(newTemplatesList);

    // обновляем сервер
    axiosInstance.put(`/template/${newTemplate.id}/update/`, newTemplate)
      .catch(error => console.error(error));
  }

  // меняем название урока
  const saveChangeNameLesson = async (e) => {
    setEditing(false);
    // нужно получить данные текущего урока
    const indexLesson = selectTemplate.lesson.findIndex(l => parseInt(l.id) === parseInt(selectSection.lesson));
    // проверяем поменялось ли название
    if (selectTemplate.lesson[indexLesson].name === headerName) {
      return
    }

    // обновляем данные в шапке
    setTypeAdminHead(type, headerName);

    // обновляем данные текущем шаблоне
    const newLesson = {
      ...selectTemplate.lesson[indexLesson],
      name: headerName
    }

    const newTemplate = {
      ...selectTemplate,
      lesson: [...selectTemplate.lesson.slice(0, indexLesson), newLesson, ...selectTemplate.lesson.slice(indexLesson + 1)]
    }
    setTemplate(newTemplate);

    // обновляем данные в списке всех шаблонов
    const index = allTemplates.findIndex(t => parseInt(t.id) === parseInt(newTemplate.id));
    const newTemplatesList = [
      ...allTemplates.slice(0, index),
      newTemplate,
      ...allTemplates.slice(index + 1)
    ]
    getAllTemplates(newTemplatesList);

    // обновляем сервер
    axiosInstance.put(`/lesson/${newLesson.id}/update/`, newLesson)
        .catch(error => console.error(error));
  }

  return (
    <>
      <IconArrow onClick={history.goBack} className="header__arrow"/>

      <HeaderInput
        className="header__title"
        value={headerName}
        onChange={(e) => onChangeName(e)}
        onBlur={(e) => {
          // eslint-disable-next-line no-unused-expressions
          type === 'course' ? saveChangeName(e) : type === 'lesson' ? saveChangeNameLesson(e) : null;
        }}
        onKeyPress={(e) => e.key === 'Enter' && type === 'course' ? saveChangeName(e) : e.key === 'Enter' && type === 'lesson' ? saveChangeNameLesson(e) : null}
        title="Нажмите, чтобы редактировать"
      />
      {/*нужен рефакторинг кода ниже*/}
      {/*{*/}
      {/*  type === 'lessonPage'*/}

      {/*  &&*/}

      {/*  <ChangeTime className="header__update">*/}
      {/*    Последнее обновление: { updateTime < 15 ? "Только что" : `${updateTime} минут. назад`}*/}
      {/*  </ChangeTime>*/}
      {/*}*/}
      <Button
        text="Опубликовать"
        func={() => null} // это тупо заглушка
      />
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    selectTemplate: state.selectTemplate,
    allTemplates: state.templates,
    selectSection: state.selectSection
  }
};

const mapDispatchToProps = {
  setTypeAdminHead,
  setTemplate,
  getAllTemplates
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCreate);