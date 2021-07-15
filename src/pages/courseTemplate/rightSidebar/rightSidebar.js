import React from "react";
import {connect} from "react-redux";

import Student from "./student/student";
import NextLesson from "./nextLesson/nextLesson";

import {ActiveSidebarWrap, SidebarItem} from "../styled";

const RightSidebar = ({course, showAddStudent, showAddEvent, user}) => {
  return (
    <ActiveSidebarWrap>
      {/*ученик или преподаватель*/}
      <Student course={course} show={showAddStudent}/>
      {/*следующие занятие*/}

      {/*нужно проверить назначино ли следующие задание*/}
      {
        user.type === 'student'
          ? course.schedules && course.schedules.length > 0 && <NextLesson data={course.schedules} show={showAddEvent}/>
          : <NextLesson data={course.schedules} show={showAddEvent}/>
      }
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar);