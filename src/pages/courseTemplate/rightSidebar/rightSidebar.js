import React from "react";

import Student from "./student/student";
import NextLesson from "./nextLesson/nextLesson";

import {ActiveSidebarWrap, SidebarItem} from "../styled";

const RightSidebar = ({course, showAddStudent, showAddEvent}) => {
  return (
    <ActiveSidebarWrap>
      {/*ученик*/}
      <Student studentID={course.student} show={showAddStudent}/>
      {/*следующие занятие*/}
      <NextLesson data={course.schedules} show={showAddEvent}/>
      {/*домашнее задание*/}
      <SidebarItem>
        <div className="title">Домашние задания</div>
        <div className="info">
          <p className={'no-text'}>Нет заданий на проверке</p>
        </div>
      </SidebarItem>
    </ActiveSidebarWrap>
  )
}

export default RightSidebar;