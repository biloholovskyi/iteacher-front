import React from "react";

import MainInfo from "./mainInfo/mainInfo";

import * as Style from './styled'

const StudentModal = ({data}) => {
  return (
    <Style.Wrapper>
      <Style.Body>
        <MainInfo data={data}/>
      </Style.Body>
    </Style.Wrapper>
  )
}

export default StudentModal;