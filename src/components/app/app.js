import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router";
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

import Header from "../header/header";

import ServerSettings from "../../service/serverSettings";
// данные для роутинга
import {routingData} from "./data";

const App = ({loginUser, user}) => {
  // проверяем загруженны ли данные пользователя
  const [loading, setLoading] = useState(true)
  // нужно для того что бы понять мы на странице админки или нет
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // проверяем есть ли токен
    checkToken().then(() => {
      console.log('token')
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

  // определяем на странице админки мы или нет
  useEffect(() => {
    if (window.location.pathname.split('/')[1] === 'admin-panel' && user.type === 'admin') {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }, [loading, user]);

  return (
    <>
      {/*шапка*/}
      {isAdmin
        // ? <AdminHeader type="coursesList"/>
        ? null
        : <Header user={user}/>
      }

      <Switch>
        {
          routingData.map(rout => {
            return (
              <Route exact path={rout.path} kay={rout.path}>
                {
                  !loading && user.type ? rout.components[user.type] : rout.redirect
                }
              </Route>
            )
          })
        }
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