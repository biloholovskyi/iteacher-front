const initialState = {
  // данные пользователя
  user: {
    login: '',
    password: '',
    photo: '',
    status: null
  },
  // все пользователи, возможно стоит в дальнейшем это удалить
  users: [],
  // все курсы
  courses: [],
  // все шаблоны
  templates: [],
  // все уроки, теперь это нам не нужно
  lessons: [],
  // все студенты, возможено нужно переделать так как мы сделали с уроками
  students: [],
  // все заметки, вомзожно так же стоит переделать апишку
  notations: [],
  // все задания - нужно удалять
  tasks: [],
  // ### настройки админки ###
  adminPanelSettings: {
    // настройки шапки
    header: {
      // тип либо обычный либо редактируемый
      type: 'default',
      // данные только для редактуруемой шапки
      // названия которое мы редактируем
      name: ''
    }
  },

  // на всякий пока сделаю отдельным объектом настройки для разделов / уроков
  // в selectTemplate будут все данные по шаблону и уже их можно использовать где угодно
  selectTemplate: {},
  // выбранная секция
  selectSection: {},
  // ### настройки админки ###

  // для активации новго курса
  activateCourse: {},

  // class rooms
  CRactiveWord: {
    task: 0,
    word: ''
  },

  CRactiveEmpty: {
    task: 0,
    empty: 0
  },

  // alert message
  topAlert: false,

  // создания курса со страницы студента
  studentToCourse: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // получаем все пользователей, при разработке системы польтзователей нужно от этого избавиться
    case 'GET_ALL_USERS':
      return {
        ...state,
        users: action.users
      }

    // получаем все курсы
    case 'GET_ALL_COURSES':
      return {
        ...state,
        courses: action.courses
      }

    // получаем все шаблоны
    case 'GET_ALL_TEMPLATES':
      return {
        ...state,
        templates: action.templates
      }

    // получаем все уроки, нам уже это не нужно
    case 'GET_ALL_LESSONS':
      return {
        ...state,
        lessons: action.lessons
      }

    // получаем всех студентов, тут скорее всего нужно будет переделать
    case 'GET_ALL_STUDENTS':
      return {
        ...state,
        students: action.students
      }

    // получаем все нотатки, скорее всего нужно будет удалить, точнее переделать
    case 'GET_ALL_NOTATIONS':
      return {
        ...state,
        notations: action.notations
      }

    // получаем все задания, нужно удалить
    case 'GET_ALL_TASKS':
      return {
        ...state,
        tasks: action.tasks
      }

    // передаем данные пользователя
    case 'LOGIN_USER':
      const newUser = {
        ...action.user,
        status: true
      }

      return {
        ...state,
        user: newUser
      }

    // передача даных в шапку в админке
    case 'SET_TYPE_ADMIN_HEAD':
      const {typeHead, name} = action;
      return {
        ...state,
        adminPanelSettings: {
          header: {
            type: typeHead,
            name
          }
        }
      }

    // записываем данные выбраного шаблона
    case 'SET_TEMPLATE':
      // console.log(state.selectTemplate);
      return {
        ...state,
        selectTemplate: action.template
      }

    // записываем данные активной секции
    case 'SET_ACTIVE_SECTION':
      return {
        ...state,
        selectSection: action.section
      }

    // для активации новго курса
    case 'SET_ACTIVATE_COURSE':
      return {
        ...state,
        activateCourse: action.course
      }

    // для активации новго курса
    case 'CR_SET_ACTIVE_WORD':
      return {
        ...state,
        CRactiveWord: action.word
      }

    case 'CR_SET_ACTIVE_EMPTY':
      return {
        ...state,
        CRactiveEmpty: action.empty
      }

    // показываем сообщение в top alert
    case 'SHOW_TOP_ALERT':
      return {
        ...state,
        topAlert: action.text
      }

    case 'STUDENT_TO_COURSE':
      return {
        ...state,
        studentToCourse: action.student
      }

    default:
      return state;
  }
}

export default reducer;