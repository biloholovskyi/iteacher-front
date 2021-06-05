import React from 'react';
import {Invite} from "./addStudentModalStyled";



const InviteEmail = ({value, onInput}) => {
  return (
    <Invite>
      <input type="text" placeholder='Введите Email' value={value} onChange={(e) => onInput(e)}/>
    </Invite>
  )
}

export default InviteEmail;