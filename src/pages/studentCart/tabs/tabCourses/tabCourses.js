import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import {useHistory} from "react-router";
import {NavLink} from "react-router-dom";

import {setStudentToCourse} from "../../../../actions";

import CourseCover from "../../../../components/courseCover/courseCover";

import * as Style from './styled.js'

import plus from "../../../../assets/media/icon/plus-blue.svg";

import CoursesServices from "../../../../service/courses";
import axiosInstance from "../../../../service/iTeacherApi";

const coursesService = new CoursesServices();

const TabCourses = ({id, setStudentToCourse, user}) => {
  const history = useHistory();

  // список курсов студентов
  const [courses, setCourses] = useState([])
  const [nextLesson, setNextLesson] = useState(null)

  useEffect(() => {
    coursesService.getAllCourses().then(res => {
      // получаем курсы только нужного ученика
      const coursesStudent = res.data.filter(course => parseInt(course.student) === parseInt(id))
      setCourses(coursesStudent)
    })
  }, [id])

  // получаем ближайший урок
  const getNextLesson = async () => {
    await axiosInstance.get(`/schedules/${user.id}/${id}/`)
      .then(res => {
        // меняем формат даты для сортировки и отбираем только события текущего курса
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

        setNextLesson(sortList);
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getNextLesson().catch(error => console.error(error))
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
      {
        courses.map(course => {
          // получаем список событий этого курса
          const schedule = nextLesson && nextLesson.filter(sch => parseInt(sch.course) === parseInt(course.id))[0];

          return (
            <NavLink to={'/course/' + course.id} className='course-wrapper'>
              <CourseCover
                key={course.id}
                type={'student-courses'}
                course={course}
              />

              <h4 className="course-title">{course.name}</h4>
              <div className="course-next-lesson">
                <p>{schedule && 'Ближайший урок:'}</p>
                <p>{schedule && `${schedule.date}, ${schedule.time}`}</p>
              </div>
            </NavLink>
          )
        })
      }
    </Style.CourseWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  setStudentToCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(TabCourses);