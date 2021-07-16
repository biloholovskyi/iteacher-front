import React from "react";

import MainInput from "../../../../components/inputs/mainInput/mainInput";
import MainButton from "../../../../components/buttons/mainButton/mainButton";

import * as Style from './styled'

import ava from "../../../../assets/media/icon/avatar.svg";

import ServerSettings from "../../../../service/serverSettings";

const server = new ServerSettings();

const MainInfo = ({data}) => {
  return (
    <Style.Wrapper>
      <Style.AvatarBlock bg={data.photo ? `${server.getApi()}${data.photo.slice(1)}` : ava}>
        <div className={'photo'}/>
        <div className="name">{data.name || data.email.split('@')[0]}</div>
        {/*<div className="subs">Some text</div>*/}
      </Style.AvatarBlock>

      <MainInput
        type={'text'}
        label={'Город'}
        grey
        name={'city'}
        defaultValue={data.city}
      />

      <MainInput
        type={'text'}
        label={'Телефон'}
        grey
        name={'phone'}
        defaultValue={data.phone}
      />

      <MainInput
        type={'email'}
        label={'Почта'}
        defaultValue={data.email}
        grey
        name={'email'}
      />

      <Style.Line/>
    </Style.Wrapper>
  )
}

export default MainInfo;