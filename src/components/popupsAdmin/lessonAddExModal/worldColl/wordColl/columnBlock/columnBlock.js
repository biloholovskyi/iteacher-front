import React from "react";

import MainInput from "../../../../../inputs/mainInput/mainInput";

import * as Style from './style'

const ColumnBlock = ({col}) => {
  // список слов
  let wordsString = '';
  // проверяем новая колонка или уже с данными
  col.words && col.words.forEach(word => {
    if(wordsString) {
      wordsString = wordsString + ' ' + word
    } else {
      wordsString = word
    }
  })

  return (
    <Style.Wrapper>
      <Style.Title>Колонка</Style.Title>
      <MainInput
        type={'text'}
        label={'Название колонки'}
        name={'name_column'}
        required={true}
        defaultValue={col.name}
      />
      <MainInput
        type={'text'}
        label={'Слова для этой колонки'}
        name={'words_column'}
        required={true}
        defaultValue={wordsString}
      />
    </Style.Wrapper>
  )
}

export default ColumnBlock;