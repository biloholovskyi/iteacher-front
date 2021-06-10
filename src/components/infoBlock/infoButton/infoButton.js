import React from "react";

import * as Style from './styled'

import icon from './media/buttonicon.svg'

const InfoButton  = ({button}) => {
  return (
    <Style.Wrapper onClick={button.func}>
      {button.text}
      <img src={icon} alt="icon"/>
    </Style.Wrapper>
  )
}

export default InfoButton;