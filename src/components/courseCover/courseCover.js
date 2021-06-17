import React from "react";

import * as Style from './styled'

const CourseCover = ({course, small, template, extraSmall, medium, type}) => {
  return (
    <Style.CoverBlock
      medium={medium}
      small={small}
      extraSmall={extraSmall}
      type={type}
      bg={
        template
          ? course.background
          : course.status === "created"
          ? 'linear-gradient( 32deg ,#333 -2%,#ccc 104%);'
          : course.background
      }
    >
      {/*Добавляем индикатор на не активный курс*/}
      {
        course.status === 'created' && (
          <div className="unActive_label">Неактивен</div>
        )
      }

      <div className="firstLetter">{course.name && course.name.substr(0, 1)}</div>
      <h3 className={'first'}>{course.name}</h3>
    </Style.CoverBlock>
  )
}

export default CourseCover;