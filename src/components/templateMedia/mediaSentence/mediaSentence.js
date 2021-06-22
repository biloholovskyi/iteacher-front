import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";

import {setCRactiveEmpty} from "../../../actions";

import {DragWordsWrap, WordsSection, Word} from '../mediaDragWords/dragWordsStyled';

import * as Style from './style'

const MediaSentence = ({data, wsUpdate, setActiveWordRedux, CRactiveWord, user, setActiveEmptyItem, setCRactiveEmpty, CRactiveEmpty}) => {
  // записываем данные
  const [dataList, setData] = useState([])
  const [emptyList, setEmpty] = useState([])
  const [activeWord, setActive] = useState(null)
  const [styleActive, setStyleActive] = useState({task: null, word: null})
  const [styleActiveEmpty, setStyleActiveEmpty] = useState({task: null, empty: null})

  useEffect(() => {
    setStyleActive(CRactiveWord)
  }, [CRactiveWord])

  useEffect(() => {
    setStyleActiveEmpty(CRactiveEmpty)
  }, [CRactiveEmpty])

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

  // dnd
  const dndStart = (e, word) => {
    e.target.style.opacity = '0.4';
    setTimeout(() => {
      setActiveWordRedux(data, word)
      setActive(word)

      const classNameDrag = user.type === 'student' ? 'drag-student' : 'drag-teacher';
      const allDnDWord = document.querySelectorAll('.' + classNameDrag);
      allDnDWord.forEach(word => {
        word.classList.remove(classNameDrag)
      })
      e.target.classList.add(classNameDrag)
    })
  }

  const dndEnd = (e, word) => {
    const classNameDrag = user.type === 'student' ? 'drag-student' : 'drag-teacher';
    e.target.classList.remove(classNameDrag)
  }

  const dndEnter = (e, key) => {
    e.target.classList.add('dnd-hovered');
    setCRactiveEmpty({
      task: data.id,
      empty: key
    })

    setActiveEmptyItem(data, key)
  }

  const dndOver = (e) => {
    e.preventDefault();
  }

  const dndLeave = (e) => {
    e.target.classList.remove('dnd-hovered');
    setCRactiveEmpty({
      task: data.id,
      empty: -1
    })
  }

  const dndDrop = (e, block) => {
    e.target.classList.add('dnd-hovered');
    document.querySelectorAll('.dnd-hovered').forEach(block => {
      block.classList.remove('dnd-hovered')
    })

    setEmptyWord(block)
    setCRactiveEmpty({
      task: data.id,
      empty: -1
    })
  }

  const wordsRender = dataList.map(word => {
    return (
      <Word
        key={makeRandomArr()}
        onClick={() => setActiveWord(word)}
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
        {word}
      </Word>
    )
  });

  const emptyBlock = emptyList.map((block, key) => {
    if (block.activeWord) {
      return <Word key={makeRandomArr()}>{block.activeWord}</Word>
    } else {
      const keyRandom = key;
      return (
        <Style.EmptyItem
          task={data.id}
          empty={keyRandom}
          active={styleActiveEmpty}
          user={user}
          className={'dnd-hover'}
          key={keyRandom}
          onClick={() => setEmptyWord(block)}
          onDragEnter={(e) => {
            dndEnter(e, keyRandom)
          }}
          onDragLeave={(e) => {
            dndLeave(e)
          }}
          onDragOver={(e) => {
            dndOver(e)
          }}
          onDrop={(e) => dndDrop(e, block)}
        />
      )
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
    setCRactiveEmpty({
      task: data.id,
      empty: -1
    })
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
    CRactiveWord: state.CRactiveWord,
    CRactiveEmpty: state.CRactiveEmpty
  }
};

const mapDispatchToProps = {
  setCRactiveEmpty
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaSentence);