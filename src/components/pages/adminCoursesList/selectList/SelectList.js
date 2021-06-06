import React from 'react';

import { LabelWrap } from './SelectListStyle';

const SelectList = ({ name, list = [], selected, set }) => {

  return (

    <LabelWrap >

      <span className = "input__title">{ name }</span>

      { list.length > 0

        &&  <select 
              name = { name } 
              className = { name === "Сложность" ? "complexity" : '' }
              defaultValue = { selected || "" }
              onChange = { (e) => set(e.target.value) }
            >

              <option disabled value = "">Выберите значение</option>

              { list.map(( value, key ) => (

                <option value={ value[0] } key={ key }>
                  
                  { value[1] }
                  
                </option>

              ))}

            </select>

      }

      { name === "Сложность" && <span className = "select__boll" /> }

      <span className = "option__down"></span>

    </LabelWrap>
  )

};


export default SelectList;
