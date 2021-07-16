import React from "react";

import MainInput from "../../../../../components/inputs/mainInput/mainInput";
import MainDropList from "../../../../../components/inputs/mainDropList/mainDropList";

import * as Style from './styled'

const ContactsItem = ({data, deleteFunc}) => {
  return (
    <Style.Item>
      <MainDropList
        options={[
          {value: 'telegram', name: 'Telegram'},
          {value: 'facebook', name: 'Facebook'},
          {value: 'instagram', name: 'Instagram'},
          {value: 'whatsapp', name: 'Whatsapp'},
          {value: 'vk', name: 'vk'}
        ]}
        width={180}
        classes={'socialDropList'}
        name={'social_type'}
        defaultValue={data.type}
      />

      <MainInput
        grey
        type={'text'}
        label={'Ссылка'}
        name={'social_link'}
        defaultValue={data.link}
      />

      <Style.Delete className={'delete'} onClick={() => deleteFunc(data.link)}/>
    </Style.Item>
  )
}

export default ContactsItem