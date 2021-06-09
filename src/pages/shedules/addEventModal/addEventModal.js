import React, {useState, useEffect} from "react";
import axios from "axios";

import MainInput from "../../../components/inputs/mainInput/mainInput";
import MainDropList from "../../../components/inputs/mainDropList/mainDropList";
import MainButton from "../../../components/buttons/mainButton/mainButton";

import {TextModalBody, TextModalOverlay} from "./styled";

import closed from "../../../assets/media/icon/close.svg";

import ServerSettings from "../../../service/serverSettings";

const AddEventModal = ({close, courses, user, update, studentsList}) => {
  // список студентов
  const [students, setStudents] = useState([]);
  // список курсов
  const [coursesList, setCoursesList] = useState([]);
  // список уроков
  const [lessons, setLessons] = useState([]);
  // выбранный студент
  const [needStudent, setNeedStudent] = useState({})
  // выбранный курс
  const [needCourse, setNeedCourse] = useState({});

  useEffect(() => {
    // получаем список курсов для инпута
    const coursesInputArray = courses.filter(course => course.status === 'active')
      .map(courseObject => {
        return {
          value: courseObject.id,
          name: courseObject.name
        }
      })
    setCoursesList(coursesInputArray)
    setStudents(studentsList)

    // если не выбран никакой студент, выбираем первый
    if (JSON.stringify({}) === JSON.stringify(needStudent)) {
      setNeedStudent(studentsList[0]);
    }

    // если не выбран никакой курс, выбираем первый
    if (JSON.stringify({}) === JSON.stringify(needCourse)) {
      setNeedCourse(courses.filter(course => course.status === 'active')[0]);
    }
  }, [])

  // получаем список курсов выбраного студента
  useEffect(() => {
    // получаем курсы выбраного ученика
    const needCourses = courses.filter(course => parseInt(course.student) === parseInt(needStudent.value))
      .map(c => {
          return {value: c.id, name: c.name}
        }
      );

    setCoursesList(needCourses)
    needCourses[0] && setNeedCourse(courses.find(course => parseInt(course.id) === parseInt(needCourses[0].value)))
  }, [needStudent]);

  // получаем список уроков выбраного курса
  useEffect(() => {
    if(needCourse === undefined || JSON.stringify(needCourse) === JSON.stringify({})) {
      return
    }

    // получаем массив уроков для инпута
    const lessonsList = JSON.parse(needCourse.lessons).map(lesson => {
      return {
        value: lesson.id,
        name: lesson.name
      }
    })

    // передаем список уроков
    setLessons(lessonsList);
  }, [coursesList, needCourse]);

  // выбираем другого студента
  const onChangeStudentHandler = (student) => {
    // находим выбраного студента
    const studentObject = students.find(s => parseInt(s.value) === parseInt(student.value))
    setNeedStudent(studentObject);
  }

  // выбираем другой курс
  const onChangeCourseHandler = (course) => {
    // находим выбраный курс
    const courseObject = courses.find(c => parseInt(c.id) === parseInt(course.value))
    setNeedCourse(courseObject);
  }

  // создане нового события
  const createNewEvent = async (e) => {
    e.preventDefault()

    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const data = {
      user: user.id,
      course: e.target.course.value,
      lesson: e.target.lesson.value,
      status: 'active',
      date: e.target.date.value,
      time: e.target.time.value,
      student: e.target.student.value
    }

    const serverSettings = new ServerSettings();
    await axios.post(`${serverSettings.getApi()}api/schedules/`, data)
      .then(res => {
        update(res.data);
        close()
      })
      .catch(error => console.error(error));
  }

  return (
    <TextModalOverlay>
      <TextModalBody
        className={'EventModalBody'}
        onSubmit={(e) => createNewEvent(e)}
      >
        <img onClick={close} className={'closed'} src={closed} alt="icon"/>
        <h2 className={'title'}>Добавить событие</h2>
        <div className="double">
          <MainInput
            label={'Дата'}
            name={'date'}
            type={'text'}
            required={false}
          />

          <MainInput
            label={'Время'}
            name={'time'}
            type={'text'}
            required={false}
          />
        </div>

        <MainDropList
          label={'Выберите студента'}
          name={'student'}
          required={true}
          options={students}
          onChange={onChangeStudentHandler}
        />

        <MainDropList
          label={'Выберите курс'}
          name={'course'}
          required={true}
          options={coursesList}
          onChange={onChangeCourseHandler}
        />

        <MainDropList
          label={'Выберите урок'}
          name={'lesson'}
          type={'text'}
          options={lessons}
        />

        <MainButton
          text={'Добавить'}
          type={'submit'}
        />
      </TextModalBody>

    </TextModalOverlay>
  )
}

export default AddEventModal;