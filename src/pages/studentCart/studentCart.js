import React from "react";

import UserAvatar from "./userAvatar/userAvatar";

import * as Style from './styled'

const StudentCart = () => {
  return (
    <Style.Wrapper className={'container'}>
      <div className="left">
        <UserAvatar/>
      </div>
      <div className="right">

      </div>
    </Style.Wrapper>
  )
}

export default StudentCart