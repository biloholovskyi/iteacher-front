import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { loginUser } from "../../actions";

import LoginTabs from "./loginTabs/loginTabs";

import * as Style from "./styled";

import logo from "../../assets/media/icon/logo.svg";

import axiosInstance from "../../service/iTeacherApi";

const Login = ({ loginUser }) => {
  const [validation, setValidation] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      const tokenResponse = await axiosInstance.post("/token/", {
        username: e.target.login.value.toLowerCase(),
        password: e.target.password.value,
      });

      axiosInstance.defaults.headers["Authorization"] =
        "JWT " + tokenResponse.data.access;
      localStorage.setItem("access_token", tokenResponse.data.access);
      localStorage.setItem("refresh_token", tokenResponse.data.refresh);

      const userResponse = await axiosInstance.get("/users/me/");
      const userData = userResponse.data;

      if (userData.type === "student") {
        const coursesResponse = await axiosInstance.get(
          `/courses/student/${userData.id}/`
        );
        userData.courses = coursesResponse.data;
      }

      loginUser(userData);

      return tokenResponse;
    } catch (err) {
      setValidation(true);
    }
  };

  return (
    <Style.WithOutHeaderContainer>
      <div className={"container"}>
        <Style.SignInModalWrapp>
          <Style.SignInModal>
            <img src={logo} alt="" className={"logo"} />
            <h4>Добро пожаловать 👋</h4>
            <Style.TabsBody>
              <LoginTabs validation={validation} onLogin={onLogin} />
            </Style.TabsBody>
          </Style.SignInModal>
          <div className={"registration_block"}>
            Еще не зарегистрированы?{" "}
            <NavLink to="/registration">Зарегистрироваться</NavLink>
          </div>
        </Style.SignInModalWrapp>
      </div>
    </Style.WithOutHeaderContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
