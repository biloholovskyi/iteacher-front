import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";

import {DragWordsWrap, WordsSection, Word} from '../mediaDragWords/dragWordsStyled';

import * as Style from './style'

const MediaWordColl = ({data, wsUpdate, setActiveWord, user, CRactiveWord}) => {
  // записываем вопросы
  const [listData, setData] = useState([])
  const [active, setActive] = useState(null)
  // похоже нужно удалить
  const [activeCol, setActiveCol] = useState(null)
  // для замены цвета активного слова
  const [styleActive, setStyleActive] = useState({task: null, word: null})

  useEffect(() => {
    setStyleActive(CRactiveWord)
  }, [CRactiveWord])

  const makeRandomArr = () => {
    return Math.random() - 1;
  }

  useEffect(() => {
    let list = JSON.parse(data.list_column).map(item => {
      if (!item.setList) {
        return {...item, setList: []}
      } else {
        return item
      }
    })
    setData(list)
  }, [data])

  // активация слов
  const switchActive = (word, col) => {
    setActiveWord(data, word)
    setActive(word)
    setActiveCol(col)
  }

  // перенос слова
  const setWordToPlace = (name) => {
    // проверяем есть ли активное слово
    if (!active) {
      return
    }

    // добавляем слово в выбранные
    const index = listData.findIndex(col => col.name === name);
    // находим индекс выбраного слова
    const indexWord = listData[index].words.findIndex(word => word === active)
    // удаляем слово
    const newWordsList = [...listData[index].words.slice(0, indexWord), ...listData[index].words.slice(indexWord + 1)]
    const newCol = {...listData[index], setList: [...listData[index].setList, active], words: newWordsList}
    const newList = [...listData.slice(0, index), newCol, ...listData.slice(index + 1)]
    setData(newList)
    // делаем слово не активным
    setActive(false)

    wsUpdate(newList, 0, data, 'list_column')
  }


  // получаем все слова
  let words = [];
  let columnsRender = listData.map((col, key) => {
    const setList = col.setList.map(wordItem => {
      return <Word key={makeRandomArr()}>{wordItem.split(',')[0]}</Word>
    })

    return (
      <Style.Column key={key}>
        <div className="title-block">{col.name}</div>
        <div className="words-block" onClick={() => setWordToPlace(col.name)}>
          {setList}
        </div>
      </Style.Column>
    )
  });

  listData.forEach(col => {
    col.words.forEach(word => {
      words.push(
        <Word
          key={makeRandomArr()}
          onClick={() => switchActive(word, col)}
          user={user}
          active={styleActive}
          word={word}
          task={data.id}
        >
          {word.split(',')[0]}
        </Word>
      )
    })
  })


  // пока не исправили баг с сортировкой при каждом обновление
  // words.sort(makeRandomArr);

  return (
    <DragWordsWrap>
      <WordsSection>
        {words}
      </WordsSection>

      <Style.Columns>
        {columnsRender}
      </Style.Columns>
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

export default connect(mapStateToProps, mapDispatchToProps)(MediaWordColl);