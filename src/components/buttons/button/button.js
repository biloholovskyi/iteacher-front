import React from 'react';

import {
  ButtonMain,
  ButtonAdd,
  ButtonAddRound,
  ButtonAddPopup,
  ButtonCover,
  ButtonCancel,
  ButtonEnter
} from './buttonStyled';

const Button = ({ text, func, type = ""}) => {

  //TODO это разумеется не финальный вариант, надо отрефакторить styled

  switch (type) {

    case 'add': return <ButtonAdd onClick = { func }> { text } </ButtonAdd>

    case 'add-popup': return <ButtonAddPopup onClick = { func }> { text } </ButtonAddPopup>

    case 'add-round': return <ButtonAddRound onClick = { func }/>

    case 'cover': return <ButtonCover onClick = { func }> { text } </ButtonCover>

    case 'canсel': return <ButtonCancel onClick = { func }> { text } </ButtonCancel>

    case 'enter': return <ButtonEnter onClick = { func }> { text } </ButtonEnter>

    case 'create-text-task': return <ButtonMain onClick = { func }> { text } </ButtonMain>

    default: return <ButtonMain onClick = { func }> { text } </ButtonMain>

  }

};

export default Button;
