import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 29px;
  
  h3 {
    margin-bottom: 24px;
  }
`

const AddItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  
  img {
    width: 24px;
    min-width: 24px;
    height: 24px;
    margin-right: 16px;
    object-fit: contain;
    object-position: center;
  }
  
  p {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #4F7FFF;
  }
`

export {
  Wrapper,
  AddItem
}