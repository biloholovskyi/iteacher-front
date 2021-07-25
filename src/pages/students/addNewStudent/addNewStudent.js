import React from 'react';

import MainInput from "../../../components/inputs/mainInput/mainInput";
import MainButton from "../../../components/buttons/mainButton/mainButton";

import * as Style from './styled'

import closed from '../../../assets/media/icon/close.svg';

const AddNewStudent = ({close, add}) => {
  return (
    <Style.Wrapper>
      <Style.FormModal onSubmit={(e) => add(e)}>
        <img src={closed} alt="icon" className='close'  onClick={close}/>
        <h2>Добавить ученика</h2>
        <MainInput type={'email'} name={'email'} label={'Email'} grey/>
        <MainButton text={'Добавить'} type={'submit'}/>
      </Style.FormModal>
    </Style.Wrapper>
  )
}


export default AddNewStudent;