import React from "react";

import MainInfo from "./mainInfo/mainInfo";
import Contacts from "./contacts/contacts";

import * as Style from './styled'

const StudentModal = ({data, close}) => {
  return (
    <Style.Wrapper>
      <Style.Body>
        <Style.Close onClick={close}/>
        <MainInfo data={data}/>
        <Contacts/>
      </Style.Body>
    </Style.Wrapper>
  )
}

export default StudentModal;