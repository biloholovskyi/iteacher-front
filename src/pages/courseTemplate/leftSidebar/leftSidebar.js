import React from "react";

import {InfoList, LeftAside} from "../styled";

const LeftSidebar = ({course, data}) => {
  // количество уроков
  let countLesson = data.length;
  const countLessonString = `${(countLesson === 0 || countLesson >= 5) ? ' уроков' : countLesson === 1 ? ' урок' : ' урока'}`

  return (
    <LeftAside>
      <div className="title">Информация</div>
      <InfoList>
        <div className='infoItem'>
          <p className='name'>Длительность курса</p>
          <p className='desc'>{countLesson} {countLessonString}</p>
        </div>

        <div className='infoItem'>
          <p className='name'>Уровень</p>
          <p className='desc'>{course.level}</p>
        </div>
      </InfoList>
    </LeftAside>
  )
}

export default LeftSidebar;