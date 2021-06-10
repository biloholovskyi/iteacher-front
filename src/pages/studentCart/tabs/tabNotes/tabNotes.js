import React from 'react'

import MainInput from "../../../../components/inputs/mainInput/mainInput";
import Note from "./note/note";

import * as Style from './styled'

const TabNotes = () => {
  return (
    <Style.Wrapper>
      <MainInput
        label={'Введите текст заметки'}
        type={'text'}
      />
      <Style.NoteList>
        <Note
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ' +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit ' +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
          date={'Сегодня, 21:11'}
        />
        <Note
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
          date={'21.05.2021, 22:33'}
        />
      </Style.NoteList>
    </Style.Wrapper>
  )
}

export default TabNotes