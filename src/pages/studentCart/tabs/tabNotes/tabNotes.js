import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";

import MainInput from "../../../../components/inputs/mainInput/mainInput";
import Note from "./note/note";
import * as Style from './styled'

import axiosInstance from "../../../../service/iTeacherApi";

const TabNotes = ({data, user}) => {
  const [noteList, setNoteList] = useState([])

  useEffect(() => {
    if(!data.notes) {return}
    const notes = JSON.parse(data.notes).filter(note => parseInt(note.teacher) === parseInt(user.id));
    setNoteList(notes)
  }, [data])

  const createNotes = async (e) => {
    e.preventDefault()

    const date = new Date();

    const stringDate = `${date.toLocaleDateString()}, ${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`

    const dataUser = {
      ...data,
      notes: JSON.stringify([...noteList, {text: e.target.note.value, date: stringDate, teacher: user.id}])
    }

    delete dataUser.photo

    await axiosInstance.put(`/users/${data.id}/update/`, dataUser)
      .then(() => {
        setNoteList([...noteList, {text: e.target.note.value, date: stringDate, teacher: user.id}])
        e.target.note.value = '';
      })
      .catch(error => console.error(error))
  }

  return (
    <Style.Wrapper onSubmit={(e) => createNotes(e)}>
      <MainInput
        label={'Введите текст заметки'}
        type={'text'}
        grey
        name={'note'}
      />
      <Style.NoteList>
        {
          noteList && noteList.length > 0 && noteList.reverse().map(note => {
            return (
              <Note
                text={note.text}
                date={note.date}
              />
            )
          })
        }
      </Style.NoteList>
    </Style.Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TabNotes);