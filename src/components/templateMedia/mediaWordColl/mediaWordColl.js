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

  // dnd
  const dndStart = (e, word) => {
    setTimeout(() => {
      setActiveWord(data, word)
      setActive(word)

      const classNameDrag = user.type === 'student' ? 'drag-student' : 'drag-teacher';
      const allDnDWord = document.querySelectorAll('.' + classNameDrag);
      allDnDWord.forEach(word => {
        console.log(word)
        word.classList.remove(classNameDrag)
      })
      e.target.classList.add(classNameDrag)
    })
  }

  const dndEnd = (e, word) => {
    const classNameDrag = user.type === 'student' ? 'drag-student' : 'drag-teacher';
    e.target.classList.remove(classNameDrag)
  }

  const dndEnter = (e) => {
    e.target.classList.add('dnd-hovered');
  }

  const dndOver = (e) => {
    e.preventDefault();
  }

  const dndLeave = (e) => {
    e.target.classList.remove('dnd-hovered');
    console.log('leave')
  }

  const dndDrop = (e, name) => {
    console.log('drop')
    e.target.classList.add('dnd-hovered');
    document.querySelectorAll('.dnd-hovered').forEach(block => {
      block.classList.remove('dnd-hovered')
    })

    setWordToPlace(name);
  }

  // перенос слова
  const setWordToPlace = (name) => {
    // проверяем есть ли активное слово
    if (!active) {
      return
    }

    // добавляем слово в выбранные
    const index = listData.findIndex(col => col.name === name);

    const newCol = {...listData[index], setList: [...listData[index].setList, active]}
    const newList = [...listData.slice(0, index), newCol, ...listData.slice(index + 1)]

    // удаляем слово
    // находим из какой колонки слово
    let indexCol = 0;
    let indexWord = 0;
    newList.forEach((col, key) => {
      // проверяем есть ли слово
      const _indexWord = col.words.findIndex(word => word === active);
      if(_indexWord > -1) {
        indexCol = key;
        indexWord = _indexWord;
      }
    })

    let newWordsList = [...newList[indexCol].words.slice(0, indexWord), ...newList[indexCol].words.slice(indexWord + 1)]
    const newColDel = {...newList[indexCol], words: newWordsList}
    const newListDel = [...newList.slice(0, indexCol), newColDel, ...newList.slice(indexCol + 1)]

    setData(newListDel)
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
      <Style.Column
        key={key}
        onDragEnter={(e) => {
          dndEnter(e)
        }}
        onDragLeave={(e) => {
          dndLeave(e)
        }}
        onDragOver={(e) => {
          dndOver(e)
        }}
        onDrop={(e) => dndDrop(e, col.name)}
      >
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
          draggable="true"
          onDragStart={(e) => {
            dndStart(e, word)
          }}
          onDragEnd={(e) => {
            dndEnd(e, word)
          }}
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