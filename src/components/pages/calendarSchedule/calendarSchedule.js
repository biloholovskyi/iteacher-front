import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import axios from "axios";

import Calendar from './calendar/calendar';
import MainDropList from "../../inputs/mainDropList/mainDropList";
import AddEventModal from "./addEventModal";

import {CalendarWrap, AddEventBtn, SubCaptionBlock, SearchBlock, InputItem, FilterBtn} from './styled';

import plus from "../../../assets/media/icon/plusW.svg";
import search from "../../../assets/media/icon/search.svg";
import close from '../../../assets/media/icon/close.svg';
import filter from "../../../assets/media/icon/filter.svg";

import ServerSettings from "../../../service/serverSettings";

const CalendarSchedule = ({user}) => {

  const [EventModal, setEventMModal] = useState(false);
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
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const serverSettings = new ServerSettings();
    await axios.get(`${serverSettings.getApi()}api/courses/`)
      .then(res => {
        setCourses(res.data);
      })
      .catch(error => console.error(error));
  }

  // получаем все события с сервера
  const setAllSchedules = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const serverSettings = new ServerSettings();
    await axios.get(`${serverSettings.getApi()}api/schedules/`)
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
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();
    await axios.get(`${server.getApi()}api/users/`)
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

  return (
    <>
      <CalendarWrap>

        <div className="caption">
          <h1>Расписание</h1>

          <AddEventBtn
            type={'button'}
            onClick={() => setEventMModal(true)} >
            Добавить событие
            <img src={plus} alt="icon"/>
          </AddEventBtn>

          <FilterBtn>
            <img src={filter} alt="icon"/>
          </FilterBtn>

        </div>

        <SubCaptionBlock>

          <div className="arrow"/>

          <SearchBlock>
            <img src={search} alt="icon"/>
            <input type="text" placeholder="Поиск"/>

            <InputItem>
              Brandon Garcia
              <img src={close} alt="icon"/>
            </InputItem>

          </SearchBlock>

          <MainDropList
            name={'calendar'}
            type={'text'}
            options={dropListName}
            onChange={selectCalendarType}
          />

        </SubCaptionBlock>

        <Calendar
          courses={user.courses}
          schedules={scheduleList}
        />

      </CalendarWrap>

      {
        EventModal && (
          <AddEventModal
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