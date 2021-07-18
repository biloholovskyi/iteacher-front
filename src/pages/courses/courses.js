import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {setTopAlertText} from "../../actions";

import CourseItem from "./courseItem/courseItem";
import NoneCourses from "./noneCourse/noneCourse";

import * as Style from './styled';

import library from '../../assets/media/icon/library.svg';
import search from '../../assets/media/icon/search.svg';
import arrow from '../../assets/media/icon/arrow.svg';
import sort from '../../assets/media/icon/sort.svg';
import plus from '../../assets/media/icon/plus-blue.svg';

const Courses = ({user, setTopAlertText}) => {
  const [courses, setCourses] = useState([])
  const [userData, setUserData] = useState(null)

  // обновляем список курсов
  useEffect(() => {
    setTopAlertText(false);
    if (user) {
      setCourses(user.courses)
      setUserData(user)
    }
  }, [user]);

  // check if there are any courses . If there are no courses render EMPTY course page
  if (!courses || courses.length === 0) return <NoneCourses/>

  return (
    <Style.CourseWrap>
      <div className='container'>
        <Style.Caption>
          <Style.Title>Курсы</Style.Title>

          {/*покупать курсы может только учитель*/}
          {
            user && user.type === 'teacher' && (
              <>
                <Style.AddCourse>
                  <Link to='/courses-library'>Библиотека курсов
                    <img src={library} alt="icon"/>
                  </Link>
                </Style.AddCourse>
                <Style.AddCourseMobile>
                  <Link to='/courses-library'>
                    <img src={plus} alt="icon"/>
                  </Link>
                </Style.AddCourseMobile>
              </>
            )
          }
        </Style.Caption>

        {/*<Style.CaptionInput>*/}
        {/*  <Style.SearchBlock>*/}
        {/*    <Style.Input>*/}
        {/*      <img src={search} alt="icon"/>*/}
        {/*      <input type="text" placeholder="Поиск"/>*/}
        {/*    </Style.Input>*/}
        {/*  </Style.SearchBlock>*/}
        {/*  <Style.SortBlock>*/}
        {/*    <img src={sort} alt="icon"/>*/}
        {/*    <p>Сортировать по</p>*/}
        {/*    <p><b>алфавиту</b></p>*/}
        {/*    <img src={arrow} alt="icon"/>*/}
        {/*  </Style.SortBlock>*/}
        {/*</Style.CaptionInput>*/}

        {/*ADD COURSES LIST*/}

        <Style.CoursesList>
          {courses.map(course => {
            return <CourseItem key={course.id} course={course} user={userData}/>
          })}
          {/*<CoursesItemsV2/>*/}
        </Style.CoursesList>

      </div>
    </Style.CourseWrap>
  )
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    students: state.students
  }
};

const mapDispatchToProps = {
  setTopAlertText
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);