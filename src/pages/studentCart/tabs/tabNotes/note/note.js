import React from 'react'

import * as Style from '../styled'

const Note = ({text,date}) => {
  return (
    <Style.Note>
      <div className="textNote">
        {text}
      </div>
      <Style.NoteInfo>
        <div className="dateNote">
          {date}
        </div>
        <div className="deleteNote">
          Удалить
        </div>
      </Style.NoteInfo>
    </Style.Note>
  )
}

export default Note