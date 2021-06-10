import React from "react";

import MainInput from "../../../../components/inputs/mainInput/mainInput";
import MainDropList from "../../../../components/inputs/mainDropList/mainDropList";

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
        <div className="subs">Some text</div>
      </Style.AvatarBlock>

      <MainDropList
        options={[
          {value: 'Ивано-Франковск', name: 'Ивано-Франковск'},
          {value: 'Москва', name: 'Москва'},
          {value: 'Казань', name: 'Казань'}
        ]}
        width={612}
      />

      <MainInput
        type={'text'}
        label={'Телефон'}
      />

      <MainInput
        type={'email'}
        label={'Почта'}
      />

      <Style.Line/>
    </Style.Wrapper>
  )
}

export default MainInfo;