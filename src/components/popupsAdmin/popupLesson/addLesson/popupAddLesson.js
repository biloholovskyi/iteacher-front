import React from 'react';
import {connect} from "react-redux";
import PopupLesson from '../popupLesson';

import {setTemplate, getAllTemplates} from "../../../../actions";
import axios from "axios";
import ServerSettings from "../../../../service/serverSettings";

const PopupAddLesson = (props) => {
  // функция создания урока
  async function addLesson(data) {
    //этот кусок кода имитирует получение последнего id. на продакшене сам решишь как должно быть
    // скорее всего это вообще не нужно, так как id добавляеться автоматически всегда
    let _id = 1;

    // не понятно зачем нужна проверка на то есть ли уроки
    props.lessonsList.length > 0 && props.lessonsList.forEach(lesson => {
      // добавления последнего айдишника насколько понимаю
      // вообщим пока можно оставить это
      if (+lesson.course !== +props.course) {
        _id += 1
      }
    });

    // создания урока и запись его в объект активного шаблона
    // нужно получить сам объект
    // он у нас есть в props.selectTemplate
    // создать новый объект нового урока с данными
    const newLesson = {
      // пока для теста добавим id
      // id: _id,
      name: data,
      // не совсем понятно где добавлять это описания в админке, пока просто заглушка
      desc: 'Lorem',
      sections: [],
      template: props.course
    }

    // создать новый объект шаблона с новым уроков внутри
    const newLessonList = [...props.selectTemplate.lesson, newLesson];
    const newTemplate = {
      ...props.selectTemplate,
      lesson: newLessonList
    }

    // сохранение нового урока на сервере
    // нужен объект самого урока без id
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const serverSettings = new ServerSettings();

    await axios.post(`${serverSettings.getApi()}api/lesson/`, newLesson)
      .then(res => {
        // нужно теперь повторить все и добавить id
        // обновить запись выбраного шаблона в редаксе
        const newTemplateUpdate = {
          ...newTemplate,
          lesson: [...props.selectTemplate.lesson, res.data]
        }
        props.setTemplate(newTemplateUpdate);

        // обновим массив всех шаблонов
        // нужно получить из массива нужный шаблон
        const needTemplateIndex = props.allTemplates.findIndex((t) => t.id.toString() === props.course.toString());
        // заменить шаблон на обновленный
        const newArrayTemplates = [...props.allTemplates.slice(0, needTemplateIndex), newTemplateUpdate, ...props.allTemplates.slice(needTemplateIndex + 1)];

        // перезаписать в редакс
        props.getAllTemplates(newArrayTemplates);
      })
      .catch(error => console.error(error));
    // закрытия модалки после создания нового урока
    props.close();
  }

  return (
    <PopupLesson
      // не понятно что за тип
      type={1}
      // функция создания урока и добавления записи в редакс
      func={addLesson}
      // функция закрытия модалки
      close={props.close}

      // наверное название урока, скорее всего станет не нужным
      name=""
      // скорее всего нужно для нумерации
      //num={props.lessonsCounter + 1}
      // Тоже скорее всего нужно для нумерации
     // countLessons={props.lessonsCounter + 1}
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

export default connect(mapStateToProps, mapDispatchToProps)(PopupAddLesson);