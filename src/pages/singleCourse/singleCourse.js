import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";

import {loginUser, setActivateCourse, getAllTemplates} from "../../actions";

import ProgramItem from "./programItem/programItem";
import ProgramModal from "../../components/programModal/programModal";

import {
  SingleCoursesWrap,
  ProgramSection,
  Banner,
  InfoBlock,
  WithOutHeaderContainer,
  MobileBlock
} from './styled';

import arrow from '../../assets/media/icon/arrow-left.svg';
import close from '../../assets/media/icon/close.svg';

import ServerSettings from "../../service/serverSettings";

class SingleCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastProgram: true,
      showMore: false,
      title: 'Courses Name',
      programModal: false,
      template: {
        name: ''
      },
      program: [],
      sections: [],
      taskModalTitle: '',
      redirect: false,
      creating: false
    }
    document.body.addEventListener('click', (e) => this.closeBody(e));
    this.serverSettings = new ServerSettings();
  }

  componentDidMount() {
    this.getDataTemplate();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(prevProps.templates) !== JSON.stringify(this.props.templates)) {
      this.getDataTemplate();
    }
  }

  // проверяем есть ли шаблоны в редаксе
  // если их нету закачиваем их заного
  checkTemplateInRedux = async () => {
    if (!this.props.templates || this.props.templates.length < 1) {
      // если их нету
      axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
      axios.defaults.xsrfCookieName = 'csrftoken';

      await axios.get(`${this.serverSettings.getApi()}api/template/`)
        .then(res => {
          this.props.getAllTemplates(res.data);
        }).catch(error => console.log(error));
    }
  }

  // получаем данные шаблона
  getDataTemplate = async () => {
    // если нету шаблона
    if (!this.props.templates || this.props.templates.length < 1) {
      await this.checkTemplateInRedux();
    }
    // находим нужный нам шаблон
    const template = this.props.templates.find(t => parseInt(t.id) === parseInt(this.props.courseId));
    // задаем сложность
    let capacityPercent = 0;

    switch (template.complexity) {
      case "hard":
        capacityPercent = 7;
        break;
      case "medium":
        capacityPercent = 4;
        break;
      case "low":
        capacityPercent = 1;
        break;
      default:
        capacityPercent = +template.complexity;
        break;
    }

    this.setState({
      template: {...template, complexity: capacityPercent},
      program: template.lesson
    });
  }

  //  btn read more
  showMore = () => {
    this.setState(() => {
      return {
        ...this.state,
        showMore: true
      }
    })
  }

  //  show program item modal
  ProgramModal = (lesson) => {
    this.setState({
      sections: lesson.sections,
      taskModalTitle: lesson.name,
      programModal: true
    });
  }

  closeModal = () => {
    this.setState(() => {
      return {
        ...this.state,
        programModal: false
      }
    })
  }

  // close modal on click body
  closeBody = (e) => {
    return
    const block = document.querySelector('.modalBody');
    if (block === null) {
      return
    }

    const button = document.querySelector('.itemBody');
    const status = e.target === block || block.contains(e.target);
    const statusModal = e.target === button;
    if (!status && !statusModal) {
      this.setState(() => {
        return {
          ...this.state,
          programModal: false
        }
      });
    }

  }

  // создание нового курса
  createNewCourse = async () => {
    // если идет загрузка нового курса, мы отключаем эту функцию
    if(this.state.creating) {return}
    this.setState({creating: true});

    // создаем новый курс и отправляем данные на сервер
    // получаем массив уроков
    const lessons = JSON.stringify(this.state.template.lesson);
    // создаем объект новго курса
    const newCourse = {
      ...this.state.template,
      teacher: this.props.user.id,
      lessons
    }

    const data = new FormData();
    data.set('teacher', this.props.user.id);
    data.set('lessons', lessons);
    data.set('name', this.state.template.name);
    data.set('level', this.state.template.level);
    data.set('small_desc', this.state.template.small_desc);
    data.set('background', this.state.template.background);
    data.set('background_image', this.state.template.background_image);
    data.set('bg_type', this.state.template.bg_type);

    // удаляем не нужные свойства
    delete newCourse.price;
    delete newCourse.id;

    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();
    await axios.post(`${server.getApi()}api/courses/`, data)
      .then(res => {
        // обновляем данные пользователя в сторе
        const oldDataUser = this.props.user;
        const newUser = {
          ...oldDataUser,
          courses: [...oldDataUser.courses, res.data],
        }

        this.props.loginUser(newUser);
        // передаем в стор данные выбраного шаблона
        this.props.setActivateCourse(this.state.template);
        this.setState({redirect: res.data.id, creating: false});
      })
      .catch(error => console.error(error));
  }

  // рендре в зависимости от статуса
  render() {
    const {showMore, programModal, template, program} = this.state;
    // количество уроков
    let countLesson = 0;
    // список уроков
    const programList = program.map((lesson, key) => {
      countLesson++;
      return <ProgramItem open={this.ProgramModal} key={key} number={key} lesson={lesson}/>
    });
    const countLessonString = `${(countLesson === 0 || countLesson >= 5) ? ' уроков' : countLesson === 1 ? ' урок' : ' урока'}`

    return (
      <WithOutHeaderContainer>
        {this.state.redirect ? <Redirect to={`/course/${this.state.redirect}`}/> : null}
        <Link to='/new-course' className='close'>
          <img src={close} alt="icon"/>
        </Link>
        <div className='container'>
          <SingleCoursesWrap>
            <Link to='/new-course'>
              <img src={arrow} alt="icon"/>
              <h4>Назад</h4>
            </Link>
            <div className='title'>{template.name}</div>
            <div className='desc'>{template.small_desc}</div>
            <Banner bg={template.background} bgType={template.bg_type} bgImage={template.background_image}>
              <div className="firstLeter">{template.name.substr(0, 1)}</div>
              <h2>{template.name}</h2>
            </Banner>
            <MobileBlock>
              <div className='title'>{template.name}</div>
              <div className='desc'>{template.small_desc}</div>
            </MobileBlock>
            <InfoBlock>
              <div className="infoItem">
                <div className="top">
                  <h4>{countLesson}</h4>
                  <p>{countLessonString}</p>
                </div>
                <div className="bottom">Количество<br/>
                  уроков
                </div>
              </div>
              <div className="infoItem">
                <div className="top">
                  <h4>60</h4>
                  <p>минут</p>
                </div>
                <div className="bottom">Длительность
                  урока
                </div>
              </div>
              <div className="infoItem">
                <div className="top">
                  <h4>{template.level}</h4>
                </div>
                <div className="bottom">Уровень</div>
              </div>
              <div className="infoItem">
                <div className="top">
                  <h4>{template.price}  ₽</h4>
                </div>
                <div className="bottom">Цена курса</div>
              </div>
            </InfoBlock>
            <ProgramSection>
              <h3>Программа</h3>
              <div className="programs">
                {programList}
              </div>
              <div className='startBtn' onClick={this.createNewCourse}>Приобрести курс</div>
            </ProgramSection>
          </SingleCoursesWrap>
        </div>
        {
          programModal
            ? <ProgramModal
              title={this.state.taskModalTitle}
              sections={this.state.sections}
              closed={this.closeModal}
            />
            : null
        }
      </WithOutHeaderContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    templates: state.templates,
    user: state.user
  }
};

const mapDispatchToProps = {
  loginUser,
  setActivateCourse,
  getAllTemplates
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCourse);