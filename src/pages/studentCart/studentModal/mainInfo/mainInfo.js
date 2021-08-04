import React from "react";

import MainInput from "../../../../components/inputs/mainInput/mainInput";
import * as Style from './styled'
import ava from "../../../../assets/media/icon/avatar.svg";

const MainInfo = ({data}) => {
  return (
    <Style.Wrapper>
      <Style.AvatarBlock bg={data.photo ? data.photo : ava}>
        <div className={'photo'}/>
        <div className="name">{data.username || data.email.split('@')[0]}</div>
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