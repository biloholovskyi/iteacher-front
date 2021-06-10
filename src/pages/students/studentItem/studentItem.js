import React from 'react';
import {useHistory} from "react-router";

import ava from "../../../assets/media/icon/avatar.svg";
import more from "../../../assets/media/icon/more.svg";
import lesson from '../../../assets/media/icon/lesson.svg';

import * as Style from './styled'

import ServerSettings from "../../../service/serverSettings";

const server = new ServerSettings();

const StudentItem = ({note, data}) => {
  const history = new useHistory();

  let nameCourse = '';
  if (data.course) {
    nameCourse = data.course.name;
  }
  return (
    <Style.CoursesItem
      key={data.id}
      className={'courseItems'}
      onClick={() => history.push(`/students/${data.id}`)}
    >
      <div className="right">
        <div className={"right__name"}>
          <img src={data.photo ? `${server.getApi()}${data.photo.slice(1)}` : ava} alt="img"/>
          <div className="names">
            <h3>{data.name}</h3>
            <p>{data.email}</p>
          </div>
        </div>
        {/*удалено в новом дизайне*/}
        {/*<Style.Course>*/}
        {/*  <h4 className={'small-title'}>Курс</h4>*/}
        {/*  <p className={'small-desc'}>{nameCourse}</p>*/}
        {/*</Style.Course>*/}
      </div>

      <div className="left">
        <Style.Lesson>
          <h4 className={'small-title'}>Ближайший урок</h4>
          <p className={'small-desc'}>Завтра, 18:30</p>
        </Style.Lesson>
        <div className={'navSection'}>
          <div className="lesson">
            <img className={'openNotes'} onClick={() => note(data.id)} src={lesson} alt="icon"/>
            <div className='number'>0</div>
          </div>
          <button
            className="more"
          ><img src={more} alt="img"/></button>
        </div>
      </div>
    </Style.CoursesItem>
  )
}

export default StudentItem;