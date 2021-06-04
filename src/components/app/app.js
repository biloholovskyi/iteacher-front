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

const App = () => {
  // проверяем загруженны ли данные пользователя
  const [loading, setLoading] = useState(false)

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