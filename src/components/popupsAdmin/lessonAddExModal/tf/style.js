import styled from "styled-components";

import del from '../../../../assets/media/icon/trash_basket.svg'

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`

const QuestionsBlock = styled.div`
  margin-bottom: 50px;
  width: 100%;
  
  h3.title {
    margin-top: 32px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
    margin-bottom: 16px;
  }
`

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    .delete {
      opacity: 1;
    }
  }
  
  .wrapper-input:first-child {
    margin-right: 16px;
  }
  
  .delete {
    width: 24px;
    min-width: 24px;
    height: 24px;
    background-image: url(${del});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    margin-left: 16px;
    margin-bottom: 23px;
    transition: all .3s;
    opacity: 0;
  }
`

const AddMore = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  img {
    width: 20px;
    height: 20px;
    min-width: 24px;
    object-position: center;
    object-fit: contain;
  }
  
  p {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #4F7FFF;
    margin-left: 8px;
  }
`

export {Form, QuestionsBlock, Question, AddMore}