import React from "react";

//styled
import {ChangeSuccessBody, ChangeModalWrap, ChangeSuccessBtn} from './changePassStyled';

const SuccessChangePassModal = ({close}) =>{
  return(
    <ChangeModalWrap>
      <ChangeSuccessBody>
        <h2>Подтвердите смену Email</h2>
        <p>Вам было выслано письмо с подтверждением на почту
          stasmihaylov228@gmail.com.</p>
        <ChangeSuccessBtn
          onClick={close}
          className={'changePass'}>Понятно</ChangeSuccessBtn>
      </ChangeSuccessBody>
    </ChangeModalWrap>
  )
}

export default SuccessChangePassModal;