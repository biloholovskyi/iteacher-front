import styled from "styled-components";

const CourseWrapper = styled.div`
  padding-top: 24px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
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
`

export {
  CourseWrapper,
  AddCourse
}