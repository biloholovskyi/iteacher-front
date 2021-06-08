import React from "react";

import {Wrapper} from "../mainInput/styled";

const SimpleTextArea = ({name, required, errorText, validation, placeholder, defaultValue}) => {
  return (
    <Wrapper className={`wrapper-input wrapper-textarea ${validation && 'valid'}`}>
      <textarea className={'input'} name={name} required={required} placeholder={placeholder} defaultValue={defaultValue}/>
      {
        validation
          ?  <div className={'errorText'}>{errorText}</div>
          : null
      }
    </Wrapper>
  )
}

export default SimpleTextArea;