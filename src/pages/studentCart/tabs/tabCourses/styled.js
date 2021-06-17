import styled from "styled-components";

const CourseWrapper = styled.div`
  padding-top: 24px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  
  .course-wrapper {
    .course-title {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #000000;
      margin-top: 16px;
      margin-bottom: 2px;
    }
    
    .course-next-lesson {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #697077;
    }
  }
  
  @media(max-width: 991px) {
    justify-content: space-between;
  }
`

const AddCourse = styled.div`
  margin-right: 24px;
  margin-bottom: 24px;

  &:nth-child(4n) {
    margin-right: 0;
  }

  .addSquare {
    display: flex;
    width: 200px;
    height: 200px;
    border: 2px solid #4F7FFF;
    box-sizing: border-box;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 48px;
      height: 48px;
      min-width: 48px;
      object-fit: contain;
      object-position: center;
    }
  }

  .textAddCourse {
    margin-top: 16px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #4F7FFF;
    cursor: pointer;
  }

  @media (max-width: 1449px) {
    margin-right: 16px;

    &:nth-child(4n) {
      margin-right: 16px;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (max-width: 1159px) {
    margin-right: 32px;

    &:nth-child(4n) {
      margin-right: 32px;
    }

    &:nth-child(3n) {
      margin-right: 32px;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 991px) {
    margin-right: 0;

    &:nth-child(4n) {
      margin-right: 0;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
`

export {
  CourseWrapper,
  AddCourse
}