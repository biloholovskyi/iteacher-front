import React, {useEffect, useState} from 'react';
import axios from "axios";

import CourseCover from "../../../courseCover/courseCover";
import AddButton from "../../../buttons/addButton/addButton";

import * as Style from './styled';

import ava from "../../../../assets/media/icon/avatar.svg";
import plus from '../../../../assets/media/icon/plus-blue.svg'

import ServerSettings from "../../../../service/serverSettings";

const CourseItem = ({course}) => {
  const [photo, setPhoto] = useState('');
  // близжайший урок
  const [event, setEvent] = useState(null)

  // задаем близжайший урок
  useEffect(() => {
    // проверяем активный ли курс
    if(course.status !== 'active') {return}

    // меняем формат даты для сортировки
    const sortList = course.schedules.map(event => {
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

    // получаем время проведения урока
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'иля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря'
    ]
    if(sortList.length < 1) {return}
    const date = `${sortList[0].date.split('.')[0]} ${months[parseInt(sortList[0].date.split('.')[1]) - 1]}, ${sortList[0].time}`;

    setEvent(date);
  }, []);

  const getStudent = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();
    await axios.get(`${server.getApi()}api/users/${course.student}/`)
      .then(res => {
        setPhoto(res.data.photo);
      })
      .catch(error => console.error(error))
  }

  if (course.student) {
    getStudent();
  }

  return (
    <Style.CoursesItem to={'/course-template/' + course.id} id={course.id}>
      <CourseCover course={course}/>
      <h4 className={`title ${!event && 'title--margin'} ${!event && course.student && 'title--student-margin'}`}>{course.name}</h4>
      {
        event && <p className='desc'>Ближайший урок: {event}</p>
      }

      {
        course.status === "created" && course.student < 1
          ? (<AddButton text={'Добавить ученика'} status={'small'}/>)
          : course.status === "created" && course.student > 1
          ? photo
            ? <img src={photo} alt="icon" className={'ava'}/>
            : <img src={ava} alt="icon" className={'ava'}/>
          : course.status === "active"
            ? photo
              ? <img src={photo} alt="icon" className={'ava'}/>
              : <img src={ava} alt="icon" className={'ava'}/>
            : null
      }

    </Style.CoursesItem>
  )
}

export default CourseItem;