import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import {useHistory} from "react-router";

import {setStudentToCourse} from "../../../../actions";

import CourseCover from "../../../../components/courseCover/courseCover";

import * as Style from './styled.js'

import plus from "../../../../assets/media/icon/plus-blue.svg";

import CoursesServices from "../../../../service/courses";
const coursesService = new CoursesServices();

const TabCourses = ({id, setStudentToCourse}) => {
  const history = useHistory();

  // список курсов студентов
  const [courses, setCourses] = useState([])

  useEffect(() => {
    coursesService.getAllCourses().then(res => {
      // получаем курсы только нужного ученика
      const coursesStudent = res.data.filter(course => parseInt(course.student) === parseInt(id))
      setCourses(coursesStudent)
    })
  }, [id])

  // переходим на покупку курса с студентом
  const toBuyCourse = () => {
    setStudentToCourse(id);
    history.push('/courses-library')
  }

  return (
    // all courses wrapper
    <Style.CourseWrapper>
      {/*add course block*/}
      <Style.AddCourse onClick={toBuyCourse}>
        <div className="addSquare">
          <img src={plus} alt="plus"/>
        </div>
        <div className="textAddCourse">
          Добавить курс
        </div>
      </Style.AddCourse>

      {/*выводим все курсы*/}
      {courses.map(course => {
        return (
          <div className='course-wrapper'>
            <CourseCover
              key={course.id}
              type={'student-courses'}
              course={course}
            />

            <h4 className="course-title">{course.name}</h4>
            <div className="course-next-lesson">Ближайший урок: <br/> 1 ноября, 16:45</div>
          </div>
        )
      })}
    </Style.CourseWrapper>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {
  setStudentToCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(TabCourses);