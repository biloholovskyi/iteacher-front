import styled from "styled-components";

const StudentsWrap = styled.div`
  padding-top: 122px;
  
  .container {
    @media (max-width: 575px) {
      padding: 0 16px;
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

  @media (max-width: 767px) {
    width: 100%;
  }
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

  @media (max-width: 767px) {
    margin-right: 0;
    min-width: unset;
  }
  
`

const DropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #DDE1E6;
  opacity: 0.8;
  border-radius: 8px;
  width: 100%;
  min-width: 207px;
  min-height: 48px;
  padding: 12px 16px;
  cursor: pointer;

  img {
    background-color: transparent;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
  }

  p {
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #697077;
    opacity: 0.8;
    background-color: transparent;
  }

  @media (max-width: 991px) {
    display: none;
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

  @media (max-width: 991px) {
    display: none;
  }

`

const CoursesList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`

const NotesBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 24px;
  background-color: #fff;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
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

const FilterBtn = styled.button`
  background-color: transparent;
  border: none;
  display: none;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    object-fit: contain;
  }

  @media (max-width: 991px) {
    display: block;
  }
`

export {
  DropDown,
  Input,
  SearchBlock,
  Caption,
  StudentsWrap,
  Title,
  SortBlock,
  CoursesList,
  NotesBody,
  Message,
  FilterBtn
}