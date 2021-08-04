import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import UserAvatar from "./userAvatar/userAvatar";
import InfoBlock from "../../components/infoBlock/infoBlock";
import Tabs from "./tabs/tabs";
import StudentModal from "./studentModal/studentModal";

import * as Style from './styled'

import pan from './media/pan.svg'

import axiosInstance from "../../service/iTeacherApi";


const StudentCart = ({id, user}) => {
  const [nextLesson, setNextLesson] = useState(null)
  const [studentData, setStudentData] = useState(null)

  const [tableData, setTableData] = useState([])

  const [showStudentModal, setShowStudentModal] = useState(false)

  const [more, setMore] = useState(false)

  useEffect(() => {
    getDataUser().catch(error => {
      console.error(error)
    });
  }, [id])

  useEffect(() => {
    updateTableData().catch();
  }, [studentData, id, showStudentModal]);

  // обновляем данные студента для таблицы
  const updateTableData = async () => {
    if (!studentData) {
      return
    }

    const dataArray = [];

    if (studentData.city) {
      dataArray.push({name: 'Город', value: studentData.city})
    }
    if (studentData.phone) {
      dataArray.push({name: 'Телефон', value: studentData.phone})
    }
    if (studentData.email) {
      dataArray.push({name: 'Почта', value: studentData.email})
    }

    setTableData(dataArray)
  }


  const getDataUser = async () => {
    await axiosInstance.get(`/users/${id}/`)
      .then(res => {
        setStudentData(res.data)
      }).catch(error => {
        console.error(error)
      });
  }

  // получаем ближайший урок
  const getNextLesson = async () => {
    let sortList;
    await axiosInstance.get(`/schedules/${user.id}/${id}/`)
      .then(res => {
        // меняем формат даты для сортировки
        sortList = res.data.map(event => {
          const date = event.date.split('.')
          const newDate = `${date[2]}-${date[1]}-${date[0]} ${event.time}:00`;
          return {...event, sortTime: newDate};
        })
      })
      .then(() => {
        // соритруем по дате
        sortList.sort((a, b) => {
          const dateA = new Date(a.sortTime).getTime();
          const dateB = new Date(b.sortTime).getTime();
          return dateA - dateB
        })

        // получаем данные курса события
        axiosInstance.get(`/courses/${sortList[0].course}/`)
          .then(res => {
            const lessons = JSON.parse(res.data.lessons);
            const lessonIndex = lessons.findIndex(l => parseInt(l.id) === parseInt(sortList[0].lesson))

            const nextLessonData = {
              ...sortList[0],
              lessonData: lessons[lessonIndex],
              lessonIndex: lessonIndex + 1
            };

            setNextLesson(nextLessonData);
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getNextLesson().catch(error => console.error(error))
  }, [id]);

  // показать больше информации
  const showMoreInformation = () => {
    if(more) {
      const dataArray = [];

      if (studentData.city) {
        dataArray.push({name: 'Город', value: studentData.city})
      }
      if (studentData.phone) {
        dataArray.push({name: 'Телефон', value: studentData.phone})
      }
      if (studentData.email) {
        dataArray.push({name: 'Почта', value: studentData.email})
      }

      setTableData(dataArray)
      setMore(false)
    } else {
      const socials = JSON.parse(studentData.socials).map(social => {
        return {value: social.type, name: social.link}
      });

      setTableData([
        ...tableData,
        ...socials
      ])
      setMore(true)
    }
  }

  return (
    <Style.Wrapper className={'container'}>
      <div className="left">
        <UserAvatar data={studentData}/>

        <InfoBlock
          data={{
            title: 'Информация',
            type: 'table',
            margin: 24,
            icon: pan,
            iconFunc: () => setShowStudentModal(true),
            table_content: tableData,
            button: {
              text: more ? 'Показать меньше информации' : 'Показать больше информации',
              func: showMoreInformation
            },
            // нужно для того что бы переворачивать иконку
            more: more
          }}
        />

        <InfoBlock
          data={{
            title: 'Следующее занятие',
            type: 'double-text',
            margin: 24,
            double_text: {
              top: nextLesson && `#${nextLesson.lessonIndex} ${nextLesson.lessonData.name}`,
              bot: nextLesson && `${nextLesson.date}, ${nextLesson.time}`
            }
          }}
        />

        <InfoBlock
          data={{
            title: 'Домашние задания',
            type: 'single-text',
            single_text: 'Нет заданий на проверке'
          }}
        />
      </div>

      <div className="right">
        <Tabs id={id} data={studentData}/>
      </div>

      {
        showStudentModal &&
        <StudentModal update={getDataUser} data={studentData} close={() => setShowStudentModal(false)}/>
      }
    </Style.Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StudentCart);