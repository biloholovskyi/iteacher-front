import React, {useState, useEffect} from "react";
import {Redirect, Route, Switch} from "react-router";
import {connect} from "react-redux";
import axios from "axios";

import {
  getAllUsers,
  loginUser,
  getAllCourses,
  getAllTemplates,
  getAllLessons,
  getAllStudents,
  getAllNotations,
  getAllTasks
} from "../../actions";

import Login from "../pages/login/login";
import Registration from "../pages/registration/registration";
import Courses from "../pages/courses/courses";

import ServerSettings from "../../service/serverSettings";

const App = ({loginUser, user}) => {
  // проверяем загруженны ли данные пользователя
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // проверяем есть ли токен
    checkToken().then(() => {
      console.log(user)
    })
  }, [loading])

  // проверяем наличие токена пользователя
  const checkToken = async () => {
    const token = localStorage.getItem('iteacher_login');

    if (token) {
      // если токен есть надо проверить правильный ли он
      const statusToken = JSON.parse(token).email;
      // если токен не верный
      if (!statusToken) {
        // удаляем не верный токен
        localStorage.removeItem('iteacher_login');
        setLoading(false)
        return
      }
      // если токен верен, нужно получить данные с сервера
      axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
      axios.defaults.xsrfCookieName = 'csrftoken';

      const server = new ServerSettings();

      await axios.get(`${server.getApi()}api/users/${statusToken}/`)
        .then(res => {
          loginUser(res.data);
          setLoading(false)
        }).catch(error => {
          console.error(error)
          localStorage.removeItem('iteacher_login');
          setLoading(false)
        });
    } else {
      setLoading(false)
    }
  }

  return (
    <>
      <Switch>
        <Route path='/' exact>
          {
            loading
              ? null
              : <Redirect to='/login'/>
          }
        </Route>

        <Route path='/login' exact>
          {
            !loading && <Login/>
          }
        </Route>

        <Route path='/registration' exact>
          {
            !loading && <Registration/>
          }
        </Route>

        <Route path='/courses' exact>
          {
            !loading && <Courses/>
          }
        </Route>
      </Switch>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    topAlert: state.topAlert
  }
};

const mapDispatchToProps = {
  getAllUsers,
  getAllCourses,
  getAllTemplates,
  getAllLessons,
  getAllStudents,
  getAllNotations,
  getAllTasks,
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);