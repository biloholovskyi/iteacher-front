import React from "react";
import axios from "axios";

import MainInfo from "./mainInfo/mainInfo";
import Contacts from "./contacts/contacts";
import MainButton from "../../../components/buttons/mainButton/mainButton";

import * as Style from './styled'

import ServerSettings from "../../../service/serverSettings";
const server = new ServerSettings();

const StudentModal = ({data, close}) => {
  // обновляем данные студента
  const updateData = async (e) => {
    e.preventDefault();

    const dataUser = {
      ...data,
      city: e.target.city.value || null,
      phone: e.target.phone.value || null,
      email: e.target.email.value || null
    }

    delete dataUser.photo

    await axios.put(`${server.getApi()}api/users/${data.id}/update/`, dataUser)
      .then(() => {
        close();
      })
      .catch(error => console.error(error));
  }

  return (
    <Style.Wrapper>
      <Style.Body onSubmit={(e) => updateData(e)}>
        <Style.Close onClick={close}/>

        <MainInfo data={data}/>

        <Contacts/>

        <MainButton text={'Сохранить'} type={'submit'}/>
      </Style.Body>
    </Style.Wrapper>
  )
}

export default StudentModal;