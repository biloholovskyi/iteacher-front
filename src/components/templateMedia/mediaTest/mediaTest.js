import React, {useState, useEffect} from 'react';
import Checkbox from './Checkbox';

import { TestWrap } from './mediaTestStyled';


const MediaTest = ({data, wsUpdate}) => {
  const [dataList, setData] = useState([])

  useEffect(() => {
    setData(JSON.parse(data.answers))
  }, [data])


  const checked = (answer) => {
    // находим индес
    const index = dataList.findIndex(ans => ans.answer === answer.answer);
    const newAnswer = {
      ...dataList[index],
      results: !dataList[index].results
    }

    const clearList = dataList.map(item => {
      return {
        ...item,
        results: false
      }
    })

    const newList = [
      ...clearList.slice(0, index),
      newAnswer,
      ...clearList.slice(index + 1)
    ]

    setData(newList)

    wsUpdate(newList, 0, data, 'answers')
  }

  const answers = dataList.map((answer, key) => {
    return <Checkbox key={key} answer={answer.answer} result={answer.results} change={() => checked(answer)}/>
  })
  return (
    <TestWrap>
      <div className = "test__container">
        {answers}
      </div>
    </TestWrap>
  )
};

export default MediaTest;