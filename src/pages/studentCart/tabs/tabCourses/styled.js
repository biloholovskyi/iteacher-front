import styled from "styled-components";

const CourseWrapper = styled.div`
  padding-top: 24px;
`

const AddCourse = styled.div`
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