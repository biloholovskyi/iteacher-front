import React, {useState, useEffect} from "react";

import {Wrapper} from "./styled";

const MainInput = (
  {
    label,
    name,
    type,
    required,
    errorText,
    validation,
    defaultValue,
    updateData = () => null,
    readOnly,
    grey,
    onClick = () => null
  }
) => {
  // состояния инпута
  const [active, setActive] = useState(false)

  // проверяем есть ли дефолтное значение
  useEffect(() => {
    if (defaultValue) {
      setActive(true);
    }
  })

  const onChange = (e) => {
    setActive(e.target.value);
    updateData(e.target.value);
  }

  return (
    <Wrapper className={` ${validation && 'valid'}`} grey={grey}>
      <label className={`label ${active && 'active'}`}>{label}</label>
      <input
        className={'input'}
        name={name}
        required={required}
        type={type}
        onChange={(e) => onChange(e)} defaultValue={defaultValue}
        readOnly={readOnly}
        onClick={onClick}
      />

      {
        validation
          ?  <div className={'errorText'}>{errorText}</div>
          : null
      }

    </Wrapper>
  )
}

export default MainInput;