import React, {useEffect, useState} from "react";

import MainButton from "../../../components/buttons/mainButton/mainButton";
import MediaModals from "../../../components/mediaModals/mediaModals";

import {BlockWrap, LessonSection, ItemSection} from '../singleLessonStyled'

const MainContent = ({tasks, wsUpdate, nextSection, activeSection}) => {

  const [jsonData, setJSON] = useState(null)
  const [sections, setSections] = useState(null)
  const [tasksList, setTasks] = useState([])

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
    setTasks(sections[activeSection].tasks);
  }, [sections]);


  // render tasks
  const renderTaskList = tasksList.map(task => {
    return (
      <ItemSection key={task.id}>
        <div className="section__title">{task.title}</div>
        {
          task.task_type === 'TEXT'
            ? <MediaModals type={task.task_type} data={task.desc}/>
            : <MediaModals type={task.task_type} data={task} wsUpdate={wsUpdate} sectionIndex={activeSection}/>
        }
      </ItemSection>
    )
  })

  return (
    <BlockWrap>
      <div className="title__block">Reading</div>
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