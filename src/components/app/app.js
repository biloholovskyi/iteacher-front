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
import AdminHeader from "../header/adminHeader/adminHeader";
import TopAlertLine from "../alerts/topAlertLine/topAlertLine";

import ServerSettings from "../../service/serverSettings";
// данные для роутинга
import {routingData} from "./data";

const App = ({loginUser, user, topAlert}) => {
  // проверяем загруженны ли данные пользователя
  const [loading, setLoading] = useState(true)
  // нужно для того что бы понять мы на странице админки или нет
  const [isAdmin, setIsAdmin] = useState(false)
  const [topAlertMessage, setTopAlert] = useState(false)

  useEffect(() => {
    // проверяем есть ли токен
    checkToken().then(() => {
      console.log('token')
    })
  }, [loading])

  // задаем статуст top alert
  useEffect(() => {
    setTopAlert(topAlert)
  }, [topAlert]);


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
          // если это студент получаем его курсы отдельно
          if(res.data.type === 'student') {
            const api = new ServerSettings();
            const studentData = res.data;

            axios.get(`${api.getApi()}api/courses/student/${res.data.id}/`)
              .then(res => {
                studentData.courses = res.data;
              })
              .then(() => {
                loginUser(studentData);
                setLoading(false)
              })
              .catch(error => console.error(error))
          } else {
            loginUser(res.data);
            setLoading(false)
          }
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
      {/*alert message*/}
      {
        topAlertMessage && <TopAlertLine text={topAlertMessage}/>
      }
      {/*alert message*/}

      {/*шапка*/}
      {isAdmin
        ? <AdminHeader type="coursesList"/>
        : <Header user={user}/>
      }

      <Switch>
        {
          !loading &&
          routingData.map(rout => {
            return (
              <Route exact path={rout.path} key={rout.path}>
                {
                  user.type ? rout.components[user.type] : rout.redirect
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