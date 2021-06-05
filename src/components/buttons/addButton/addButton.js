import React from "react";

import * as Style from './styled'

const AddButton = ({text, func = () => null, status}) => {
  return (
    <Style.Wrapper onClick={func} status={status}>
      <div className="button"/>
      <p className="text">{text}</p>
    </Style.Wrapper>
  )
}

export default AddButton;