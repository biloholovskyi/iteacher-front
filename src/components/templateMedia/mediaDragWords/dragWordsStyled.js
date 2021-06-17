import styled from 'styled-components';

const DragWordsWrap = styled.div`

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 7px;
  flex-direction: column;
`

const WordsSection = styled.div`
  width: 100%;
  border: 2px dashed #DDE1E6;
  border-radius: 8px;
  padding: 16px 16px 0 16px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`

const Word = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #697077;
  padding: 7px 14px;
  background: #DDE1E6;
  border: 1px solid #DDE1E6;
  border-radius: 100px;
  margin-right: ${props => props.noneMargin ? '0' : '14px'};
  cursor: pointer;
  height: max-content;
  margin-bottom: ${props => props.noneMargin ? '0' : '16px'};
  transition: all .3s;

  // если слово выбраное (активное) у студента
  ${props => props.active
          && parseInt(props.active.task) === parseInt(props.task)
          && props.active.word === props.word
          && props.user.type === 'student'
          && {
            backgroundColor: '#DDE1E6',
            border: '1px solid rgba(105, 112, 119, 0.4)'
          }} // если слово выбраное (активное) у преподавателя
  ${props => props.active
          && parseInt(props.active.task) === parseInt(props.task)
          && props.active.word === props.word
          && props.user.type === 'teacher'
          && {
            backgroundColor: 'rgba(136, 92, 255, 0.1)',
            border: '1px solid #885CFF',
            color: '#885CFF'
          }}
`

const SentenceSection = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const Sentence = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111111;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const PasteWord = styled.div`
  width: fit-content;
  min-width: 107px;
  background: #FFFFFF;
  border: 1px solid #DDE1E6;
  border-radius: 100px;
  margin: 0 14px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export {DragWordsWrap, WordsSection, Word, SentenceSection, Sentence, PasteWord}