import React, {useState, useEffect} from "react";

import ContactsItem from "./contactsItem/contactsItem";

import * as Style from './styled'

import addIcon from './media/add.svg'

const Contacts = ({data}) => {
  const [socials, setSocials] = useState([])



  useEffect(() => {
    const array = JSON.parse(data.socials);

    if(!array || array.length < 1) {
      addEmptyInput();
    } else {
      setSocials(JSON.parse(data.socials));
    }
  }, [data]);

  // добавляем пустое поле
  const addEmptyInput = () => {
    setSocials([...socials, {type: 'telegram', link: ''}]);
  }

  // удаляем контакт
  const deleteContact = (link) => {
    // находим из списка по ссылке контакт
    const index = socials.findIndex(item => item.link === link);
    const newArray = [...socials.slice(0, index), ...socials.slice(index + 1)];

    setSocials(newArray);
  }


  return (
    <Style.Wrapper>
      <h3>Дополнительные контакты</h3>

      {
        socials && socials.length > 0 && socials.map((social, key) => {
          return <ContactsItem key={key} data={social} deleteFunc={deleteContact}/>
        })
      }

      <Style.AddItem onClick={addEmptyInput}>
        <img src={addIcon} alt="add"/>
        <p>Добавить контакт</p>
      </Style.AddItem>
    </Style.Wrapper>
  )
}

export default Contacts;