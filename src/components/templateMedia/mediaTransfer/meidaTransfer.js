import React, {useState, useEffect} from 'react';

import {DragWordsWrap, WordsSection, Word} from '../mediaDragWords/dragWordsStyled';

import * as Style from '../mediaSentence/style'
import {Sentence} from "./style";


const MediaTransfer = ({data, wsUpdate}) => {
  // записываем данные
  const [dataList, setData] = useState([])
  const [emptyList, setEmpty] = useState([])
  const [activeWord, setActive] = useState(null)

  useEffect(() => {
    setData(data.desc.split('\n'))
    if(data.list_column) {
      setEmpty(JSON.parse(data.list_column))
    } else {
      const empty = data.desc.split('\n').map((sentence) => {
        const word = sentence.split('[')[1].split(']')[0]

        return sentence.replace(word, '.....')
      })
      setEmpty(empty)
    }
  }, [data])

  const setActiveWord = (word) => {
    setActive(word)
  }

  const setEmptyWord = (sentence) => {
    if(!activeWord) {return}
    // получаем нужный нам блок
    const index = emptyList.findIndex(empty => empty === sentence);

    const newSentence = sentence.replace('.....', activeWord)

    const newEmptyList = [
      ...emptyList.slice(0, index),
      newSentence,
      ...emptyList.slice(index + 1)
    ]

    setEmpty(newEmptyList)

    wsUpdate(newEmptyList, 0, data, 'list_column')
  }

  let uniqueKey = 0;

  const wordsRender = dataList.map(sentence => {
    const word = sentence.split('[')[1].split(']')[0]
    return <Word key={word} onClick={() => setActiveWord(word)}>{word}</Word>
  })

  const sentencesRender = emptyList.map(sentence => {
    uniqueKey++
    const word = sentence.split('[')[1].split(']')[0]
    if(word !== '.....') {
      return (
        <Sentence key={uniqueKey}>
          <p>{sentence.split('[')[0]}</p>
          <Word key={word} noneMargin={true}>{word}</Word>
          <p>{sentence.split('[')[1].split(']')[1]}</p>
        </Sentence>
      )
    } else {
      return (
        <Sentence key={uniqueKey}>
          <p>{sentence.split('[')[0]}</p>
          <Style.EmptyItem noneMargin={true} onClick={() => setEmptyWord(sentence)}/>
          <p>{sentence.split('[')[1].split(']')[1]}</p>
        </Sentence>
      )
    }
  })

  return (
    <DragWordsWrap>
      <WordsSection>
        {wordsRender}
      </WordsSection>

      <Style.EmptyBlock sentence>
        {sentencesRender}
      </Style.EmptyBlock>
    </DragWordsWrap>
  )
};

export default MediaTransfer;