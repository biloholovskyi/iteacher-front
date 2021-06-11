import {Redirect} from "react-router";

import Login from "../../pages/login/login";
import Registration from "../../pages/registration/registration";
import Courses from "../../pages/courses/courses";
import CourseTemplate from "../../pages/courseTemplate/courseTemplate";
import NewCourse from "../../pages/newCourse/newCourse";
import SingleCourse from "../../pages/singleCourse/singleCourse";
import Resources from "../../pages/resourses/resourses";
import Article from "../../pages/article/article";
import Students from "../../pages/students/students";
import Schedules from "../../pages/shedules/shedules";
import CalendarSchedule from "../../pages/calendarSchedule/calendarSchedule";
import SingleLesson from "../../pages/singleLesson/singleLesson";
import Dictionary from "../../pages/dictionary/dictionary";
import HomeWork from "../../pages/homeWork/homeWork";
import AdminCoursesList from "../../pages/adminCoursesList/adminCoursesList";
import AdminResources from "../../pages/resourses/adminResources/adminResources";
import Users from "../../pages/users/users";
import AdminCourse from "../../pages/adminCourse/adminCourse";
import AdminLesson from "../../pages/adminLesson/adminLesson";
import StudentCart from "../../pages/studentCart/studentCart";
import AddCourses from "../../pages/addCourses/addCourses";

const mainPagesTypeUser = {
  teacher: {redirect: <Redirect to={'/courses'}/>, component: <Courses/>},
  student: {redirect: <Redirect to={'/schedule'}/>, component: <Schedules/>},
  admin: {redirect: <Redirect to={'/admin-panel/templates'}/>, component: <AdminCoursesList/>}
}

const routingData = [
  {
    path: '/',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: mainPagesTypeUser.teacher.redirect,
      admin: mainPagesTypeUser.admin.redirect,
      student: mainPagesTypeUser.student.redirect
    }
  },
  {
    path: '/login',
    redirect: <Login/>,
    components: {
      teacher: mainPagesTypeUser.teacher.redirect,
      admin: mainPagesTypeUser.admin.redirect,
      student: mainPagesTypeUser.student.redirect
    }
  },
  {
    path: '/registration',
    redirect: <Registration/>,
    components: {
      teacher: mainPagesTypeUser.teacher.redirect,
      admin: mainPagesTypeUser.admin.redirect,
      student: mainPagesTypeUser.student.redirect
    }
  },
  {
    path: '/courses',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: mainPagesTypeUser.teacher.component,
      admin: mainPagesTypeUser.admin.redirect,
      student: mainPagesTypeUser.student.redirect
    }
  },
  {
    path: '/course/:id',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: ({match}) => {
        const {id} = match.params
        return <CourseTemplate courseId={id}/>
      },
      admin: mainPagesTypeUser.admin.redirect,
      student: mainPagesTypeUser.student.redirect
    }
  },
  {
    path: '/new-course',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <NewCourse/>,
      admin: mainPagesTypeUser.admin.redirect,
      student: mainPagesTypeUser.student.redirect
    }
  },
  {
    path: '/single-course/:id',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: ({match}) => {
        const {id} = match.params
        return <SingleCourse courseId={id}/>
      },
      admin: mainPagesTypeUser.admin.redirect,
      student: mainPagesTypeUser.student.redirect
    }
  },
  {
    path: '/resources',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <Resources/>,
      admin: mainPagesTypeUser.admin.redirect,
      student: <Resources/>
    }
  },
  {
    path: '/article',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <Article/>,
      admin: <Article/>,
      student: <Article/>,
    }
  },
  {
    path: '/students',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <Students/>,
      admin: mainPagesTypeUser.admin.redirect,
      student: mainPagesTypeUser.student.redirect
    }
  },
  {
    path: '/schedule-old',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <Schedules/>,
      admin: mainPagesTypeUser.admin.redirect,
      student: mainPagesTypeUser.student.redirect
    }
  },
  {
    path: '/schedule',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <CalendarSchedule/>,
      admin: mainPagesTypeUser.admin.redirect,
      student: <Schedules/>
    }
  },
  {
    path: '/class-room/:id',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: ({match}) => {
        const {id} = match.params
        return <SingleLesson id={id}/>
      },
      admin: mainPagesTypeUser.admin.redirect,
      student: ({match}) => {
        const {id} = match.params
        return <SingleLesson id={id}/>
      },
    }
  },
  {
    path: '/dictionary',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: mainPagesTypeUser.teacher.redirect,
      admin: mainPagesTypeUser.admin.redirect,
      student: <Dictionary/>
    }
  },
  {
    path: '/homework',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: mainPagesTypeUser.teacher.redirect,
      admin: mainPagesTypeUser.admin.redirect,
      student: <HomeWork/>
    }
  },
  {
    path: '/admin-panel/templates',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: mainPagesTypeUser.teacher.redirect,
      admin: mainPagesTypeUser.admin.component,
      student: mainPagesTypeUser.student.redirect
    }
  },
  {
    path: '/admin-panel/resources',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: mainPagesTypeUser.teacher.redirect,
      admin: <AdminResources/>,
      student: mainPagesTypeUser.student.redirect
    }
  },
  {
    path: '/admin-panel/users',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: mainPagesTypeUser.teacher.redirect,
      admin: <Users/>,
      student: mainPagesTypeUser.student.redirect
    }
  },
  {
    path: '/admin-panel/templates/:id',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: mainPagesTypeUser.teacher.redirect,
      admin: ({match}) => {
        const {id} = match.params
        return <AdminCourse templateID={id}/>
      },
      student: mainPagesTypeUser.student.redirect,
    }
  },
  {
    path: '/admin-panel/templates/:id/lessons/:idLesson',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: mainPagesTypeUser.teacher.redirect,
      admin: ({match}) => {
        const {id, idLesson} = match.params
        return <AdminLesson lessonID={idLesson} templateID={id}/>
      },
      student: mainPagesTypeUser.student.redirect,
    }
  },
  {
    path: '/students/:id',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: ({match}) => {
        const {id} = match.params
        return <StudentCart id={id}/>
      },
      admin: mainPagesTypeUser.admin.redirect,
      student: mainPagesTypeUser.student.redirect,
    }
  },
  {
    path: '/courses-library',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <AddCourses/>,
      admin: mainPagesTypeUser.admin.redirect,
      student: mainPagesTypeUser.student.redirect,
    }
  },
]

export {routingData}