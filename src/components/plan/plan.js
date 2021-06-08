import React, {useEffect, useState} from 'react';

import Button from "../buttons/button/button";
import CleanBoard from '../cleanBoard/cleanBoard';
import ItemLesson from './itemLesson/itemLesson';
import ItemSection from './itemSection/itemSection';

import {PlanWrap} from './planStyled';
import {getAllTemplates, setTemplate, setActiveSection} from "../../actions";
import {connect} from "react-redux";
import axios from "axios";
import ServerSettings from "../../service/serverSettings";

const Plan = ({
                open,
                type,
                title = 'Topic 1',
                list = [],
                textButton = '',
                add,
                lessonID,
                selectTemplate,
                setTemplate,
                allTemplates,
                getAllTemplates,
                selectSection,
                setActiveSection,
                edit,
                selectedCourseID,
                editTask
              }) => {
  // данные активной секции
  const [selectSectionData, setDataSection] = useState({});
  // удаление урока
  const deleteLesson = async (e, id) => {
    e.preventDefault();
    // тут еще должна быть модалка удаление урока

    // редактируем и возвращаем новый объект текущего шаблона
    // получаем index удаляемого урока
    const index = selectTemplate.lesson.findIndex(l => l.id.toString() === id.toString());
    // созадем новый объект текущего шаблона без удаленного урока
    const newSelectTemplate = {
      ...selectTemplate,
      lesson: [...selectTemplate.lesson.slice(0, index), ...selectTemplate.lesson.slice(index + 1)]
    }
    // перезаписываем текущий шаблон
    setTemplate(newSelectTemplate);
    // редактируем и возвращаем новый массив всех шаблонов
    // получаем index текущего шаблона в массиве
    const currentTemplateIndex = allTemplates.findIndex(t => t.id.toString() === selectedCourseID.toString());
    // вместо него записываем в массив новый шаблон
    const newTemplatesList = [...allTemplates.slice(0, currentTemplateIndex), newSelectTemplate, ...allTemplates.slice(currentTemplateIndex + 1)];
    // записываем новый массив в redux
    getAllTemplates(newTemplatesList);

    // удаляем урок на сервере
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const serverSettings = new ServerSettings();

    await axios.delete(`${serverSettings.getApi()}api/lesson/${id}/delete/`)
      .then(res => {
        console.log(res);
      })
      .catch(error => console.error(error));
  }

  // редактирование урока
  const editLesson = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    // открываем модалку с отредактированными текстами
    edit(id);
  }

  // удаление задания
  const onDeleteTask = async (e, id) => {
    e.preventDefault();
    // тут еще должна быть модалка удаление задания

    // редактируем и возвращаем текущую секцию
    const taskIndex = selectSection.tasks.findIndex(task => parseInt(task.id) === parseInt(id));
    const newSection = {
      ...selectSection,
      tasks: [...selectSection.tasks.slice(0, taskIndex), ...selectSection.tasks.slice(taskIndex + 1)]
    }
    setDataSection(newSection)
    setActiveSection(newSection);

    // редактируем и возвращаем новый объект текущего шаблона
    // получаем index текущего урока
    const indexLesson = selectTemplate.lesson.findIndex(l => l.id.toString() === lessonID.toString());
    // созадем новый объект текущего шаблона без удаленного урока
    // получаем index выбраной секции
    const indexSection = selectTemplate.lesson[indexLesson].sections.findIndex(section => parseInt(section.id) === parseInt(newSection.id));
    const newSelectTemplate = {
      ...selectTemplate,
      lesson: [
        ...selectTemplate.lesson.slice(0, indexLesson),
        {
          ...selectTemplate.lesson[indexLesson],
          // вписываем новую секцию
          sections: [...selectTemplate.lesson[indexLesson].sections.slice(0, indexSection), newSection, ...selectTemplate.lesson[indexLesson].sections.slice(indexSection + 1)]
        },
        ...selectTemplate.lesson.slice(indexLesson + 1)]
    }
    // перезаписываем текущий шаблон
    setTemplate(newSelectTemplate);
    // редактируем и возвращаем новый массив всех шаблонов
    // получаем index текущего шаблона в массиве
    const currentTemplateIndex = allTemplates.findIndex(t => t.id.toString() === newSelectTemplate.id.toString());
    // вместо него записываем в массив новый шаблон
    const newTemplatesList = [...allTemplates.slice(0, currentTemplateIndex), newSelectTemplate, ...allTemplates.slice(currentTemplateIndex + 1)];
    // записываем новый массив в redux
    getAllTemplates(newTemplatesList);
    // удаляем урок на сервере
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const serverSettings = new ServerSettings();

    await axios.delete(`${serverSettings.getApi()}api/tasks/${id}/delete/`)
      .then(res => {
        console.log(res);
      })
      .catch(error => console.error(error));
  }

  // заменяем секцию при клике
  useEffect(() => {
    setDataSection(selectSection);
  })

  // глобальный список уроков
  let content;

  if (list.length === 0) {
    content = (
      <CleanBoard
        // subtitle возможно нужно будет переделать
        subtitle={
          type === "course"
            ? `План занятий пуст`
            : type === "lesson"
            && `Раздел пуст`
        }

        // descr так же скорее всего нужно будет переделать
        descr={
          type === "course"
            ? `Добавьте и заполните уроки`
            : type === "lesson"
            && `Добавьте задания в раздел`
        }

        textButton={textButton}
        func={type === "lesson" ? open : add}
      />

    );

  } else {
    // это для нумерации уроков
    let counter = 0;

    content = (
      <ul>
        {list.map((data, key) => {
          counter++;
          return (
            <ItemLesson
              key={key}
              // пока не понятно зачем этот каунт
              count={counter}
              id={data.id}
              // все данные урока
              data={data}
              // id шаблона
              course={data.template}
              // пока просто заглушки
              onEdit={editLesson}
              onDelete={deleteLesson}
            />
          )
        })}
      </ul>
    )
  }

  // если это секция и есть задания, передаем в content список заданий
  if (type === 'lesson' && selectSectionData.tasks && selectSectionData.tasks.length > 0) {
    content = (
      <ul>
        {selectSectionData.tasks.map((data, key) => {
          return (
            <ItemSection
              key={key}
              type={data.task_type}
              data={data}
              onDelete={onDeleteTask}
              onEdit={editTask}
            />
          )
        })}
      </ul>
    )
  }

  // не понятно что за контролы
  let showControl = {opacity: title.length === 0 ? 0 : 1};

  return (

    <PlanWrap>
      {/*не понятно что за спанка и что за title сюда попадает*/}
      {/*похоже что это заголовок всего блока с уроками*/}
      <span style={showControl} className="title">{type === 'lesson' ? selectSectionData.name : title}</span>
      <div className="fake__wrapper">
        <div style={showControl} className='plan__section'>
          {content}
        </div>
      </div>

      {/*// если это секция и есть задания*/}
      {type === 'lesson' && selectSectionData.tasks && selectSectionData.tasks.length > 0
        ? <Button
          type={'add-round'}
          text={''}
          func={type === "lesson" ? open : add}
        />
        : null}

      {list.length > 0 ?
        <Button
          type="add-round"
          text=""
          func={add}
        /> : null
      }
    </PlanWrap>

  )

};

const mapStateToProps = (state) => {
  return {
    selectTemplate: state.selectTemplate,
    selectSection: state.selectSection,
    allTemplates: state.templates
  }
}

const mapDispatchToProps = {
  setTemplate,
  getAllTemplates,
  setActiveSection
};

export default connect(mapStateToProps, mapDispatchToProps)(Plan);