import React from "react";

import MediaModals from "../mediaModals/mediaModals";

import close from '../../assets/media/icon/close.svg';

import {
  ProgramModalWrap,
  ProgramModalBody,
  Caption,
  Content,
  Title,
  SmallTitle,
  TaskWrapper
} from './styled';

const ProgramModal = ({closed, sections, title}) => {

  const sectionsList = sections.map(section => {
    const tasksList = section.tasks.map(task => {
        return (
          <div key={task.id} className={'sectionWrapper'}>
            <SmallTitle>{task.title}</SmallTitle>

            <TaskWrapper taskStyled={task.task_type}>
              {
                task.task_type === 'TEXT'
                  ? <MediaModals type={task.task_type} data={task.desc}/>
                  : <MediaModals type={task.task_type} data={task}/>
              }
            </TaskWrapper>

          </div>
        )
      }
    )
    return (
      <div className={'sectionOverlay'} key={section.id}>
        <Title>{section.name}</Title>
        {tasksList}
      </div>
    )
  })

  return (
    <ProgramModalWrap>
      <ProgramModalBody className={'modalBody'}>
        <img onClick={(e) => {
          closed(e)
        }} className={'close'} src={close} alt="icon"/>
        <Caption>{title}</Caption>
        <Content>
          {sectionsList}
        </Content>
      </ProgramModalBody>
    </ProgramModalWrap>
  )
}

export default ProgramModal;