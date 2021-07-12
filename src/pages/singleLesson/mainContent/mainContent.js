import React, {useEffect, useState} from "react";

import MainButton from "../../../components/buttons/mainButton/mainButton";
import MediaModals from "../../../components/mediaModals/mediaModals";

import {BlockWrap, LessonSection, ItemSection} from '../singleLessonStyled'

const MainContent = ({data, tasks, wsUpdate, nextSection, activeSection, setActiveWord, setActiveEmptyItem, user}) => {

  const [jsonData, setJSON] = useState(null)
  const [sections, setSections] = useState(null)
  const [tasksList, setTasks] = useState([])
  const [sectionName, setSectionName] = useState(null);

  useEffect(() => {
    try {
      setSectionName(JSON.parse(data.lesson).sections[activeSection].name);
    } catch (e) {
      setSectionName('')
    }
  }, [data, activeSection]);


  // задаем все данные
  useEffect(() => {
    setJSON(JSON.parse(tasks));
  }, [tasks, activeSection])

  // задаем секции
  useEffect(() => {
    if(!jsonData) {return}

   setSections(jsonData.sections);
  }, [jsonData]);

  // задаем задания
  useEffect(() => {
    if(!sections) {return}
    try {
      setTasks(sections[activeSection].tasks);
    } catch (e) {
      setTasks([]);
    }
  }, [sections]);


  // render tasks
  const renderTaskList = tasksList.map(task => {
    if(task.task_type === 'NOTE' && user.type === 'student') {return}
    return (
      <ItemSection key={task.id} taskType={task.task_type}>
        <div className="section__title">{task.title}</div>
        {
          task.task_type === 'TEXT'
            ? <MediaModals type={task.task_type} data={task.desc}/>
            : <MediaModals
              type={task.task_type}
              data={task}
              wsUpdate={wsUpdate}
              sectionIndex={activeSection}
              setActiveWord={setActiveWord}
              setActiveEmptyItem={setActiveEmptyItem}
            />
        }
      </ItemSection>
    )
  })

  return (
    <BlockWrap>
      <div className="title__block">{sectionName}</div>
      <LessonSection>
        {renderTaskList}
      </LessonSection>
      <MainButton
        func={nextSection}
        text={'Закончить задание'}
        width={197}
      />
    </BlockWrap>
  )
}

export default MainContent;