import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router";
import {connect} from "react-redux";


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

import axiosInstance from "../../service/iTeacherApi";
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
    const token = localStorage.getItem('access_token');
    if (token) {
      axiosInstance.defaults.headers["Authorization"] = "JWT " + token;

      try {
        const userResponse = await axiosInstance.get("/users/");
        const userData = userResponse.data;

        if (userData.type === "student") {
          const coursesResponse = await axiosInstance.get(
            `/courses/student/${userData.id}/`
          );
          userData.courses = coursesResponse.data;
        }

        loginUser(userData);
      }
      catch (error) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        // window.location.assign('/'); 
      }
    }
    setLoading(false);
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