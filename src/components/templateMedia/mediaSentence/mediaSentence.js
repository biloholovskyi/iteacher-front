import React, {useState, useEffect} from 'react';

import {DragWordsWrap, WordsSection, Word} from '../mediaDragWords/dragWordsStyled';

import * as Style from './style'
import {connect} from "react-redux";


const MediaSentence = ({data, wsUpdate, setActiveWordRedux, CRactiveWord, user}) => {
  // записываем данные
  const [dataList, setData] = useState([])
  const [emptyList, setEmpty] = useState([])
  const [activeWord, setActive] = useState(null)
  const [styleActive, setStyleActive] = useState({task: null, word: null})

  useEffect(() => {
    setStyleActive(CRactiveWord)
  }, [CRactiveWord])

  const makeRandomArr = () => {
    return Math.random() - 0.5;
  }

  useEffect(() => {
    let newList = dataList;

    emptyList.forEach(block => {
      if(block.activeWord) {
        // удаляем это слово из списка
        const index = newList.findIndex(word => word === block.activeWord);
        if(index < 0) {return}
        // удаляем слово
        newList = [...newList.slice(0, index), ...newList.slice(index + 1)]
      }
    })

    console.log(newList);
    setData(newList);
  }, [emptyList])

  useEffect(() => {
    setData(data.desc.split('/'))
    if (data.list_column) {
      setEmpty(JSON.parse(data.list_column))
    } else {
      const empty = data.desc.split('/').map((word, key) => {
        return {
          id: key,
          word: word,
          activeWord: false
        }
      })

      setEmpty(empty)
    }
  }, [data])

  const wordsRender = dataList.map(word => {
    return (
      <Word
        key={makeRandomArr()}
        onClick={() => setActiveWord(word)}
        user={user}
        active={styleActive}
        word={word}
        task={data.id}
      >
        {word}
      </Word>
    )
  });

  const emptyBlock = emptyList.map(block => {
    if (block.activeWord) {
      return <Word key={makeRandomArr()}>{block.activeWord}</Word>
    } else {
      return <Style.EmptyItem key={makeRandomArr()} onClick={() => setEmptyWord(block)}/>
    }
  })

  const setActiveWord = (word) => {
    setActiveWordRedux(data, word)
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
    setActive(null)

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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    CRactiveWord: state.CRactiveWord
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MediaSentence);