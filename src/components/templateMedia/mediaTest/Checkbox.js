import React from "react";

import {CheckboxWrap} from "./mediaTestStyled";

const Checkbox = ({answer, result, change}) => {
  console.log(result)
  return (
    <CheckboxWrap>
      <input name={'test'} className={'checkbox'} type="checkbox" checked={result} onChange={() => change(answer)}/>
      <label className="word">{answer}</label>
    </CheckboxWrap>
  )
}

export default Checkbox;