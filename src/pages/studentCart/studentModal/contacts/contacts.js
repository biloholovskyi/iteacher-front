import React from "react";

import ContactsItem from "./contactsItem/contactsItem";

import * as Style from './styled'

import addIcon from './media/add.svg'

const Contacts = () => {
  return (
    <Style.Wrapper>
      <h3>Дополнительные контакты</h3>
      <ContactsItem/>
      <ContactsItem/>
      <ContactsItem/>

      <Style.AddItem>
        <img src={addIcon} alt="add"/>
        <p>Добавить контакт</p>
      </Style.AddItem>
    </Style.Wrapper>
  )
}

export default Contacts;