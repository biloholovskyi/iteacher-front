import styled from "styled-components";

const DictionaryWrap = styled.div`
  padding-top: 122px;
  
  .wordList {
    width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-wrap: wrap;
   position: relative;
   & .word:nth-child(5n) {
    margin-right: 0;
   }
  }
`

const Caption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

const Title = styled.h2`
    font-style: normal;
    font-weight: bold; 
    font-size: 28px;
    line-height: 36px;
    color: #000000;
`

const SearchBlock = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background-color: #DDE1E6;
      opacity: 0.8;
      border-radius: 8px;
      width: 100%;
       min-width: 318px;
      min-height: 48px;
      padding: 0 16px;
      margin-right: 20px;
      img {
        background-color: transparent;
        width: 24px;
        height: 24px;
        object-fit: contain;
        object-position: center;
        margin-right: 12px;
      }
      input {
        background-color: transparent;
        border: none;
        width: 100%;
        height: 100%;
        padding: 12px 0px;
        border-radius: 8px;
      }
`

const SortBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
        background-color: transparent;
        width: 24px;
        height: 24px;
        object-fit: contain;
        object-position: center;
      }
      & img:first-child {
        margin-right: 8px;
      } 
      & p:nth-child(2) {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #697077;
        margin-right: 8px;
        cursor: pointer;
      }
      & p:nth-child(3) {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #111111;
        cursor: pointer;
      }
`

const WordWrap = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  width: 100%;
  max-width: calc(100% / 5 - 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 21px;
  position: relative;
  margin-bottom: 21px;
  .content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 0 16px 21px;
    background-color: transparent;
    .sound {
      width: 32px;
      height: 32px;
      margin-right: 16px;
      background-color: #DDE1E6;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
        background-color: transparent;
      }
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  flex: 2;
  max-height: 172px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 16px;
`

const MainWord = styled.div`
      background-color: #fff;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111111;
`

const WordTranslate = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #697077;
      background-color: #fff;

`

export {Input, SortBlock, SearchBlock, DictionaryWrap, Title, Caption, WordWrap, Image, MainWord, WordTranslate}