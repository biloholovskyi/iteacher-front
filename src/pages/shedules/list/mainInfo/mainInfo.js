import React from "react";

import CourseCover from "../../../../components/courseCover/courseCover";

import {Desc, InfoLesson, Name} from "../../styled";

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

const MainInfo = ({course, event, lessonNumber, lessonData}) => {
  // получаем дату
  // примерное время завершение
  let timeEnd = parseInt(event.time.split(':')[0]);
  timeEnd = timeEnd === 23 ? '00:00' : timeEnd > 9 ? `${timeEnd + 1}:00` : `0${timeEnd + 1}:00`;
  const date = `${event.date.split('.')[0]} ${months[parseInt(event.date.split('.')[1]) - 1]}, ${event.time} - ${timeEnd}`;

  return (
    <InfoLesson>
      <div className="td-wrapper">
        {/*блок с картинкой курса*/}
        <CourseCover course={course} small={true}/>

        {/*<div className="infoBG">*/}
        {/*  <p className={'nameCourse'}>{course.name}</p>*/}
        {/*  <p className={'firstLetter'}>{course.name[0]}</p>*/}
        {/*</div>*/}
        <div className="textInfo">
          <Name className="number">#{lessonNumber} {lessonData && lessonData.name}</Name>
          <Desc className="desc">{date}</Desc>
        </div>
      </div>
    </InfoLesson>
  )
}

export default MainInfo;