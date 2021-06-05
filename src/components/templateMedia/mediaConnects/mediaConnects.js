import React from "react";

import * as Style from './style'

const MediaConnects = ({data}) => {
  // данные колонок
  const dataCol = JSON.parse(data.list_connects);

  // получаем первую колонку слов
  const startCol = dataCol.map((words, key) => {
    return <Style.Words key={words.start}>{words.start}</Style.Words>
  })

  // получаем вторую колонку слов
  const endCol = dataCol.map((words, key) => {
    return <Style.Words key={words.end}>{words.end}</Style.Words>
  })

  const makeRandomArr = () => {
    return Math.random() - 0.5;
  }

  // startCol.sort(makeRandomArr);
  // endCol.sort(makeRandomArr);

  return (
    <Style.Wrapper>
      <Style.Col>
        {startCol}
      </Style.Col>

      <Style.Col>
        {endCol}
      </Style.Col>
    </Style.Wrapper>
  )
}

export default MediaConnects;