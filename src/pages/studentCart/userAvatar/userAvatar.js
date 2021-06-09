import React from "react";

import * as Style from './styled'

import ava from '../../../assets/media/icon/avatar.svg'

import ServerSettings from "../../../service/serverSettings";

const server = new ServerSettings();

const UserAvatar = ({data}) => {
  return (
    <Style.Wrapper>
      <img src={data.photo ? `${server.getApi()}${data.photo.slice(1)}` : ava} alt="icon"/>
      <div className="info">
        <div className="name">{data.name || data.email.split('@')[0]}</div>
        <div className="subs">Some text</div>
      </div>
      <Style.Dots/>
    </Style.Wrapper>
  )
}

export default UserAvatar;