import React from "react";

//styled
import {ChangeBody, ChangeModalWrap, Form, Input, ChangePassBtn} from './changePassStyled';
import close from '../../assets/media/icon/close.svg';

const ChangeWrap = ({successChange, closed}) =>{
  return(
    <ChangeModalWrap>
      <ChangeBody>
        <img onClick={closed} src={close} alt="icon" className={'close'}/>
        <h2>Сменить пароль</h2>
        <Form>
          <Input placeholder={'Старый пароль'} type="password"/>
          <Input placeholder={'Новый пароль'} type="password"/>
        </Form>
          <ChangePassBtn
            onClick={successChange}
            className={'changePass'}>Изменить пароль</ChangePassBtn>
      </ChangeBody>
    </ChangeModalWrap>
  )
}

export default ChangeWrap;