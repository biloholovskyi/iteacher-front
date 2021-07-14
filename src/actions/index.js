// получить всех пользвателей - скорее всего нужно удалить
const getAllUsers = (users) => {
  return {
    type: 'GET_ALL_USERS',
    users
  }
}

// получить все курсы
const getAllCourses = (courses) => {
  return {
    type: 'GET_ALL_COURSES',
    courses
  }
}

// получить все шаблоны
const getAllTemplates = (templates) => {
  return {
    type: 'GET_ALL_TEMPLATES',
    templates
  }
}

// получить все уроки - нужно удалить
const getAllLessons = (lessons) => {
  return {
    type: 'GET_ALL_LESSONS',
    lessons
  }
}

// получить всех студентов - скорее всего нужно будет переделать
const getAllStudents = (students) => {
  return {
    type: 'GET_ALL_STUDENTS',
    students
  }
}

// получить все заметки - скорее всего нужно будет переделать
const getAllNotations = (notations) => {
  return {
    type: 'GET_ALL_NOTATIONS',
    notations
  }
}

// получить все задания - нужно будет удалить
const getAllTasks = (tasks) => {
  return {
    type: 'GET_ALL_TASKS',
    tasks
  }
}

// записать данные пользователя - нужно будет улучшить и переделать на сесси или куки
const loginUser = (user) => {
  return {
    type: 'LOGIN_USER',
    user
  }
}

// получить список всех курсов - возможно нужно будет тоже переделать когда будет система пользователей
const getCoursesList = (data) => {
  return {
    type: 'ADMIN_GET_COURSES',
    data
  }
}

// обновление шапки в админке
const setTypeAdminHead = (typeHead, name = '') => {
  return {
    type: 'SET_TYPE_ADMIN_HEAD',
    typeHead,
    name
  }
}

// записываем данные открытого шаблона в админке
const setTemplate = (template) => {
  return {
    type: 'SET_TEMPLATE',
    template
  }
}

// записываем данные активной секции
const setActiveSection = (section) => {
  return {
    type: 'SET_ACTIVE_SECTION',
    section
  }
}

// для активации новго курса
const setActivateCourse = (course) => {
  return {
    type: 'SET_ACTIVATE_COURSE',
    course
  }
}

const setCRactiveWord = (word) => {
 return {
   type: 'CR_SET_ACTIVE_WORD',
   word
 }
}

const setCRactiveEmpty = (empty) => {
  return {
    type: 'CR_SET_ACTIVE_EMPTY',
    empty
  }
}

// передаем текст в top alert
const setTopAlertText = (text) => {
  return {type: 'SHOW_TOP_ALERT', text}
}

// задаем студента для создания курса с ним
const setStudentToCourse = (student) => {
  return {type: 'STUDENT_TO_COURSE', student}
}

export {
  getAllUsers,
  getAllCourses,
  getAllTemplates,
  getAllLessons,
  getAllStudents,
  getAllNotations,
  getAllTasks,
  loginUser,
  setTypeAdminHead,
  setTemplate,
  setActiveSection,
  setActivateCourse,
  getCoursesList,
  setTopAlertText,
  setCRactiveWord,
  setCRactiveEmpty,
  setStudentToCourse
}