import React, {useEffect, useRef, useState} from "react";

import {TimeModalWrap} from './styled';

const TimeModal = ({selectTime}) => {
  const [text, setText] = useState('');

  const onchange = (e) => {
    selectTime(e.target.value)
    setText(e.target.value)
  }
console.log(text)
  const timeData = [
    {text: '00:00'},
    {text: '01:00'},
    {text: '02:00'},
    {text: '03:00'},
    {text: '04:00'},
    {text: '05:00'},
    {text: '06:00'},
    {text: '07:00'},
    {text: '08:00'},
    {text: '09:00'},
    {text: '10:00'},
    {text: '11:00'},
    {text: '12:00'},
    {text: '13:00'},
    {text: '14:00'},
    {text: '15:00'},
    {text: '16:00'},
    {text: '17:00'},
    {text: '18:00'},
    {text: '19:00'},
    {text: '20:00'},
    {text: '21:00'},
    {text: '22:00'},
    {text: '23:00'},
  ]

  return (
    <TimeModalWrap>
      {
        timeData.map((item, key) => {
          return (

              <input className={`${text === item.text && 'active'} item`} key={key} onClick={(e)=> onchange(e)} readOnly value={item.text}  />

          )
        })
      }
    </TimeModalWrap>
  )
}

export default TimeModal;