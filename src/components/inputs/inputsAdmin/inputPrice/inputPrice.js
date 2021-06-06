import React, { useState, useRef } from 'react';

import { LabelWrap } from './inputPriceStyled';

const InputPrice = ({ type = "", name, value = "", set, placeholder = "" }) => {

  const [ inputWidth, setInputWidth ] = useState(value.length);

  const refInput = useRef(null);

  const onClickLabel = () => refInput.current.focus();

  return (

    <LabelWrap className = "input input__price" onClick={ onClickLabel }>

      <span className = "input__title">
        
        { type !== "price" ? name : "Цена" }
        
      </span>

      <input

        ref={ refInput }
        value = { value }
        onChange = {(e) => {

          set( e.target.value );
          setInputWidth( e.target.value.length );

        }}
        placeholder = { placeholder }

      />

      { (type === 'price' && inputWidth !== 0) 
        
        &&  <span
              className="span__price"
              style={{ left: `${14 + inputWidth * 9}px` }}
            >
              ₽
            </span> }

    </LabelWrap>
  )

};

export default InputPrice;
