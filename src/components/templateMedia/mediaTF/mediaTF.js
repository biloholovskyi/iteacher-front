import React, {useState, useEffect} from 'react';

import * as Style from './style'

const MediaTF = ({data, wsUpdate, sectionIndex}) => {
  // записываем вопросы
  const [questionsData, setQuestions] = useState([])

  const makeRandomArr = () => {
    return Math.random() - 0.5;
  }

  useEffect(() => {
    setQuestions(JSON.parse(data.list_tf_question))
  }, [data])

  // меняем значение
  const changeResult = (oldResult, dataTask) => {
    // находим индекс выбраного вопроса
    const index = questionsData.findIndex(q => q.question === dataTask.question)
    // меняем состояние
    const newData = {
      ...dataTask,
      result: dataTask.result === 'True' ? 'False' : 'True'
    }

    const newList = [...questionsData.splice(0, index), newData, ...questionsData.slice(index + 1)];

    setQuestions(newList)
    // надо удалить индекс секции и получать его уже непосредственно в функции
    wsUpdate(newList, sectionIndex, data, 'list_tf_question')
  }

  // получаем все утверждения
  const questions = questionsData.map((question, key) => {
    return (
      <Style.QuestionLine key={makeRandomArr()}>
        <p>{question.question}</p>
        <Style.SwitchBlock>
          <Style.SwitchItem true result={question.result} onClick={() => changeResult(question.result, question)}>True</Style.SwitchItem>
          <Style.SwitchItem false result={question.result} onClick={() => changeResult(question.result, question)}>False</Style.SwitchItem>
        </Style.SwitchBlock>
      </Style.QuestionLine>
    )
  })

  return (
    <>
      {questions}
    </>
  )
};

export default MediaTF;