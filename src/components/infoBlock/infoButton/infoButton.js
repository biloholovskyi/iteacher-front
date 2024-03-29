import React from "react";

import * as Style from './styled'

import icon from './media/buttonicon.svg'

const InfoButton  = ({button, more}) => {
  return (
    <Style.Wrapper onClick={button.func} more={more}>
      {button.text}
      <img src={icon} alt="icon"/>
    </Style.Wrapper>
  )
}

export default InfoButton;