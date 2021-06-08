import React from "react";

import SimpleInput from "../../../../inputs/simpleInput/simpleInput";
import MainDropList from "../../../../inputs/mainDropList/mainDropList";

import * as Style from '../style'

const Question = ({connect, data}) => {
  return (
    <Style.Question>
      {connect
        ? (
          <SimpleInput
            type={'text'}
            name={'start'}
            required={true}
            defaultValue={data.start}
          />
        )
        : (
          <SimpleInput
            type={'text'}
            name={'start'}
            required={true}
            defaultValue={data.question}
          />
        )
      }

      {/*проверяем какой тип, если связи то выводим второй инпут*/}
      {
        connect
          ? (
            <SimpleInput
              type={'text'}
              name={'end'}
              required={true}
              defaultValue={data.end}
            />
          )
          : (
            <MainDropList
              name={'result'}
              required={true}
              width={104}
              options={
                [
                  {value: 'True', name: 'True'},
                  {value: 'False', name: 'False'}
                ]
              }
            />
          )
      }
      <div className="delete"/>
    </Style.Question>
  )
}

export default Question;