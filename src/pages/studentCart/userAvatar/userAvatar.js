import React from "react";

import * as Style from './styled'

import ava from '../../../assets/media/icon/avatar.svg'

const UserAvatar = () => {
  return (
    <Style.Wrapper>
      <img src={ava} alt="icon"/>
      <div className="info">
        <div className="name">Danil</div>
        <div className="subs">Some text</div>
      </div>
      <Style.Dots/>
    </Style.Wrapper>
  )
}

export default UserAvatar;