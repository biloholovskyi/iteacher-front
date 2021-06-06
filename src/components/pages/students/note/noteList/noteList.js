import React from "react";

import NotesItem from "./notesItem/notesItem";

import {NotesBody} from "./styled";

const NotesList = ({posts, onDelete}) => {

  const elements = posts.map((item, key) =>{
    return (
      <NotesItem
        key={key}
        note={item}
        onDelete={() => onDelete(item.id)}
      />
    )
  });

  return (
    <NotesBody>
      {elements}
    </NotesBody>
  )
}

export default NotesList;