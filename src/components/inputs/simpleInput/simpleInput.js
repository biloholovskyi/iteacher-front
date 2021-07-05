import React, {useEffect} from "react";

import {Wrapper} from "../mainInput/styled";

const SimpleInput = ({name, type, required, errorText, validation, defaultValue}) => {
  return (
    <Wrapper className={`wrapper-input ${validation && 'valid'}`}>
      <input className={'input'} name={name} required={required}  type={type} defaultValue={defaultValue}/>
      {
        validation
          ?  <div className={'errorText'}>{errorText}</div>
          : null
      }
    </Wrapper>
  )
}

export default SimpleInput;