import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import AddEventModal from "./addEventModal/addEventModal";
import List from "./list/list";
import ScheduleEmpty from "./scheduleEmpty/scheduleEmpty";

import {ScheduleWrap, Title, AddCourse, Caption} from './styled';

import plus from "../../assets/media/icon/plusW.svg";

import axiosInstance from "../../service/iTeacherApi";

const Schedules = ({teacher, user}) => {
  const [EventModal, setEventMModal] = useState(false);
  const [scheduleList, setList] = useState([]);
  const [students, setStudents] = useState([]);

  // костыль для студента
  const [allCourses, setCourses] = useState([]);

  const closeEventModal = () => {
    setEventMModal(false)
  }

  // получаем все курсы (костыль на время для студента)
  const getAllCourses = async () => {
    await axiosInstance.get(`/courses/`)
      .then(res => {
        setCourses(res.data);
      })
      .catch(error => console.error(error));
  }

  // получаем все события с сервера
  const setAllSchedules = async () => {
    await axiosInstance.get(`/schedules/`)
      .then(res => {
        // отбираем только события текущего пользователя
        // если это преподаватель
        if (user.type === 'teacher') {
          const list = res.data.filter(event => parseInt(event.user) === parseInt(user.id))
            .filter(event => event.status !== 'completed');
          setList(list);
        } else {
          // если это студент
          const list = res.data.filter(event => parseInt(event.student) === parseInt(user.id))
            .filter(event => event.status !== 'completed');
          setList(list);
        }
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    setAllSchedules().catch(error => console.error(error));
    getAllCourses().catch(error => console.error(error));
  }, []);

  // получаем данные студентов
  const getStudentData = async () => {
    const needUser = [];
    await axiosInstance.get(`/users/`)
      .then(res => {
        user.courses.filter(course => course.status === 'active')
          .forEach(courseObject => {
            const student = res.data.find(s => parseInt(s.id) === parseInt(courseObject.student))
            const status = needUser.find(object => parseInt(object.value) === parseInt(student.id));
            if (status === undefined) {
              needUser.push({value: student.id, name: student.email})
            }
          })
      })
      .then(() => {
        setStudents(needUser);
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getStudentData().catch(error => console.error(error));
  }, []);


  // обновляем список после добавления
  const updateList = (event) => {
    setList([...scheduleList, event])
  }

  return (
    <>
      {
        scheduleList.length > 0
          ? (
            <ScheduleWrap>
              <Caption>
                <Title>Расписание</Title>
                {/*если это логин пользователя*/}
                {
                  teacher && (
                    <AddCourse
                      className={'openModal'}
                      onClick={() => setEventMModal(true)}
                    >
                      Добавить событие
                      <img src={plus} alt="icon"/>
                    </AddCourse>
                  )
                }
              </Caption>
              {/*список событий*/}
              {/*пока просто костыль*/}
              {
                user.type === 'teacher' && (
                  <List
                    courses={user.courses}
                    schedules={scheduleList}
                    type={user.type}
                  />
                )
              }

              {
                user.type === 'student' && allCourses.length > 0 && (
                  <List
                    courses={user.courses}
                    schedules={scheduleList}
                    type={user.type}
                    studentCourses={allCourses}
                  />
                )
              }


              {/*список событий*/}
            </ScheduleWrap>
          ) : (
            <ScheduleEmpty teacher={teacher} open={setEventMModal}/>
          )
      }


      {
        EventModal && (
          <AddEventModal
            courses={user.courses}
            close={closeEventModal}
            user={user}
            update={updateList}
            studentsList={students}
          />
        )
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Schedules);