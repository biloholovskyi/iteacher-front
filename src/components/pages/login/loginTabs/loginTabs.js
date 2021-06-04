import React, {useState} from 'react';

import MainInput from "../../../inputs/mainInput/mainInput";

import * as Style from './styled';

import google from '../../../../assets/media/icon/google.svg';
import vk from '../../../../assets/media/icon/vk.svg';
import facebook from '../../../../assets/media/icon/facebook.svg';

const LoginTabs = ({validation, onLogin}) => {
  // стейт для добавления к кнопке disabled
  const [disabled, setDisabled] = useState(true)

  //одержываем даные из инпута и проверяем если инпут пуст то добавляем к кнопке disabled
  const updateData = (value) => {
    setDisabled(value)
  }

  return (
    <>
      <Style.Form onSubmit={(e) => onLogin(e)} disabledBtn={disabled}>
        <MainInput required={false} type={'text'} label={'Email'} name={'login'} validation={validation}
                   updateData={updateData}/>
        <MainInput required={true} type={'password'} label={'Пароль'} name={'password'} validation={validation}
                   errorText={'Неверный логин или пароль'} updateData={updateData}/>
        <div className={'forget'}>
          <p>Забыли пароль?</p>
          <button type={'button'}>Восстановить пароль</button>
        </div>
        <input
          className={'submit'}
          type='submit'
          value={'Войти'}
          disabled={disabled.length <= 0 ? true : disabled === true}
        />
      </Style.Form>
      <Style.SocialBLock>
        <a><img src={google} alt="icon"/></a>
        <a><img src={vk} alt="icon"/></a>
        <a><img src={facebook} alt="icon"/></a>
      </Style.SocialBLock>
    </>
  )
}
export default LoginTabs;
