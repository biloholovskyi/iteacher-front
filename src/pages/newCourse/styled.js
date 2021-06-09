import styled from "styled-components";

const WithOutHeaderContainer = styled.div`
  position: relative;
  z-index: 10;
  background-color: #F8F9FB;

  .close {
    position: absolute;
    right: 48px;
    top: 48px;
    width: 56px;
    height: 56px;
    background-color: #DDE1E6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      background-color: transparent;
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    @media (max-width: 575px) {
      display: none;
    }
  }

  .container {
    @media (max-width: 767px) {
      padding: 0 16px;
    }
    @media (max-width: 575px) {
      padding: 0;
    }
  }
`

const AddCoursesWrap = styled.div`
  width: 100%;
  max-width: 888px;
  margin: 0 auto;
  padding-top: 58px;
`

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  width: 100%;
  justify-content: space-between;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
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
  margin-right: 18px;
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
`

export {
  WithOutHeaderContainer,
  AddCoursesWrap,
  TitleSection,
  AddCourse
}