import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import axios from "axios";

import {setTopAlertText} from "../../actions";

import MainButton from "../../components/buttons/mainButton/mainButton";
import MainContent from './mainContent/mainContent';
import {ChatSection} from './chatSection/ChatSection';
import LeftSideBar from './leftSideBar/leftSideBar';
import WaitStudentModal from './waitStudentModal';

import {LessonHeader, LessonBody, LessonWrap} from './singleLessonStyled';

import ClassRoom from "./services";
import ServerSettings from "../../service/serverSettings";
import {onMessage} from "./onmessage";

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

  componentDidMount() {
    this.setData();
    this.createWebsocket();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.user && prevProps.user !== this.props.user) {
      this.setData();
    }
  }

  componentWillUnmount() {
    this.props.setTopAlertText(false);

    // отключаемся от соиденения сокета
    this.chatSocket.send(JSON.stringify({
      'message': {
        type: 'disconnect',
        user: {
          type: this.props.user.type,
          id: this.props.user.id
        }
      }
    }));

    this.chatSocket.close();
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

    // отправляем сообщение преподу что было совершенно изминения задания
    this.chatSocket.send(JSON.stringify({
      'message': {
        type: 'update_task',
        data: {...this.state.data, lesson: JSON.stringify(newLesson)},
        user: {
          type: this.props.user.type,
          id: this.props.user.id
        }
      }
    }));
  }

  // создание websocket
  createWebsocket = () => {
    // нужно будет указать более правильный путь
    this.chatSocket = new WebSocket(
      'ws://'
      + '5.181.108.174:8000'
      + '/ws/chat/'
      + 'test'
      + '/'
    );

    this.chatSocket.onopen = () => {
      console.log('open');
    }

    const statusModalConnectTeacher = (status) => {
      this.setState({waitStudentModal: status});
    }

    const setDataInState = (data) => {
      this.setState({data: data.message.data})
    }

    // прослушиваем сообщения
    this.chatSocket.onmessage = (e) => onMessage(e, this.chatSocket, this.props.user, this.props.setTopAlertText, statusModalConnectTeacher, setDataInState);

    this.chatSocket.onopen = () => {
      // если user уже есть
      if (this.props.user.type) {
        // отправляем запрос на подключение к сокету
        this.chatSocket.send(JSON.stringify({
          'message': {
            type: 'connect',
            user: {
              type: this.props.user.type,
              id: this.props.user.id
            }
          }
        }));
      }
    }

    // при разрыве соиденения
    this.chatSocket.onclose = (e) => {
      console.error('Chat socket closed unexpectedly');
    };
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

                    <MainContent
                      activeSection={this.state.activeSection}
                      tasks={data.lesson}
                      wsUpdate={this.wsUpdateTask}
                      nextSection={this.changeActiveSection}
                    />

                    <ChatSection/>

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