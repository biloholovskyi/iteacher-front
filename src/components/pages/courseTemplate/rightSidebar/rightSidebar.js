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
      {/*проверяем статус курса*/}
      {/*{*/}
      {/*  // если курс только созданный*/}
      {/*  course.status === 'created' || !course.student ?*/}
      {/*    this.state.success ? (*/}
      {/*      <RightAsideWrap>*/}
      {/*        <div className={'icons'}>*/}
      {/*          <div><img src={ok} alt="icon"/></div>*/}
      {/*        </div>*/}
      {/*        <div className="stepBlock">*/}
      {/*          <div className={'step'}>1</div>*/}
      {/*          <div className={'split'}>/</div>*/}
      {/*          <div className={'step'}>3</div>*/}
      {/*        </div>*/}
      {/*        <div className="title">Пригласите ученика</div>*/}
      {/*        <button*/}
      {/*          className={'showModal'}>*/}
      {/*          Добавить ученика*/}
      {/*        </button>*/}
      {/*      </RightAsideWrap>*/}
      {/*    ) : this.state.step ? (*/}
      {/*      <RightAsideWrap>*/}
      {/*        <div className={'icons'}><p>👩</p></div>*/}
      {/*        <div className="stepBlock">*/}
      {/*          <div className={'step'}>1</div>*/}
      {/*          <div className={'split'}>/</div>*/}
      {/*          <div className={'step'}>3</div>*/}
      {/*        </div>*/}
      {/*        <div className="title">Пригласите ученика</div>*/}
      {/*        <button*/}
      {/*          onClick={() => this.openInvite()}*/}
      {/*          className={'showModal'}>*/}
      {/*          Добавить ученика*/}
      {/*        </button>*/}
      {/*      </RightAsideWrap>*/}
      {/*    ) : this.state.stepTwo ? (*/}
      {/*      <RightAsideWrap>*/}
      {/*        <div className={'icons'}><p>🗓️</p></div>*/}
      {/*        <div className="stepBlock">*/}
      {/*          <div className={'step'}>2</div>*/}
      {/*          <div className={'split'}>/</div>*/}
      {/*          <div className={'step'}>3</div>*/}
      {/*        </div>*/}
      {/*        <div className="title">Назначьте первое занятие</div>*/}
      {/*        <button*/}
      {/*          onClick={() => this.openCalendar()}*/}
      {/*          className={'showModal'}>*/}
      {/*          Открыть расписание*/}
      {/*        </button>*/}
      {/*      </RightAsideWrap>*/}
      {/*    ) : this.state.stepThree ? (*/}
      {/*      <RightAsideWrap>*/}
      {/*        <div className={'icons'}><p>🏁</p></div>*/}
      {/*        <div className="stepBlock">*/}
      {/*          <div className={'step'}>3</div>*/}
      {/*          <div className={'split'}>/</div>*/}
      {/*          <div className={'step'}>3</div>*/}
      {/*        </div>*/}
      {/*        <div className="title">Активируйте курс</div>*/}
      {/*        <button*/}
      {/*          onClick={() => this.openActiveSidebar()}*/}
      {/*          className={'showModal'}>*/}
      {/*          Активировать курс*/}
      {/*        </button>*/}
      {/*      </RightAsideWrap>*/}
      {/*    ) : null : (*/}
      {/*      <ActiveSidebar student={this.state.course.student} lessons={data} schedules={this.state.course.schedules}/>*/}
      {/*    )*/}
      {/*}*/}
    </ActiveSidebarWrap>
  )
}

export default RightSidebar;