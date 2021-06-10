import React, {useState, useEffect} from 'react';

import { DragWordsWrap, WordsSection, Word } from '../mediaDragWords/dragWordsStyled';

import * as Style from './style'


const MediaSentence = ({data, wsUpdate}) => {
  // записываем данные
  const [dataList, setData] = useState([])
  const [emptyList, setEmpty] = useState([])
  const [activeWord, setActive] = useState(null)

  const makeRandomArr = () => {
    return Math.random() - 0.5;
  }

  useEffect(() => {
    setData(data.desc.split('/'))
    if(data.list_column) {
      setEmpty(JSON.parse(data.list_column))
    }
  }, [data])

  useEffect(() => {
    if(emptyList.length > 0) {return}
    const empty = dataList.map((word, key) => {
      return {
        id: key,
        word: word,
        activeWord: false
      }
    })

    setEmpty(empty)
  }, [dataList])

  const wordsRender = dataList.map(word => {
    return <Word key={makeRandomArr()} onClick={() => setActiveWord(word)}>{word}</Word>
  });

  const emptyBlock = emptyList.map(block => {
    if(block.activeWord) {
      return <Word key={makeRandomArr()}>{block.activeWord}</Word>
    } else {
      return <Style.EmptyItem key={makeRandomArr()} onClick={() => setEmptyWord(block)}/>
    }
  })

  const setActiveWord = (word) => {
    setActive(word)
  }

  const setEmptyWord = (block) => {
    // получаем нужный нам блок
    const indexBlock = emptyList.findIndex(empty => parseInt(empty.id) === parseInt(block.id));
    const newEmptyList = [
      ...emptyList.slice(0, indexBlock),
      {
        ...block,
        activeWord: activeWord
      },
      ...emptyList.slice(indexBlock + 1)
    ]

    setEmpty(newEmptyList)

    wsUpdate(newEmptyList, 0, data, 'list_column')
  }

  return (
    <DragWordsWrap>
      <WordsSection>
        {wordsRender}
      </WordsSection>

      <Style.EmptyBlock mt>
        {emptyBlock}
      </Style.EmptyBlock>
    </DragWordsWrap>
  )
};

export default MediaSentence;