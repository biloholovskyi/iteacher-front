import React from "react";

import * as Style from './styled'
import ava from '../../../assets/media/icon/avatar.svg'


const UserAvatar = ({data}) => {
  return (
    <Style.Wrapper>
      <img src={data ? data.photo ? data.photo : ava : null} alt="icon"/>
      <div className="info">
        <div className="name">{data ? data.username || data.email.split('@')[0] : null}</div>
        {/*<div className="subs">Some text</div>*/}
      </div>
      {/*<Style.Dots/>*/}
    </Style.Wrapper>
  )
}

export default UserAvatar;