import React from 'react';
import {NavLink} from "react-router-dom";

import RegisterTab from "./registrationTab";

import {WithOutHeaderContainer, SignInModal, SignInModalWrapp, TabsBody} from './styled';

import logo from '../../assets/media/icon/logo.svg';


const Registration = () => {
  return (
    <WithOutHeaderContainer>
      <div className={'container'}>
        <SignInModalWrapp>
          <SignInModal>
            <img src={logo} alt="image" className={'logo'}/>
            <h4>Регистрация</h4>
            <TabsBody>
              <RegisterTab/>
            </TabsBody>
          </SignInModal>
          <div className={'registration_block'}>Уже есть учетная запись? <NavLink to='/login'> Войти</NavLink></div>
        </SignInModalWrapp>
      </div>
    </WithOutHeaderContainer>
  )
}

export default Registration;

