import React, {useState, useEffect} from "react";

import MainInput from "../../components/inputs/mainInput/mainInput";
import MainDropList from "../../components/inputs/mainDropList/mainDropList";
import MainButton from "../../components/buttons/mainButton/mainButton";
import Calendar from "../courseTemplate/calendarModal/calendar";

import {TextModalBody, TextModalOverlay, Line, SmallTitle} from "./styled";

import closed from "../../assets/media/icon/close.svg";
import axiosInstance from "../../service/iTeacherApi";
import TimeModal from "./timeModal/timeModal";

const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

const AddEventModal = ({close, courses, user, studentsList, update, updateData}) => {
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

  // проверяем модалка на редактирование или на создание
  const [data, setData] = useState(false);

  const [calendarModal, setCalendarModal] = useState(false);

  const [calendarDate, setCalendarDate] = useState(null);

  const [hiddenDate, setHiddenDate] = useState(false)

  const [dateValidation, setDateValidation] = useState(false)

  const [timeModal , setTimeModal] = useState(false)
  const [timeData, setTimeData] = useState(null)

  useEffect(() => {
    if(updateData) {
      setData(updateData)
    }
  }, [updateData]);


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
    if(!needStudent) {return}
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

  // проверяем занято ли время или нет
  const checkTime = async (date, time) => {
    // получаем все события
    return await axiosInstance.get(`/schedules/`)
      .then(result => {return result; })
      .then(res => {
        const schThisDate = res.data
          .filter(sch => parseInt(sch.user) === parseInt(user.id))
          .filter(sch => sch.date === date);

        // проверяем совпадает ли время начала урока
        return schThisDate.find(sch => sch.time === time)
      })
      .catch(error => console.error(error))
  }

  // создане нового события
  const createNewEvent = async (e) => {
    e.preventDefault()

    const data = {
      user: user.id,
      course: e.target.course.value,
      lesson: e.target.lesson.value,
      status: 'active',
      date: e.target.date.value,
      time: e.target.time.value,
      student: e.target.student.value
    }

    await checkTime(e.target.date.value, e.target.time.value)
      .then(res => {
        // если время занято
        if(res) {
          setDateValidation(true);
        } else {
          axiosInstance.post(`/schedules/`, data)
            .then(res => {
              update(res.data);
              close()
            })
            .catch(error => console.error(error));
        }
      })
  }

  // обновление события
  const updateSchedule = async (e) => {
    e.preventDefault()

    const dataServer = {
      ...data,
      user: user.id,
      course: parseInt(e.target.course.value),
      lesson: parseInt(e.target.lesson.value),
      date: e.target.date.value,
      time: e.target.time.value,
      student: parseInt(e.target.student.value)
    }

    await checkTime(e.target.date.value, e.target.time.value)
      .then(res => {
        // если время занято
        if(res && parseInt(res.id) !== parseInt(data.id)) {
          setDateValidation(true);
        } else {
          axiosInstance.put(`/schedules/${data.id}/update/`, dataServer)
            .then(() => {
              update({...data, ...dataServer});
              close()
              // eslint-disable-next-line no-restricted-globals
              location.reload()
            })
            .catch(error => console.error(error));
        }
      })
  }

  const  handleDateChange = data => {
    setCalendarModal(false);

    const date = data.toLocaleDateString().split('.');

    const string = `${date[0]} ${monthNames[parseInt(date[1]) - 1]}, ${date[2]}`

    setCalendarDate(string)
    setHiddenDate(data.toLocaleDateString());
  };

  const selectTime = (value) => {
    setTimeData(value)
    setTimeModal(false)
  }

  const openTimeModal = () => {
    setTimeModal(!timeModal)
    setCalendarModal(false)
  }

  const openCalendarModal = () => {
    setTimeModal(false)
    setCalendarModal(!calendarModal)
  }

  return (
    <TextModalOverlay>
      <TextModalBody
        onSubmit={(e) => {
          if(data) {
            updateSchedule(e).catch(error => console.error(error))
          } else {
            createNewEvent(e).catch(error => console.error(error))
          }
        }}
        className={'EventModalBody'}
        calendar={calendarModal}
      >
        <img onClick={close} className={'closed'} src={closed} alt="icon"/>
        <h2 className={'title'}>{data ? 'Редактировать событие' : 'Добавить событие'}</h2>

        {
          data ? (
            <MainDropList
              gray
              label={'Ученик'}
              name={'student'}
              required={true}
              options={students}
              onChange={onChangeStudentHandler}
              defaultValue={data.student}
            />
          ) : (
            <MainDropList
              gray
              label={'Ученик'}
              name={'student'}
              required={true}
              options={students}
              onChange={onChangeStudentHandler}
            />
          )
        }

        <div className="double">

          {
            data ? (
              <MainDropList
                label={'Курс'}
                name={'course'}
                required={true}
                options={coursesList}
                onChange={onChangeCourseHandler}
                defaultValue={data.course}
              />
            ) : (
              <MainDropList
                label={'Курс'}
                name={'course'}
                required={true}
                options={coursesList}
                onChange={onChangeCourseHandler}
              />
            )
          }

          {
            data ? (
              <MainDropList
                label={'Занятие'}
                name={'lesson'}
                type={'text'}
                options={lessons}
                defaultValue={data.lesson}
              />
            ) : (
              <MainDropList
                label={'Занятие'}
                name={'lesson'}
                type={'text'}
                options={lessons}
              />
            )
          }

        </div>

        <Line/>

        <SmallTitle>Дата / Время</SmallTitle>

        <div className="double">

          {
            data && !hiddenDate ? (
              <MainInput
                label={'Дата'}
                name={'date_string'}
                type={'text'}
                required={false}
                defaultValue={`${data.date.split('.')[0]} ${monthNames[parseInt(data.date.split('.')[1]) - 1]}, ${data.date.split('.')[2]}`}
                readOnly
                grey
                onClick={openCalendarModal}
                arrow={!calendarModal}
                showArrow
              />
            ) : (
              <MainInput
                label={'Дата'}
                name={'date_string'}
                type={'text'}
                required={false}
                readOnly
                grey
                onClick={openCalendarModal}
                defaultValue={calendarDate}
                arrow={!calendarModal}
                showArrow
              />
            )
          }

          <input type="hidden" name={'date'} value={hiddenDate}/>

          {
            data ? (
              <MainInput
                label={'Время'}
                name={'time'}
                type={'text'}
                required={false}
                defaultValue={data.time}
                grey
                readOnly
                validation={dateValidation}
                onClick={openTimeModal}
                arrow={!timeModal}
                showArrow
              />
            ) : (
              <MainInput
                label={'Время'}
                name={'time'}
                type={'text'}
                required={false}
                grey
                readOnly
                validation={dateValidation}
                onClick={openTimeModal}
                defaultValue={timeData}
                arrow={!timeModal}
                showArrow
              />
            )
          }

        </div>

        {
          calendarModal && <Calendar new onChange={handleDateChange}/>
        }
        {
          timeModal &&  <TimeModal selectTime={selectTime}/>
        }

        <MainButton
          text={'Добавить'}
          type={'submit'}
        />

        <div className="fake-calendar"/>

      </TextModalBody>

    </TextModalOverlay>
  )
}

export default AddEventModal;