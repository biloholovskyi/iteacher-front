import React from "react";

import MainInfo from "./mainInfo/mainInfo";
import Contacts from "./contacts/contacts";
import MainButton from "../../../components/buttons/mainButton/mainButton";

import * as Style from './styled'

import axiosInstance from "../../../service/iTeacherApi";

const StudentModal = ({data, close, update}) => {
  // обновляем данные студента
  const updateData = async (e) => {
    e.preventDefault();

    // генерируем список соц сетей
    const socialTypes = e.target.social_type;
    const socialLinks = e.target.social_link;

    let count = 0;
    const socials = [];

    try {
      socialTypes.forEach(social => {
        socials.push({type: social.value, link: socialLinks[count].value})
        count++;
      })
    } catch (e) {
      if(socialTypes) {
        socials.push({type: socialTypes.value, link: socialLinks.value});
      }
    }



    const dataUser = {
      ...data,
      city: e.target.city.value || null,
      phone: e.target.phone.value || null,
      email: e.target.email.value || null,
      socials: socials.length > 0 ? JSON.stringify(socials) : null
    }

    delete dataUser.photo

    await axiosInstance.put(`/users/${data.id}/update/`, dataUser)
      .then(() => {
        update();
        close();
      })
      .catch(error => console.error(error));
  }

  return (
    <Style.Wrapper>
      <Style.Body onSubmit={(e) => updateData(e)}>
        <Style.Close onClick={close}/>

        <MainInfo data={data}/>

        <Contacts data={data}/>

        <MainButton text={'Сохранить'} type={'submit'}/>
      </Style.Body>
    </Style.Wrapper>
  )
}

export default StudentModal;