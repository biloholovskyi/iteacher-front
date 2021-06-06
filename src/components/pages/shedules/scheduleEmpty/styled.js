import styled from "styled-components";
import {NavLink} from "react-router-dom";

const NonoCoursesWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  padding-top: 122px;

  img {
    width: 350px;
    height: 350px;
    object-position: center;
    object-fit: cover;
    margin-bottom: 30px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -0.01em;
    color: #697077;
    margin-bottom: 40px;
    max-width: 450px;
    text-align: center;
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

  &.openModal {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    text-decoration: none;
    align-items: center;
    display: flex
  ;
    flex-direction: row-reverse;
    padding: 14px 20px;
  }

  img {
    background-color: transparent;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    margin-right: 8px;
    margin-bottom: 0;
  }
`

export {NonoCoursesWrap, AddCourse}
