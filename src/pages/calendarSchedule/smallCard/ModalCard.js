import React, {useState} from "react";
import axios from "axios";

import {ModalCardWrap, Caption, InfoBlock} from './styled';

import closed from '../../../assets/media/icon/close.svg';
import editor from '../../../assets/media/icon/edit.svg';
import ava from "../../../assets/media/icon/avatar.svg";

import ServerSettings from "../../../service/serverSettings";

const ModalCard = ({close, event, course, lesson}) => {

  const [student, setStudent] = useState('');

  // получаем нужного студента
  const getStudent = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();
    await axios.get(`${server.getApi()}api/users/${course.student}/`)
      .then(res => {
        setStudent(res.data);
      })
      .catch(error => console.error(error))
  }

  if (course.student) {
    getStudent();
  }

  return (
    <ModalCardWrap className={'card'}>
      <div className="indicator"/>
      <div className="right">

        <Caption>
          <div className="title_block">
            <div className="title">{lesson.name}</div>
            <div className="date">{event.date} / {event.time}</div>
          </div>
          <div className="btn_block">
            <button><img src={editor} alt="icon"/></button>
            <button
              onClick={close}
            ><img src={closed} alt="icon"/></button>
          </div>
        </Caption>

        <InfoBlock>
          <div className="info">
            <span>Курс</span>
            <div className="course_name">{course.name}</div>
          </div>
          <div className="info">
            <span>Студент</span>
            <div className="student_name">
              {
                student
                  ? <img src={student.photo} alt="photo" className={'photo'}/>
                  : <img src={ava} alt="photo" className={'photo'}/>
              }
              <div className="name">{student.name ? student.name : student.email}</div>
            </div>
          </div>
        </InfoBlock>

      </div>
    </ModalCardWrap>
  )
}

export default ModalCard;