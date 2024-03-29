import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";

import {setCRactiveEmpty} from "../../../actions";

import {DragWordsWrap, WordsSection, Word} from '../mediaDragWords/dragWordsStyled';

import * as Style from '../mediaSentence/style'
import {Sentence} from "./style";

const MediaTransfer = ({
                         data,
                         wsUpdate,
                         setActiveWordRedux,
                         CRactiveWord,
                         user,
                         setActiveEmptyItem,
                         setCRactiveEmpty,
                         CRactiveEmpty
                       }) => {
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

  useEffect(() => {
    setData(data.desc.split('\n'))
    if (data.list_column) {
      setEmpty(JSON.parse(data.list_column))
    } else {
      const empty = data.desc.split('\n').map((sentence) => {
        const word = sentence.split('[')[1].split(']')[0]

        return sentence.replace(word, '.....')
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
    e.target.style.opacity = '1';
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

  const dndDrop = (e, sentence) => {
    e.target.classList.add('dnd-hovered');
    document.querySelectorAll('.dnd-hovered').forEach(block => {
      block.classList.remove('dnd-hovered')
    })

    setCRactiveEmpty({
      task: data.id,
      empty: -1
    })
    setEmptyWord(sentence)
  }

  const setActiveWord = (word) => {
    setActiveWordRedux(data, word)
    setActive(word)
  }

  const setEmptyWord = (sentence) => {
    if (!activeWord) {
      return
    }
    // получаем нужный нам блок
    const index = emptyList.findIndex(empty => empty === sentence);

    const newSentence = sentence.replace('.....', activeWord)

    const newEmptyList = [
      ...emptyList.slice(0, index),
      newSentence,
      ...emptyList.slice(index + 1)
    ]

    setEmpty(newEmptyList)
    setActiveWord(false)

    setCRactiveEmpty({
      task: data.id,
      empty: -1
    })
    wsUpdate(newEmptyList, 0, data, 'list_column')
  }

  let uniqueKey = 0;

  const wordsRender = dataList.map(sentence => {
    const word = sentence.split('[')[1].split(']')[0]

    // првоеряем есть ли такое предложение в уже выполненных
    let allWords = [];

    emptyList.forEach(s => {
      allWords.push(s.split('[')[1].split(']')[0]);
    })

    const result = allWords.find(w => w === word);
    if (!result) {
      return (
        <Word
          key={word}
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
        </Word>)
    }
  })

  const sentencesRender = emptyList.map((sentence, key) => {
    uniqueKey++
    const word = sentence.split('[')[1].split(']')[0]
    if (word !== '.....') {
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
          <Style.EmptyItem
            className={'dnd-hover'}
            task={data.id}
            empty={key}
            active={styleActiveEmpty}
            user={user}
            noneMargin={true}
            onClick={() => setEmptyWord(sentence)}
            onDragEnter={(e) => {
              dndEnter(e, key)
            }}
            onDragLeave={(e) => {
              dndLeave(e)
            }}
            onDragOver={(e) => {
              dndOver(e)
            }}
            onDrop={(e) => dndDrop(e, sentence)}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(MediaTransfer);