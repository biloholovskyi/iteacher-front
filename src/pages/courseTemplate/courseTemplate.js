/*
* название файла и компонента не соответствует действительности
* это обычный курс, а не шаблон курса
* нужно будет обязательно это исправить
* */

// TODO нужно имзенить название файла и компонента
// TODO нужно часть функционала вынести в отдельные файлы

import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import axios from "axios";

import {loginUser, setTopAlertText} from "../../actions";

import PlanList from "./planList/planList";
import AddStudentModal from "./addStudentModal/addStudentModal";
import CalendarModal from "./calendarModal/CalendarModal";
import ProgramModal from "../../components/programModal/programModal";
import LeftSidebar from "./leftSidebar/leftSidebar";
import RightSidebar from "./rightSidebar/rightSidebar";
import CaptionBlock from './captionBlock/captionBlock';

import * as Style from './styled'

import ServerSettings from "../../service/serverSettings";

class CourseTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      courses: [],
      sections: [],
      course: {
        count_lessons: ''
      },
      student: {
        photo: '',
        name: '',
        email: ''
      },
      invite: false,
      calendar: false,
      step: true,
      stepTwo: false,
      stepThree: false,
      finish: false,
      activeSidebar: false,
      success: false,
      // для того что бы викинуть из страницы если зашли на нее по прямой ссылке
      redirect: false,
      // для избежания рендера до того как данные будут переданны
      loading: true,
      programModal: false,
      taskModalTitle: ''
    };
  }

  componentDidMount() {
    this.getNeedCourse();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps && JSON.stringify(prevProps.user) !== JSON.stringify(this.props.user)) {
      this.getNeedCourse();
    }
  }

  componentWillUnmount() {
    this.props.setTopAlertText(false);
  }

  // получение нужного курса
  getNeedCourse = () => {
    if (!this.props.user || this.props.user.courses.length < 1) {
      return
    }

    // получаем нужный нам курс
    const course = this.props.user.courses.find(c => c.id.toString() === this.props.courseId.toString());
    if (!course) {
      return
    }

    // проверяем на какой стадии курс
    // если у курса уже есть студент значит перекидываем на вторую стадию
    let step = true;
    let stepTwo = false
    let finish = false;
    let stepThree = false;
    if (course.student) {
      step = false;
      stepTwo = true
    }

    // если есть хотя бы одно события прокидываем на финальный этап
    if (course.schedules.length > 0) {
      step = false;
      stepTwo = false;
      finish = true;
      stepThree = true;
    }

    // вывод alert top
    if (course.status !== 'active' && this.props.user.type === 'teacher') {
      this.props.setTopAlertText('Курс не активен! Добавьте ученика и назначьте первый урок что бы активировать курс')
    } else {
      this.props.setTopAlertText(false)
    }

    this.setState({
      courses: this.props.courses,
      course: course,
      data: JSON.parse(course.lessons),
      step,
      stepTwo,
      stepThree,
      finish
    });
  }

  // close ALl modal
  closeModal = () => {
    this.setState(() => {
      return {
        ...this.state,
        invite: false,
        calendar: false,
        programModal: false
      }
    });
  }

  // open add student modal
  openInvite = () => {
    this.setState({invite: true})
  }

  // создание учениника
  createNewStudent = async (email) => {
    // проверяем есть ли пользователеь с таким емейлом уже
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();
    await axios.get(`${server.getApi()}api/users/${email.toLowerCase()}/`)
      .then(res => {
        // если есть проверяем тип пользователя
        if (res.data.type === 'student') {
          // если это ученик подключаем его к курсу
          // обновляем данные курса
          let updateCourse = {
            ...this.state.course,
            student: res.data.id
          }

          delete updateCourse.id;
          delete updateCourse.teacher;

          axios.put(`${server.getApi()}api/courses/${this.props.courseId}/update/`, updateCourse)
            .then((res) => {
              // обновляем данные пользователя в сторе
              axios.get(`${server.getApi()}api/users/${this.props.user.id}/`, {
                validateStatus: (status) => {
                  return true; // I'm always returning true, you may want to do it depending on the status received
                },
              })
                .then(res => {
                  // localStorage.setItem('iteacher_login', JSON.stringify(res.data));
                  this.props.loginUser(res.data);

                  // после отправки письма переходим на следующий шаг
                  this.setState({
                    invite: false,
                    step: false,
                    stepTwo: true,
                    success: false
                  })
                }).catch(error => {
                console.error(error);
              });
            })
            .catch(error => console.error(error))
        } else {
          // если это не ученик
          alert('Этот пользователь не ученик')
        }
      })
      .catch(() => {
        // если нету пользователя создаем нового

        // создаем пароль
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0, n = charset.length; i < 8; ++i) {
          password += charset.charAt(Math.floor(Math.random() * n));
        }

        const data = new FormData();
        data.set('name', '');
        data.set('email', email.toLowerCase());
        data.set('password', password);
        data.set('type', 'student')

        axios.post(`${server.getApi()}api/users/`, data)
          .then(res => {
            // обновляем курс и подключаем к курсу студента
            let updateCourse = {
              ...this.state.course,
              student: res.data.id
            }

            delete updateCourse.id;
            delete updateCourse.teacher;

            // отправляем письмо
            axios.get(`${server.getApi()}api/user/email/${res.data.id}/`)
              .catch(error => {
                console.error(error);
              });


            axios.put(`${server.getApi()}api/courses/${this.props.courseId}/update/`, updateCourse)
              .then((res) => {
                // обновляем данные пользователя в сторе
                axios.get(`${server.getApi()}api/users/${this.props.user.id}/`, {
                  validateStatus: (status) => {
                    return true; // I'm always returning true, you may want to do it depending on the status received
                  },
                })
                  .then(res => {
                    // localStorage.setItem('iteacher_login', JSON.stringify(res.data));
                    this.props.loginUser(res.data);

                    // после отправки письма переходим на следующий шаг
                    this.setState({
                      invite: false,
                      step: false,
                      stepTwo: true,
                      success: false
                    })
                  }).catch(error => {
                  console.error(error);
                });
              })
              .catch(error => console.error(error))

          }).catch(error => console.error(error));
      })
  }

  // активировтаь курс
  openActiveSidebar = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    // обновляем курс и подключаем к курсу студента
    let updateCourse = {
      name: this.state.course.name,
      count_lessons: this.state.course.count_lessons,
      average_lessons_time: this.state.course.average_lessons_time,
      description: this.state.course.description,
      status: 'active'
    }

    const server = new ServerSettings();
    await axios.put(`${server.getApi()}api/courses/${this.state.course.id}/update/`, updateCourse)
      .then((res) => {
        // обновляем данные пользователя в сторе
        axios.get(`${server.getApi()}api/users/${this.props.user.id}/`, {
          validateStatus: (status) => {
            return true; // I'm always returning true, you may want to do it depending on the status received
          },
        })
          .then(res => {
            this.props.loginUser(res.data);
          }).catch(error => {
          console.error(error);
        });

        // обвновляем данные в стейте
        this.setState({
          course: res.data
        })
      })
      .catch(error => console.error(error))
  }

  // last step on sidebar
  finish = () => {
    this.setState(() => {
      return {
        ...this.state,
        finish: true,
        calendar: false,
        stepThree: true,
        stepTwo: false
      }
    })
  }

  // open add event modal
  openCalendar = () => {
    this.setState({calendar: true})
  }

  //  show program item modal
  ProgramModal = (lesson) => {
    this.setState({
      sections: lesson.sections,
      taskModalTitle: lesson.name,
      programModal: true
    });
  }


  render() {
    const {data, course, redirect, programModal} = this.state;

    return (
      <Style.ContainerWrapper>
        <div className='container'>
          {redirect && <Redirect to={'/courses'}/>}

          <CaptionBlock course={course}/>

          <Style.CourseEmptyWrap>

            <LeftSidebar course={course} data={data}/>

            <Style.MainContent>
              <div className='title'>План занятий</div>
              <Style.Plans>
                <PlanList
                  course={course}
                  plans={data}
                  openModal={this.ProgramModal}
                />
              </Style.Plans>
            </Style.MainContent>

            <RightSidebar course={course} showAddStudent={this.openInvite} showAddEvent={this.openCalendar}/>

          </Style.CourseEmptyWrap>
          {/*MODAL ADD STUDENTS*/}
          {
            this.state.invite
              ? <AddStudentModal
                close={this.closeModal}
                func={this.createNewStudent}
              />
              : null
          }
          {/*add modal calendarSchedule*/}
          {
            this.state.calendar
            && (
              <CalendarModal
                course={this.state.course}
                close={this.closeModal}
                finish={this.finish}
                active={this.openActiveSidebar}
              />
            )
          }
          {/*modal for one lesson*/}
          {
            programModal
              ? <ProgramModal
                title={this.state.taskModalTitle}
                sections={this.state.sections}
                closed={this.closeModal}
              />
              : null
          }
        </div>
      </Style.ContainerWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

const mapDispatchToProps = {
  loginUser,
  setTopAlertText
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseTemplate);