import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router";
import axios from "axios";
import {connect} from "react-redux";

import ava from "../../../assets/media/icon/avatar.svg";
import more from "../../../assets/media/icon/more.svg";
import lesson from '../../../assets/media/icon/lesson.svg';

import * as Style from './styled'

import ServerSettings from "../../../service/serverSettings";

const server = new ServerSettings();

const StudentItem = ({note, data, user}) => {
  const [nextLesson, setNextLesson] = useState(null)
  console.log(data);
  const history = new useHistory();

  useEffect(() => {
    getNextLesson().catch(error => console.error(error));
  }, [data])

  // получаем ближайший урок
  const getNextLesson = async () => {
    await axios.get(`${server.getApi()}api/schedules/${user.id}/${data.id}/`)
      .then(res => {
        // меняем формат даты для сортировки
        const sortList = res.data.map(event => {
          const date = event.date.split('.')
          const newDate = `${date[2]}-${date[1]}-${date[0]} ${event.time}:00`;
          return {...event, sortTime: newDate};
        })

        // соритруем по дате
        sortList.sort((a, b) => {
          const dateA = new Date(a.sortTime).getTime();
          const dateB = new Date(b.sortTime).getTime();
          return dateA - dateB
        })

        setNextLesson(sortList[0]);
      })
      .catch(error => console.error(error))
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
      </div>

      <div className="left">
        <Style.Lesson>
          <h4 className={'small-title'}>Ближайший урок</h4>
          <p className={'small-desc'}>{nextLesson && `${nextLesson.date}, ${nextLesson.time}`}</p>
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(StudentItem);