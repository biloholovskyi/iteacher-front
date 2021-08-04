import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";

import {setTopAlertText, setCRactiveWord, setCRactiveEmpty} from "../../actions";

import MainButton from "../../components/buttons/mainButton/mainButton";
import MainContent from './mainContent/mainContent';
import {ChatSection} from './chatSection/ChatSection';
import LeftSideBar from './leftSideBar/leftSideBar';
import WaitStudentModal from './waitStudentModal';
import DictionarySearchModal from '../dictionary/dictionaryModals/searchModal'

import {LessonHeader, LessonNav, LessonBody, LessonWrap} from './singleLessonStyled';

import IconDictionary from '../../assets/media/icon/dictionary.svg';

import ClassRoom from "./services";
import axiosInstance from "../../service/iTeacherApi";
import {onMessage} from "./onmessage";

const ws_url = process.env.REACT_APP_WS_URL;

class SingleLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waitStudentModal: false,
      dictionaryModal: false,
      loading: true,
      redirect: false,
      data: null,
      activeSection: 0,
      chatData: [],
    }
    this.ClassRoomService = new ClassRoom()
    this.chatSocket = null;
    this.interval = null;
    this.showDictionaryModal = this.showDictionaryModal.bind(this);
  }

  componentDidMount() {
    this.setData();
    this.createWebsocket();
    window.addEventListener('beforeunload', () => {
      // отключаемся от соиденения сокета
      if (this.chatSocket.readyState === 1) {
        this.props.setTopAlertText(false);
        this.chatSocket.send(JSON.stringify({
          'message': {
            type: 'disconnect',
            user: {
              type: this.props.user.type,
              id: this.props.user.id
            }
          }
        }));
      } else {
        this.props.setTopAlertText(false);
      }
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.user && prevProps.user !== this.props.user) {
      this.setData();
    }
  }

  componentWillUnmount() {
    this.props.setTopAlertText(false);

    // отключаемся от соиденения сокета
    if (this.chatSocket.readyState === 1) {
      this.chatSocket.send(JSON.stringify({
        'message': {
          type: 'disconnect',
          user: {
            type: this.props.user.type,
            id: this.props.user.id
          }
        }
      }));
    } else {
      this.props.setTopAlertText(false);
    }

    this.chatSocket.close();
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

    // получаем данные урока
    await axiosInstance.put(`/classrooms/${this.state.data.id}/update/`, {
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

    this.setActiveWord({id: null}, null);
  }

  // создание websocket
  createWebsocket = () => {
    this.chatSocket = new WebSocket(
      ws_url
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

    const setActiveSection = (section) => {
      this.setState({activeSection: section})
    }

    const setActiveWordInRedux = (word) => {
      this.props.setCRactiveWord(word);
    }

    const setActiveEmptyInRedux = (empty) => {
      this.props.setCRactiveEmpty(empty);
    }

    const updateChatData = (data) => {
      this.setState({chatData: data});
    }

    const endClassRoom = () => {
      this.setState({redirect: true})
    }

    // прослушиваем сообщения
    this.chatSocket.onmessage = (e) => onMessage(
      e,
      this.chatSocket,
      this.props.user,
      this.props.setTopAlertText,
      statusModalConnectTeacher,
      setDataInState,
      setActiveSection,
      setActiveWordInRedux,
      setActiveEmptyInRedux,
      updateChatData,
      endClassRoom
    );

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
        if(res.data.status === 'completed') {
          this.setState({redirect: true});
        }
        const activeSection = JSON.parse(res.data.lesson).active_section || 0;
        this.setState({loading: false, data: res.data, activeSection})

        // проверяем тот ли пользователь вошел
        const course = JSON.parse(res.data.course)
        if (course[this.props.user.type] !== this.props.user.id) {
          this.setState({redirect: true})
        } else {
          // выводим сообщения о том что другой пользователь не подключен
          // проверяем какой именно пользователь подключен
          if(this.props.user.type === 'teacher') {
            this.props.setTopAlertText('Ученик еще не вошел')
          } else if(this.props.user.type === 'student') {
            this.setState({waitStudentModal: true})
          }
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
    if (newSection === sections.length) {
      return
    }
    // задаем новую активуню секцию
    this.setState({activeSection: this.state.activeSection + 1});

    // получаем данные урока
    const newLesson = {
      ...JSON.parse(this.state.data.lesson),
      active_section: newSection
    }

    axiosInstance.put(`/classrooms/${this.state.data.id}/update/`, {
      ...this.state.data,
      lesson: JSON.stringify(newLesson)
    })
      .then(() => {
        this.chatSocket.send(JSON.stringify({
          'message': {
            type: 'change_section',
            activeSection: newSection,
            user: {
              type: this.props.user.type,
              id: this.props.user.id
            }
          }
        }));
      })
      .catch(error => console.error(error));
  }

  // устанавливаем выбранное слово
  setActiveWord = (task, word) => {
    this.props.setCRactiveWord({
      task: task.id,
      word: word
    })

    this.chatSocket.send(JSON.stringify({
      'message': {
        type: 'active_word',
        data: {
          task: task.id,
          word: word
        },
        user: {
          type: this.props.user.type,
          id: this.props.user.id
        }
      }
    }));
  }

  // устанавливаем выбранную ячейку
  setActiveEmptyItem = (task, empty) => {
    this.props.setCRactiveEmpty({
      task: task.id,
      word: empty
    })

    this.chatSocket.send(JSON.stringify({
      'message': {
        type: 'active_empty',
        data: {
          task: task.id,
          empty: empty
        },
        user: {
          type: this.props.user.type,
          id: this.props.user.id
        }
      }
    }));
  }

  chatSendMessage = (data) => {
    this.setState({chatData: data})
  }

  showDictionaryModal() {
    this.setState(prevState => ({
      dictionaryModal: !prevState.dictionaryModal
    }));
  }

  // завершение урока
  endClassRoom = async () => {
    // получаем данные урока
    await axiosInstance.put(`/classrooms/${this.state.data.id}/update/`, {
      ...this.state.data,
      status: 'completed'
    })
      .then(() => {

        axiosInstance.get(`/schedules/`)
          .then(res => {
            console.log(res.data);
            const needEvent = res.data.find(event => parseInt(event.class_room) === parseInt(this.state.data.id));

            axiosInstance.put(`/schedules/${needEvent.id}/update/`, {
              ...needEvent,
              status: 'completed'
            })
              .then(() => {
                this.chatSocket.send(JSON.stringify({
                  'message': {
                    type: 'end_class_room',
                    user: {
                      type: this.props.user.type,
                      id: this.props.user.id
                    }
                  }
                }));

                this.setState({redirect: true});
              })
              .catch(error => console.error(error))
          })
          .catch(error => console.error(error))
      })
      .catch(error => console.error(error));
    console.log(this.props)
    console.log(this.state)
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
                <LessonNav>
                  <button 
                    type="button" 
                    className={'dictionary'} 
                    onClick={this.showDictionaryModal}
                  >
                    <img src={IconDictionary} alt="icon"/>
                    Словарь
                  </button>
                  <MainButton
                    text={'Закончить задание'}
                    type={'button'}
                    width={197}
                    func={this.endClassRoom}
                  />
                </LessonNav>
              </LessonHeader>


              {this.state.dictionaryModal && (
                <DictionarySearchModal close={this.showDictionaryModal}/>
              )}

              <LessonWrap>
                <div className="container">
                  <LessonBody>
                    
                    <LeftSideBar data={data.lesson} activeSection={this.state.activeSection} classRoom={this.props.id}/>

                    <MainContent
                      data={data}
                      user={this.props.user}
                      activeSection={this.state.activeSection}
                      tasks={data.lesson}
                      wsUpdate={this.wsUpdateTask}
                      nextSection={this.changeActiveSection}
                      setActiveWord={this.setActiveWord}
                      setActiveEmptyItem={this.setActiveEmptyItem}
                    />

                    <ChatSection socket={this.chatSocket} data={this.state.chatData} send={this.chatSendMessage}/>

                  </LessonBody>
                </div>
              </LessonWrap>
            </>
          )
        }

        {
          this.state.waitStudentModal && (
            <WaitStudentModal teacher={data.teacher}/>
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
  setCRactiveWord,
  setCRactiveEmpty
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleLesson);