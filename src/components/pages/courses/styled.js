import styled from "styled-components";
import {NavLink} from "react-router-dom";

const CourseWrap = styled.div`
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

  @media (max-width: 575px) {
    margin-bottom: 16px;
  }

`

const CaptionInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }

`

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  color: #000000;

  @media (max-width: 575px) {
    font-size: 24px;
    line-height: 32px;
  }

`

const AddCourse = styled.button`
  background: #4F7FFF;
  box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
  border-radius: 6px;
  border: none;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  cursor: pointer;

  img {
    background-color: transparent;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    margin-right: 8px;
  }

  a {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    text-decoration: none;
    background-color: transparent;
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    padding: 14px 20px;
  }

  @media (max-width: 575px) {
    display: none;
  }
`

const AddCourseMobile = styled.button`
  background: transparent;
  border: none;
  position: relative;
  display: none;
  align-items: center;
  flex-direction: row-reverse;
  cursor: pointer;

  img {
    background-color: transparent;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
  }

  a {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    text-decoration: none;
    background-color: transparent;
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
  }

  @media (max-width: 575px) {
    display: flex;
  }

`


const SearchBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 767px) {
    margin-bottom: 16px;
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
    width: 100%;
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
`

const SortBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 270px;

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

  @media (max-width: 767px) {
    width: 100%;
    justify-content: flex-start;
  }

`

const CoursesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
`

const BtnWrap = styled.div`
  display: flex !important;
  align-items: center;
  background-color: transparent;
  border: none;
  width: 100%;
  color: #4F7FFF;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  .img_bg {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px dashed #4F7FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    img {
      width: 10px;
      height: 10px;
      object-fit: contain;
    }
  }

`

export {
  DropDown,
  Input,
  SearchBlock,
  AddCourse,
  Caption,
  CourseWrap,
  Title,
  SortBlock,
  CoursesList,
  BtnWrap,
  CaptionInput,
  AddCourseMobile
}