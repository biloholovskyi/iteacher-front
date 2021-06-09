import styled from "styled-components";

const NotesItemWrap = styled.div`
  background-color: #fff;
  padding: 24px 0;
`

const Data = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #697077;
  margin-bottom: 8px;
  background-color: #fff;
`

const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  padding: 12px 16px;
  border: 1px solid #DDE1E6;
  border-radius: 8px;

  .text {
    background-color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
    margin-bottom: 8px;
    word-break: break-all;
  }

  button {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #DA1E28;
    border: none;
    background-color: #fff;
    cursor: pointer;
  }
`

export {
  NotesItemWrap,
  Data,
  Message
}