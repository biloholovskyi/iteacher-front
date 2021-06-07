import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import axios from "axios";

import {setTopAlertText} from "../../../actions";

import MainButton from "../../buttons/mainButton/mainButton";
import MainContent from './mainContent/mainContent';
import {ChatSection} from './chatSection/ChatSection';
import LeftSideBar from './leftSideBar/leftSideBar';
import WaitStudentModal from './waitStudentModal';

import {LessonHeader, LessonBody, LessonWrap} from './singleLessonStyled';

import ClassRoom from "./services";
import ServerSettings from "../../../service/serverSettings";

class SingleLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waitStudentModal: false,
      loading: true,
      redirect: false,
      data: null,
      activeSection: 0
    }
    this.ClassRoomService = new ClassRoom()
    this.chatSocket = null;
    this.interval = null;
  }

  componentWillUnmount() {
    this.props.setTopAlertText(false);

    // clearTimeout(this.interval)

    // this.disconnectUser().catch(e => console.error(e))

    // // отключаемся от соиденения сокета
    // this.chatSocket.send(JSON.stringify({
    //   'message': {
    //     type: 'disconnect',
    //     user: {
    //       type: this.props.user.type,
    //       id: this.props.user.id
    //     }
    //   }
    // }));
    //
    this.chatSocket.close();
  }

  componentDidMount() {
    this.setData();

    // this.interval = setInterval(() => {
    //   this.alternateWS().catch(error => console.error(error))
    // }, 3000)

    this.createWebsocket();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.user && prevProps.user !== this.props.user) {
      this.setData();

      // если преподаватель выводим сообщение о том что ученик не подключен
      // if (this.props.user.type === 'teacher') {
      //   this.props.setTopAlertText('Ученик еще не вошел')
      // } else {
      //   this.setState({waitStudentModal: true})
      // }

      // отправляем запрос на подключение к сокету
      // this.chatSocket.send(JSON.stringify({
      //   'message': {
      //     type: 'connect',
      //     user: {
      //       type: this.props.user.type,
      //       id: this.props.user.id
      //     }
      //   }
      // }));
    }
  }

  // отпправялем данные что пользователь подключен
  connectUser = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    let newData = null;

    if (this.props.user.type === 'student') {
      newData = {
        ...this.state.data,
        student_connect: 'True'
      }
    } else {
      newData = {
        ...this.state.data,
        teacher_connect: 'True'
      }
    }

    // получаем данные урока
    const serverSettings = new ServerSettings();
    await axios.put(`${serverSettings.getApi()}api/classrooms/${this.state.data.id}/update/`, newData)
      .catch(error => console.error(error));
  }

  disconnectUser = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    let newData = null;

    if (this.props.user.type === 'student') {
      newData = {
        ...this.state.data,
        student_connect: 'False'
      }
    } else {
      newData = {
        ...this.state.data,
        teacher_connect: 'False'
      }
    }

    // получаем данные урока
    const serverSettings = new ServerSettings();
    await axios.put(`${serverSettings.getApi()}api/classrooms/${this.state.data.id}/update/`, newData)
      .catch(error => console.error(error));
  }

  alternateWS = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    // получаем данные урока
    const serverSettings = new ServerSettings();
    await axios.get(`${serverSettings.getApi()}api/classrooms/${this.state.data.id}/`)
      .then(res => {
        const activeSectionIndex = JSON.parse(res.data.lesson).active_section
        if(activeSectionIndex) {
          this.setState({activeSection: activeSectionIndex})
        }

        if (res.data.student_connect === 'True') {
          this.props.setTopAlertText(false)
        } else {
          this.props.setTopAlertText('Ученик еще не вошел')
        }

        if (res.data.teacher_connect === 'True') {
          this.setState({waitStudentModal: false});
        } else {
          this.setState({waitStudentModal: true});
        }
        // const test = JSON.parse(res.data.lesson).sections[0].tasks[0];
        // console.log(JSON.parse(test.list_column))

        this.setState({data: res.data})
        // console.log(JSON.parse(res.data.lesson))
      })
      .catch(error => console.error(error));
  }

  // realtime заданий
  wsUpdateTask = async (data, indexSection, old, typeData) => {
    // получаем данные урока
    const lesson = JSON.parse(this.state.data.lesson)
    // получаем текущую секцию
    const section = lesson.sections[this.state.activeSection]
    // находим задания
    const indexTask = section.tasks.findIndex(t => parseInt(t.id) === parseInt(old.id));
    const newTask = {
      ...section.tasks[indexTask],
      [typeData]: JSON.stringify(data),
    }

    const newTaskList = [...section.tasks.slice(0, indexTask), newTask, ...section.tasks.slice(indexTask + 1)]
    const newSection = {
      ...section,
      tasks: newTaskList
    }
    const newLesson = {
      ...lesson,
      sections: [...lesson.sections.slice(0, this.state.activeSection), newSection, ...lesson.sections.slice(this.state.activeSection + 1)]
    }

    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    // получаем данные урока
    const serverSettings = new ServerSettings();
    await axios.put(`${serverSettings.getApi()}api/classrooms/${this.state.data.id}/update/`, {
      ...this.state.data,
      lesson: JSON.stringify(newLesson)
    })
      .catch(error => console.error(error));

    // // отправляем сообщение преподу что было совершенно изминения задания
    // this.chatSocket.send(JSON.stringify({
    //   'message': {
    //     type: 'update_task',
    //     data: {...this.state.data, lesson: JSON.stringify(newLesson)}
    //   }
    // }));
  }

  // создание websocket
  createWebsocket = () => {
    const server = new ServerSettings();
    // нужно будет указать более правильный путь
    this.chatSocket = new WebSocket(
      'ws://'
      + window.location.host
      + '/ws/chat/'
      + 'test'
      + '/'
    );


    // прослушиваем сообщения
    this.chatSocket.onmessage = (e) => {
      const data = JSON.parse(e.data);

      // получаем тип сообщения
      switch (data.message.type) {
        case 'testonmessage':
          console.log(data.message);
          break
        case 'connect':
          // проверяем чьи данные пришли
          if (parseInt(data.message.user.id) === parseInt(this.props.user.id)) {
            console.log('fake')
          } else {
            // если данные другого пользователя
            // если подключенный пользователь преподаватель
            if (this.props.user.type === 'teacher') {
              // если новый пользователь ученик
              if (data.message.user.type === 'student') {
                // убираем уведомления о том что студент не подключен
                this.props.setTopAlertText(false)
              }
            } else {
              // если подключенный пользователь студент

              // если новый пользователь преподаватель
              if (data.message.user.type === 'teacher') {
                // убираем уведомления о том что преподаватель не подключен
                this.setState({waitStudentModal: false});
              }

              // отправляем сообщения для препода что ученик уже подключен
              this.chatSocket.send(JSON.stringify({
                'message': {
                  type: 're_connect',
                  user: {
                    type: this.props.user.type,
                    id: this.props.user.id
                  }
                }
              }));
            }
          }
          break

        case 're_connect':
          // проверяем от нас сообщение или нет
          if (parseInt(data.message.user.id) === parseInt(this.props.user.id)) {
            console.log('fake')
          } else {
            // если подключенный пользователь преподаватель
            if (this.props.user.type === 'teacher') {
              // если сообщение от ученика
              if (data.message.user.type === 'student') {
                // убераем оповещение о том что ученик не подключен
                this.props.setTopAlertText(false)
              }
            } else {
              // если подключенный пользователь студент
              // если сообщение от препода
              if (data.message.user.type === 'teacher') {
                // убераем оповещение о том что препод не подключен
                this.setState({waitStudentModal: false})
              }
            }
          }
          break

        case 'disconnect':
          // проверяем сообщение от нас или нет
          if (parseInt(data.message.user.id) === parseInt(this.props.user.id)) {
            console.log('fake')
          } else {
            // если подключенный пользователь преподаватель
            if (this.props.user.type === 'teacher') {
              // если сообщение от ученика
              if (data.message.user.type === 'student') {
                // добавляем оповещение о том что студент отключился
                this.props.setTopAlertText('Ученик еще не вошел')
              }
            } else {
              // если подключенный пользователь студент
              // если данные от преподавателя
              if (data.message.user.type === 'teacher') {
                // добавляем оповещение что препод отключился
                this.setState({waitStudentModal: true})
              }
            }
          }
          break

        case 'update_task':
          this.setState({data: data.message.data})
          break
      }
    };

    this.chatSocket.onopen = () => {
      console.log('open');
    }

    // если user уже есть
    if (this.props.user.type) {
      // this.chatSocket.onopen = () => {
      //   // отправляем запрос на подключение к сокету
      //   this.chatSocket.send(JSON.stringify({
      //     'message': {
      //       type: 'connect',
      //       user: {
      //         type: this.props.user.type,
      //         id: this.props.user.id
      //       }
      //     }
      //   }));
      // }
    }

    // при разрыве соиденения
    this.chatSocket.onclose = function (e) {
      console.error('Chat socket closed unexpectedly');
    };
  }

  testSocket = () => {
    console.log('test')
    const socket = this.chatSocket;
    if(!socket.readyState){
      console.log('her')
      setTimeout(function (){
        socket.send(JSON.stringify({
          'message': {
            type: 'testonmessage',
            message: 'test'
          }
        }));
      },100);
    } else {
      socket.send(JSON.stringify({
        'message': {
          type: 'testonmessage',
          message: 'test'
        }
      }));
    }
  }

  // устанавливаем данные урока
  setData = () => {
    // проверяем есть ли урок
    this.ClassRoomService.checkRoom(this.props.id).then(res => {
      if (res === undefined) {
        // если урока нету
        this.setState({redirect: true})
      } else {
        // если урок найден
        this.setState({loading: false, data: res.data})

        // проверяем тот ли пользователь вошел
        const course = JSON.parse(res.data.course)
        if (course[this.props.user.type] !== this.props.user.id) {
          this.setState({redirect: true})
        }

        this.connectUser().catch(error => console.error(error));
      }
    })
  }

  changeActiveSection = () => {
    // получаем все секции
    const sections = JSON.parse(this.state.data.lesson).sections;
    // получаем индекс новой активной секции
    const newSection = this.state.activeSection + 1;
    // если нету секции с таким индексом останавливаем функцию
    if(newSection === sections.length) {return}
    // задаем новую активуню секцию
    this.setState({activeSection: this.state.activeSection + 1});

    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    // получаем данные урока
    const serverSettings = new ServerSettings();
    const newLesson = {
      ...JSON.parse(this.state.data.lesson),
      active_section: newSection
    }

    axios.put(`${serverSettings.getApi()}api/classrooms/${this.state.data.id}/update/`, {...this.state.data, lesson: JSON.stringify(newLesson)})
      .then(res => {

      })
      .catch(error => console.error(error));
  }

  render() {
    const {redirect, data, loading} = this.state;

    return (
      <>
        {/*если нету урока*/}
        {
          redirect && <Redirect to={'/'}/>
        }
        {/*надо вставить прелоудер*/}
        {
          !loading && (
            <>
              <LessonHeader>

                <div className="titleBlock">{data.name}</div>

                <MainButton
                  text={'Закончить задание'}
                  type={'button'}
                  width={197}
                />

              </LessonHeader>

              <LessonWrap>
                <div className="container">
                  <LessonBody>

                    <LeftSideBar data={data.lesson} activeSection={this.state.activeSection}/>

                    {/*<MainContent*/}
                    {/*  activeSection={this.state.activeSection}*/}
                    {/*  tasks={data.lesson}*/}
                    {/*  wsUpdate={this.wsUpdateTask}*/}
                    {/*  nextSection={this.changeActiveSection}*/}
                    {/*/>*/}

                    <ChatSection test={this.testSocket}/>

                  </LessonBody>
                </div>
              </LessonWrap>
            </>
          )
        }

        {
          this.state.waitStudentModal && (
            <WaitStudentModal/>
          )
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  setTopAlertText,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleLesson);