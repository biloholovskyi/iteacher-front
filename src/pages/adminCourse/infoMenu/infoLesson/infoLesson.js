import React, {useState, useEffect} from 'react';

import {LessonWrap, LessonLi} from './infoLessonStyled';
import {setActiveSection, setTemplate, getAllTemplates} from "../../../../actions";
import {connect} from "react-redux";
import axiosInstance from "../../../../service/iTeacherApi";
import {InfoLiEmpty} from "../infoMenuStyled";

const InfoLessonList = ({
                          lessonID,
                          selected,
                          select,
                          dataSection,
                          setDataSection,
                          selectSection,
                          setActiveSection,
                          selectTemplate,
                          setTemplate,
                          getAllTemplates,
                          allTemplates
                        }) => {
  // создаем массив секций
  const [sectionsList, setSectionList] = useState([]);
  useEffect(() => {
    // if (sectionsList.length > 0) {
    //   return
    // }
    setSectionList(dataSection);
  })

  // переключение секций
  const [activeSectionIndex, changeActiveSection] = useState(0);

  function onChangeSection(index) {
    // меняем класс для выделения активной секции в списке
    changeActiveSection(index);
    // меняем в redux активную секуцию
    // перезаписываем dataSection потому что он почему то не меняеться при редактирование заданий
    setSectionList(dataSection);
    setActiveSection(sectionsList[index]);
  }

  // задаем первую секцию по дефолту
  useEffect(() => {
    // при первом заходе
    if (!selectSection.name && sectionsList.length > 0) {
      setActiveSection(sectionsList[0]);
    }

    // при переключение
    if (sectionsList.length > 0 && parseInt(lessonID) !== parseInt(selectSection.lesson)) {
      // console.log(selectSection);
      setActiveSection(sectionsList[0]);
    }
  })

  // меняем имя секции
  const changeNameSection = async (e, id) => {
    // получаем нужную секцию
    const currentSectionIndex = sectionsList.findIndex(section => parseInt(section.id) === parseInt(id));
    const newSection = {
      ...sectionsList[currentSectionIndex],
      name: e.target.value
    }
    const newSectionsList = [...sectionsList.slice(0, currentSectionIndex), newSection, ...sectionsList.slice(currentSectionIndex + 1)];
    setSectionList(newSectionsList);
  }

  // сохраняем изминения секции
  const saveChangeNameSection = async (e, id) => {
    // нужно проверить были ли изминения
    // получаем текущую секцию из текущего шаблона для сравнения
    const currentLessonIndex = selectTemplate.lesson.findIndex(lesson => parseInt(lesson.id) === parseInt(lessonID));
    const currentSectionIndex = selectTemplate.lesson[currentLessonIndex].sections.findIndex(section => parseInt(section.id) === parseInt(id));
    // проверяем поменялось ли имя
    if (selectTemplate.lesson[currentLessonIndex].sections[currentSectionIndex].name === sectionsList[currentSectionIndex].name) {
      return
    }
    // если имена не совпадают обновляем данные везде
    // обновляем текущий шаблон
    const newTemplate = {
      ...selectTemplate,
      lesson: [
        ...selectTemplate.lesson.slice(0, currentLessonIndex),
        {
          ...selectTemplate.lesson[currentLessonIndex],
          sections: sectionsList
        },
        ...selectTemplate.lesson.slice(currentLessonIndex + 1)
      ]
    }
    setTemplate(newTemplate);
    // обновляем весь список шаблонов
    const indexTemplate = allTemplates.findIndex(template => parseInt(template.id) === parseInt(newTemplate.id))
    const newTemplatesList = [
      ...allTemplates.slice(0, indexTemplate),
      newTemplate,
      ...allTemplates.slice(indexTemplate + 1)
    ];
    getAllTemplates(newTemplatesList);

    await axiosInstance.put(`/section/${sectionsList[currentSectionIndex].id}/update/`, sectionsList[currentSectionIndex])
      .catch(error => console.error(error));
  }

  // удаление секции
  const deleteSection = async (id) => {
    // редактируем текущий шаблон
    // получаем текущий урок
    const currentLesson = selectTemplate.lesson.find(l => l.id.toString() === lessonID.toString());
    // получаем index урока
    const indexLesson = selectTemplate.lesson.findIndex(l => l.id.toString() === lessonID.toString());
    // получаем index удаляемой секции
    const indexSection = currentLesson.sections.findIndex(s => s.id.toString() === id.toString());
    // удаляем секцию из массива
    const newSectionsList = [...currentLesson.sections.slice(0, indexSection), ...currentLesson.sections.slice(indexSection + 1)];
    // создаем новый шаблон
    const newTemplate = {
      ...selectTemplate,
      lesson: [
        ...selectTemplate.lesson.slice(0, indexLesson),
        {
          ...currentLesson,
          sections: newSectionsList
        },
        ...selectTemplate.lesson.slice(indexLesson + 1)
      ]
    }
    // записываем в redux
    setTemplate(newTemplate);

    // редактируем все шаблоны
    // получаем index текущего шаблона в массиве
    const indexTemplate = allTemplates.findIndex(t => parseInt(t.id) === parseInt(newTemplate.id));
    // создаем новый массив с отредактированным шаблоном
    const newTemplatesList = [
      ...allTemplates.slice(0, indexTemplate),
      newTemplate,
      ...allTemplates.slice(indexTemplate + 1)
    ]

    // перезаписываем redux
    getAllTemplates(newTemplatesList);

    await axiosInstance.delete(`/section/${id}/delete/`)
      .then(res => {
        // если удаляемая секция была активной делаем активной первую секцию из отсавшихся
        if (activeSectionIndex === indexSection) {
          changeActiveSection(0);
          setActiveSection(sectionsList[0]);
        }
      })
      .catch(error => console.error(error));
  }

  return (

    <LessonWrap>
      <ul>
        {/*выводим список секций*/}
        {sectionsList.map((data, key) => {
          const activeSection = key === activeSectionIndex;
          return (
            <LessonLi
              key={key}
              onClick={() => onChangeSection(key)}
              className={`sections__topic${activeSection ? ' active' : ''}`}
              tabIndex="-1"
            >

              {/*DragHandle*/}
              <span className="topic_dots"/>

              <input
                style={{width: `${14 + data.name.length * 9}px`}}
                // onClick={(e) => e.stopPropagation()}
                className="topic_input"
                value={data.name}
                onChange={(e) => changeNameSection(e, data.id)}
                // onChange={(e) => {
                //
                //   setValue(e.target.value);
                //   setInputWidth(e.target.value.length)
                //
                // }}
                onKeyPress={(e) => e.key === 'Enter' && saveChangeNameSection(e, data.id)}
                onBlur={(e) => saveChangeNameSection(e, data.id)}
              />

              <span
                className="topic_delete"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  deleteSection(data.id).catch(error => console.error(error));
                }}
              />

            </LessonLi>

            // <InfoLesson
            //   id={data.id}
            //   key={key}
            //   name={data.name}
            //   // select={() => select({id: data.id, name: data.name})}
            //   // setName={changeSectionName}
            //   // remove={deleteSection}
            //   // isActive={selected === data.id}
            // />
            // <LessonPart key={key} index={key} data={data} />
          )
        })}
        {/*если нету разделов то виводим тект*/}
        {
          dataSection.length === 0 && (
            <InfoLiEmpty>
              <p>Нет разделов</p>
              <span>Для редактирования урока вам нужно добавить хотя бы один раздел</span>
            </InfoLiEmpty>
          )
        }

      </ul>
      {/*<LessonPartsList */}
      {/*  useDragHandle*/}
      {/*  items = { dataSection }*/}
      {/*  onSortEnd = {({ oldIndex, newIndex }) => {*/}

      {/*    setDataSection(*/}
      {/*      arrayMove(dataSection, oldIndex, newIndex)*/}
      {/*    );*/}

      {/*  }}*/}

      {/*/>*/}

    </LessonWrap>

  );

}

