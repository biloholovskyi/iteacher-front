import React, {Component, useEffect} from "react";

import CoursesList from './coursesList/coursesList'
import StudentsList from "./studentsList/studentsList";

import {
  ButtonBlockUser,
  Course_info,
  DateRegistration,
  Email_block,
  MainInfo,
  NameBlock,
  Teacher,
  UserModal,
  UsersModalOverlay,
  StudentList,
} from "./usersStyled";

import close from "../../../assets/media/icon/close.svg";
import photo from "../../../assets/media/icon/avatar.png";
import ava from "../../../assets/media/icon/avatar.svg";
import arrow from '../../../assets/media/icon/arrow-modal.svg';
import axios from "axios";
import ServerSettings from "../../../service/serverSettings";

class UsersModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursesModal: false,
      studentListModal: false,
      students: []
    }
  }

  componentDidMount() {
    this.setStudents();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.user && JSON.stringify(this.props.user) !== JSON.stringify(prevProps.user)) {
      this.setStudents();
    }
  }

  // получаем список студентов
  setStudents = async () => {
    if(!this.props.user && JSON.stringify(this.props.user) === JSON.stringify({}) || this.props.user.courses.length < 1) {
      return
    }

    this.props.user.courses.forEach(course => {
      // получаем студента
      const student = course.student;

      axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
      axios.defaults.xsrfCookieName = 'csrftoken';

      const server = new ServerSettings();

      axios.get(`${server.getApi()}api/users/${student}/`)
        .then(res => {
          if(this.state.students.find(s => parseInt(res.data.id) === parseInt(s.id)) === undefined) {
            this.setState({students: [...this.state.students, res.data]});
          }
        }).catch(error => console.error(error));
    })
  }

  // получаем колличество студентов
  setCountStudents = (count) => {
    this.setState({countStudents: count});
  }

  OpenCourseModal = () => {
    this.setState({
      coursesModal: true
    });
  }

  OpenStudentListModal = () => {
    this.setState({
      studentListModal: true
    });
  }

  CloseCourseModal = () => {
    this.setState({
      coursesModal: false,
      studentListModal: false,
    });
    this.props.closed();
  }

  BackCourseModal = () => {
    this.setState({
      coursesModal: false,
      studentListModal: false
    });
  }

  // функция для форматирования даты
  formatDate(string) {
    let options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(string).toLocaleDateString(['ru'], options);
  }

  render() {
    const {user} = this.props;
    const type = user.type === 'teacher' ? 'Преподаватель' : user.type === 'admin' ? 'Админ' : user.type === 'student' ? 'Студент' : '';

    // берем дату регистрации юзера
    const date = user.created_at;
    // обрезаем что б получить только день,месяц,год
    const MyNewDate = date.split("T")[0];
    const dateNormal = this.formatDate(MyNewDate);

    return (
      <UsersModalOverlay>
        <UserModal id={user.id}>
          <img onClick={this.props.closed} src={close} alt="icon" className={'closed'}/>
          <NameBlock>
            <img src={user.photo ? user.photo : ava} alt="photo" className={'photo'}/>
            <div className="name">{user.name}</div>
            <div className="type">{type}</div>
          </NameBlock>
          <MainInfo>

            <Email_block>
              <div className="title">Email</div>
              <div className="info email">{user.email}</div>
            </Email_block>

            <DateRegistration>
              <div className="title">Дата регистрации</div>
              <div className="info date">{dateNormal}</div>
            </DateRegistration>

            {
              user.type === 'teacher' && (
                <StudentList onClick={this.OpenStudentListModal}>
                  <div className="title">Ученики</div>
                  <div className="arrow_section">
                    <div className="info">{this.state.students.length}</div>
                    <img src={arrow} alt="icon"/>
                  </div>
                </StudentList>
              )
            }

            {
              user.type === 'student'
                ? (
                  <Teacher>
                    <div className="title">Преподователь</div>
                    <div className="info teacher">
                      <div className="teacher_name">Jesse Miller</div>
                      <img src={photo} alt="icon" className={'avatar'}/>
                    </div>
                  </Teacher>
                ) : null
            }

            {/*список курсов у препода*/}
            {
              user.type === 'teacher' && (
                <StudentList
                  onClick={this.OpenCourseModal}
                >
                  <div className="title">Курсы</div>
                  <div className="arrow_section">
                    <div className="info">{user.courses.length}</div>
                    <img src={arrow} alt="icon"/>
                  </div>
                </StudentList>
              )
            }

            {
              user.type === 'student'
                ? (
                  <Course_info>
                    <div className="title">Курс</div>
                    <div className="info email">General English</div>
                  </Course_info>
                ) : null
            }
          </MainInfo>

          <ButtonBlockUser>Заблокировать пользователя</ButtonBlockUser>
        </UserModal>

        {/*course list modal*/}
        {
          this.state.coursesModal && <CoursesList close={this.CloseCourseModal} back={this.BackCourseModal} courses={user.courses}/>
        }

        {/*student list modal*/}
        {
          this.state.studentListModal && <StudentsList close={this.CloseCourseModal} back={this.BackCourseModal} students={this.state.students} setCount={this.setCountStudents}/>
        }
      </UsersModalOverlay>
    )
  }
}


export default UsersModal;