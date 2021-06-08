import React from "react";

import MainInput from "../../../inputs/mainInput/mainInput";

import {Answer} from './styled';

const Checkbox = ({data}) => {
  return(
    <Answer>
      <input className={'checkbox'} type="checkbox" name={'status'}/>
      {data.answer ? (
        <MainInput
          type={'text'}
          label={'Ответ'}
          name={'answer'}
          required={true}
          defaultValue={data.answer}
        />
      ) : (
        <MainInput
          type={'text'}
          label={'Ответ'}
          name={'answer'}
          required={true}
        />
      )}
    </Answer>
  )
}

export default Checkbox;