// не правильное построение названия переменных к файлу
const InfoLesson = ({id, name, setName, select, remove, isActive = false}) => {

  const [value, setValue] = useState(name);
  const [inputWidth, setInputWidth] = useState(value.length);
  // const DragHandle = sortableHandle(() => <span className="topic_dots"/>);

  return (

    <LessonLi
      onClick={() => select(id)}
      className={`sections__topic${isActive ? ' active' : ''}`}
      tabIndex="-1"
    >

      {/*<DragHandle/>*/}

      <input

        style={{width: `${14 + inputWidth * 9}px`}}
        onClick={(e) => e.stopPropagation()}
        className="topic_input"
        value={value}
        onChange={(e) => {

          setValue(e.target.value);
          setInputWidth(e.target.value.length)

        }}
        onKeyPress={(e) => (e.key === 'Enter' && value !== name) && setName(id, value)}

      />

      <span className="topic_delete" onClick={(e) => {
        e.stopPropagation();
        remove(id);
      }}/>

    </LessonLi>

  );

}

const mapStateToProps = (state) => {
  return {
    selectSection: state.selectSection,
    selectTemplate: state.selectTemplate,
    allTemplates: state.templates
  }
}

const mapDispatchToProps = {
  setActiveSection,
  setTemplate,
  getAllTemplates
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoLessonList);