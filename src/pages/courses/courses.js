import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import CourseItem from "./courseItem/courseItem";
import NoneCourses from "./noneCourse/noneCourse";

import * as Style from './styled';

import library from '../../assets/media/icon/library.svg';
import search from '../../assets/media/icon/search.svg';
import arrow from '../../assets/media/icon/arrow.svg';
import sort from '../../assets/media/icon/sort.svg';
import plus from '../../assets/media/icon/plus-blue.svg';

const Courses = ({user}) => {
  const [courses, setCourses] = useState([])

  // обновляем список курсов
  useEffect(() => {
    if (user) {
      setCourses(user.courses)
    }
  }, [user]);


  // check if there are any courses . If there are no courses render EMPTY course page
  if (!courses || courses.length === 0) return <NoneCourses/>

  return (
    <Style.CourseWrap>
      <div className='container'>
        <Style.Caption>
          <Style.Title>Курсы</Style.Title>
          <Style.AddCourse>
            <Link to='/new-course'>Библиотека курсов
              <img src={library} alt="icon"/>
            </Link>
          </Style.AddCourse>
          <Style.AddCourseMobile>
            <Link to='/addCourses'>
              <img src={plus} alt="icon"/>
            </Link>
          </Style.AddCourseMobile>
        </Style.Caption>
        <Style.CaptionInput>
          <Style.SearchBlock>
            <Style.Input>
              <img src={search} alt="icon"/>
              <input type="text" placeholder="Поиск"/>
            </Style.Input>
          </Style.SearchBlock>
          <Style.SortBlock>
            <img src={sort} alt="icon"/>
            <p>Сортировать по</p>
            <p><b>алфавиту</b></p>
            <img src={arrow} alt="icon"/>
          </Style.SortBlock>
        </Style.CaptionInput>
        {/*ADD COURSES LIST*/}

        <Style.CoursesList>
          {courses.map(course => {
            // const needStudent = this.props.students.find(student => student.courses[0].toString() === course.id.toString());
            return <CourseItem key={course.id} course={course}/>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);