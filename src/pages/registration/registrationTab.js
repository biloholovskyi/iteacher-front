import React, {useState} from 'react';
import axios from "axios";
import {connect} from "react-redux";

import {loginUser} from "../../actions";

import {SignInForm} from "./styled";

import ServerSettings from "../../service/serverSettings";
import axiosInstance from "../../service/iTeacherApi";

import MainInput from "../../components/inputs/mainInput/mainInput";
import PhotoBlock from "../../components/photoBlock/photoBlock";


const RgisterTab = ({loginUser}) => {

  const [validation, setValidation] = useState(false)
  // стейт для добавления к кнопке disabled
  const [disabled, setDisabled] = useState(true)

  // регистрация нового пользователя
  const registrationNewUser = async (e) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.repassword.value) {
      setValidation(true);
      return;
    }

    try {
      const email = e.target.name.value.toLowerCase();

      const data = new FormData();
      data.set('username', email) 
      data.set('email', email) 
      data.set('password', e.target.password.value) 
      data.set('type', 'teacher') 
      
      if (e.target.photo.files[0])
        data.set('photo',  e.target.photo.files[0]);

      const createResponse = await axiosInstance.post('/users/create/', data);
      debugger;
      const tokenResponse = await axiosInstance.post("/token/", {
        username: data.get('username'),
        password: data.get('password')
      });
      axiosInstance.defaults.headers["Authorization"] =
        "JWT " + tokenResponse.data.access;
      localStorage.setItem("access_token", tokenResponse.data.access);
      localStorage.setItem("refresh_token", tokenResponse.data.refresh);
      
      const userData = createResponse.data;
      loginUser(userData);
    } catch (error) {
      setValidation(true);
    }





    // axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    // axios.defaults.xsrfCookieName = 'csrftoken';

    // const server = new ServerSettings();
    // const email = e.target.name.value.toLowerCase();
    // // проверяем не занят ли емейл
    // await axios.get(`${server.getApi()}api/users/${email}/`)
    //   .then(res => {
    //     // емейл занят
    //     //alert('Email уже занят')
    //     setValidation(true)
    //   })
    //   .catch(error => {
    //     // емейл свободен
    //     // проверяем пароли
    //     if(e.target.password.value === e.target.repassword.value) {
    //       // если совпадает
    //       // данные для сервера
    //       const data = new FormData();
    //       data.set('email', e.target.name.value.toLowerCase());
    //       data.set('password', e.target.password.value);
    //       data.set('type', 'teacher')

    //       // проверяем передана фото или нет
    //       if(e.target.photo.files[0]) {
    //         data.set('photo', e.target.photo.files[0]);
    //       }

    //       axios.post(`${server.getApi()}api/users/`, data)
    //         .then(res => {
    //           // логиним пользователя
    //           localStorage.setItem('iteacher_login', JSON.stringify({email: res.data.email}));
    //           loginUser(res.data);
    //         }).catch(error => console.error(error));
    //     } else {
    //       // если не совпадает
    //       //alert('Пароли не совпадают')
    //       setValidation(true)
    //     }
    //   })
  }

  //одержываем даные из инпута и проверяем если инпут пуст то добавляем к кнопке disabled
  const updateData = (value) => {
    setDisabled(value)
  }

  return (
    <>
      <SignInForm onSubmit={(e) => registrationNewUser(e)} disabledBtn={disabled}>
        {/*email*/}
        <MainInput required={true} type={'text'} label={'Email'} name={'name'} validation={validation} errorText={'Email уже занят'} updateData={updateData}/>
        {/*password*/}
        <MainInput required={true} type={'password'} label={'Пароль'} name={'password'} updateData={updateData}/>
        {/*re password*/}
        <MainInput required={true} type={'password'} label={'Повторите пароль'} name={'repassword'} validation={validation} errorText={'Пароли не совпадают'} updateData={updateData}/>
        <PhotoBlock/>
        <div className="desc">Нажимая кнопку «Сохранить и продолжить»Вы соглашаетесь на обработку предоставленных вами персональных данных.</div>
        <input
          className={'submit'}
          type='submit'
          value={'Сохранить и продолжить'}
          disabled={disabled.length <= 0 ? true : disabled === true ? true : false}
        />
      </SignInForm>
    </>
  )
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RgisterTab);