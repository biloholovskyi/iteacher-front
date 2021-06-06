import {Redirect} from "react-router";

import Login from "../pages/login/login";
import Registration from "../pages/registration/registration";
import Courses from "../pages/courses/courses";
import CourseTemplate from "../pages/courseTemplate/courseTemplate";
import NewCourse from "../pages/newCourse/newCourse";
import SingleCourse from "../pages/singleCourse/singleCourse";
import Resources from "../pages/resourses/resourses";
import Article from "../pages/article/article";
import Students from "../pages/students/students";
import Schedules from "../pages/shedules/shedules";
import CalendarSchedule from "../pages/calendarSchedule/calendarSchedule";

const routingData = [
  {
    path: '/',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <Redirect to={'/courses'}/>,
      admin: <Redirect to={'/admin-panel'}/>,
      student: <Redirect to={'/schedules'}/>,
    }
  },
  {
    path: '/login',
    redirect: <Login/>,
    components: {
      teacher: <Redirect to={'/courses'}/>,
      admin: <Redirect to={'/admin-panel'}/>,
      student: <Redirect to={'/schedules'}/>,
    }
  },
  {
    path: '/registration',
    redirect: <Registration/>,
    components: {
      teacher: <Redirect to={'/courses'}/>,
      admin: <Redirect to={'/admin-panel'}/>,
      student: <Redirect to={'/schedules'}/>,
    }
  },
  {
    path: '/courses',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <Courses/>,
      admin: <Redirect to={'/admin-panel'}/>,
      student: <Redirect to={'/schedules'}/>,
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
      admin: <Redirect to={'/admin-panel'}/>,
      student: <Redirect to={'/schedules'}/>,
    }
  },
  {
    path: '/new-course',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <NewCourse/>,
      admin: <Redirect to={'/admin-panel'}/>,
      student: <Redirect to={'/schedules'}/>,
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
      admin: <Redirect to={'/admin-panel'}/>,
      student: <Redirect to={'/schedules'}/>,
    }
  },
  {
    path: '/resources',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <Resources/>,
      admin: <Redirect to={'/admin-panel'}/>,
      student: <Redirect to={'/schedules'}/>,
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
      admin: <Redirect to={'/admin-panel'}/>,
      student: <Redirect to={'/schedules'}/>
    }
  },
  {
    path: '/schedule-old',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <Schedules/>,
      admin: <Redirect to={'/admin-panel'}/>,
      student: <Redirect to={'/schedules'}/>
    }
  },
  {
    path: '/schedule',
    redirect: <Redirect to={'/login'}/>,
    components: {
      teacher: <CalendarSchedule/>,
      admin: <Redirect to={'/admin-panel'}/>,
      student: <Schedules/>
    }
  },
]

export {routingData}