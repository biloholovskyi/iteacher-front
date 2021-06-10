import React from 'react'

import * as Style from './styled.js'
import plus from "../../../../assets/media/icon/plus-blue.svg";

const TabCourses = () => {
  return (
    // all courses wrapper
    <Style.CourseWrapper>
      {/*add course block*/}
      <Style.AddCourse>
        <div className="addSquare">
          <img src={plus} alt="plus"/>
        </div>
        <div className="textAddCourse">
          Добавить курс
        </div>
      </Style.AddCourse>

      <Style.AddCourse>
        <div className="addSquare">
          <img src={plus} alt="plus"/>
        </div>
        <div className="textAddCourse">
          Добавить курс
        </div>
      </Style.AddCourse>

      <Style.AddCourse>
        <div className="addSquare">
          <img src={plus} alt="plus"/>
        </div>
        <div className="textAddCourse">
          Добавить курс
        </div>
      </Style.AddCourse>

      <Style.AddCourse>
        <div className="addSquare">
          <img src={plus} alt="plus"/>
        </div>
        <div className="textAddCourse">
          Добавить курс
        </div>
      </Style.AddCourse>

      <Style.AddCourse>
        <div className="addSquare">
          <img src={plus} alt="plus"/>
        </div>
        <div className="textAddCourse">
          Добавить курс
        </div>
      </Style.AddCourse>

      <Style.AddCourse>
        <div className="addSquare">
          <img src={plus} alt="plus"/>
        </div>
        <div className="textAddCourse">
          Добавить курс
        </div>
      </Style.AddCourse>

      <Style.AddCourse>
        <div className="addSquare">
          <img src={plus} alt="plus"/>
        </div>
        <div className="textAddCourse">
          Добавить курс
        </div>
      </Style.AddCourse>
    </Style.CourseWrapper>
  )
}

export default TabCourses