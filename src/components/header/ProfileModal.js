import React from "react";

import PricingBlock from "./pricingBlock/pricingBlock";

import ava from "../../assets/media/icon/avatar.svg";
import profile from '../../assets/media/icon/profile.svg';
import lock from '../../assets/media/icon/lock.svg';
import unlogin from '../../assets/media/icon/unlogin.svg';

import {PersonalData, Photo, ProfileModalWrap, Name, ChangePassword, Exit, Email} from './headerStyle';

import ServerSettings from "../../service/serverSettings";
const server = new ServerSettings();

const ProfileModal = ({logOut, user, changePass, personalDataModal}) => {
  return(
    <ProfileModalWrap className={'infoModal'}>
      <Photo className="ava" src={user.photo ? `${server.getApi()}${user.photo.slice(1)}` : ava} alt="img"/>
      <Name>{user.name}</Name>
      <Email>{user.email}</Email>

      <PricingBlock/>

      <div className="btnSection">
        <PersonalData
          onClick={personalDataModal}
        ><img src={profile} alt="icon"/>Личные данные</PersonalData>
        <ChangePassword
          onClick={changePass}
        ><img src={lock} alt="icon"/>Сменить пароль</ChangePassword>
        <Exit
          onClick={logOut}
        ><img src={unlogin} alt="icon"/>Выйти</Exit>
      </div>
    </ProfileModalWrap>
  )
}

export default ProfileModal;