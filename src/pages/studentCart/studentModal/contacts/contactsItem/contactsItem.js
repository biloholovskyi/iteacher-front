import React from "react";

import MainInput from "../../../../../components/inputs/mainInput/mainInput";
import MainDropList from "../../../../../components/inputs/mainDropList/mainDropList";

import * as Style from './styled'

const ContactsItem = () => {
  return (
    <Style.Item>
      <MainDropList
        options={[
          {value: 'telegram', name: 'telegram'},
          {value: 'facebook', name: 'facebook'},
          {value: 'instagram', name: 'instagram'}
        ]}
        width={180}
        classes={'socialDropList'}
      />

      <MainInput
        type={'text'}
        label={'Ссылка'}
      />
    </Style.Item>
  )
}

export default ContactsItem