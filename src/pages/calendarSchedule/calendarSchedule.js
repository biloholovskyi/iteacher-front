import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import axios from "axios";

import Calendar from './calendar/calendar';
import MainDropList from "../../components/inputs/mainDropList/mainDropList";
import AddEventModal from "./addEventModal";

import {CalendarWrap, AddEventBtn, SubCaptionBlock, SearchBlock, InputItem, FilterBtn, SelectTodayBtn} from './styled';

import plus from "../../assets/media/icon/plusW.svg";
import search from "../../assets/media/icon/search.svg";
import close from '../../assets/media/icon/close.svg';
import filter from "../../assets/media/icon/filter.svg";

import axiosInstance from "../../service/iTeacherApi";

const CalendarSchedule = ({user}) => {

  const [EventModal, setEventMModal] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  // записиваем тип календаря в стейт
  const [calendarType, setCalendarType] = useState([]);
  // список событий
  const [scheduleList, setList] = useState([]);
  // студенты
  const [students, setStudents] = useState([]);
  // костыль для студента
  const [allCourses, setCourses] = useState([]);

  // получаем все курсы
  const getAllCourses = async () => {
    axiosInstance.get("/courses/")
      .then(res => {
        setCourses(res.data);
      })
      .catch(error => console.error(error));
  }

  // получаем все события с сервера
  const setAllSchedules = async () => {
    axiosInstance.get("/schedules/")
      .then(res => {
        // отбираем только события текущего пользователя
        if (user.type === 'teacher') {
          const list = res.data.filter(event => parseInt(event.user) === parseInt(user.id));
          setList(list);
        }
      })
      .catch(error => console.error(error));
  }

  // получаем данные студентов
  const getStudentData = async () => {
    const needUser = [];
    axiosInstance.get("/users/")
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
    setAllSchedules().catch(error => console.error(error));
    getAllCourses().catch(error => console.error(error));
  }, []);

  // закриватие модалки событий
  const closeEventModal = () => {
    setEventMModal(false)
  }

  // получаем вибраный тип календаря
  const selectCalendarType = (value) => {
    setCalendarType(value);
  }

  // передаем список значений в дропдаун
  const dropListName = [
    {name: 'Неделя', value: 'week'},
    {name: 'День', value: 'day'},
    {name: 'Месяц', value: 'month'}
  ]

  // обновляем список после добавления
  const updateList = (event) => {
    setList([...scheduleList, event])
  }

  // открытия модалки на редактирование
  const updateSchedule = (event) => {
    if(event.status === 'process') {return}
    setUpdateData(event)
    setEventMModal(true)
  }

  return (
    <>
      <CalendarWrap>

        <div className="caption">
          <h1>Расписание</h1>

          <div className={'btn_section'}>
            <SelectTodayBtn>Сегодня</SelectTodayBtn>

            <AddEventBtn
              type={'button'}
              onClick={() => {
                setUpdateData(false);
                setEventMModal(true)
              }} >
              Добавить урок
              <img src={plus} alt="icon"/>
            </AddEventBtn>
          </div>

          <FilterBtn>
            <img src={filter} alt="icon"/>
          </FilterBtn>

        </div>

        {/*<SubCaptionBlock>*/}

        {/*  <div className="arrow"/>*/}

        {/*  <SearchBlock>*/}
        {/*    <img src={search} alt="icon"/>*/}
        {/*    <input type="text" placeholder="Поиск"/>*/}

        {/*    <InputItem>*/}
        {/*      Brandon Garcia*/}
        {/*      <img src={close} alt="icon"/>*/}
        {/*    </InputItem>*/}

        {/*  </SearchBlock>*/}

        {/*  <MainDropList*/}
        {/*    name={'calendar'}*/}
        {/*    type={'text'}*/}
        {/*    options={dropListName}*/}
        {/*    onChange={selectCalendarType}*/}
        {/*  />*/}

        {/*</SubCaptionBlock>*/}

        <Calendar
          update={updateSchedule}
          courses={user.courses}
          schedules={scheduleList}
        />

      </CalendarWrap>

      {
        EventModal && (
          <AddEventModal
            updateData={updateData}
            courses={user.courses}
            close={closeEventModal}
            user={user}
            studentsList={students}
            update={updateList}
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

export default connect(mapStateToProps, mapDispatchToProps)(CalendarSchedule);