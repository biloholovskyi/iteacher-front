import {Redirect} from "react-router";

import Login from "../pages/login/login";
import Registration from "../pages/registration/registration";
import Courses from "../pages/courses/courses";
import CourseTemplate from "../pages/courseTemplate/courseTemplate";
import NewCourse from "../pages/newCourse/newCourse";

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
    path: '/course-template/:id',
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
  }
]

export {routingData}