import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 24px;
`
const NoteList = styled.div`
  margin-top: 16px;
`
const Note = styled.div`
  padding: 16px;
  margin-bottom: 8px;
  background: #FFFFFF;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16), 0 0.5px 0.5px rgba(0, 0, 0, 0.1), 0 0.1px 0.1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  .textNote {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
  }
`

const NoteInfo = styled.div`
  display: flex;
  margin-top: 8px;
  .dateNote {
    padding-right: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #697077;
    border-right: 1px solid #DDE1E6;
  }
  .deleteNote {
    margin-left: 8px;
    color: red;
    cursor: pointer;
  }
  `

export {
  Wrapper,
  NoteList,
  Note,
  NoteInfo
}