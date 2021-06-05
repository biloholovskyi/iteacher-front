import styled from "styled-components";

const Sentence = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  
  &:last-child {margin-bottom: 0;}
  
  p {
    margin: 0 14px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
  }
`

export {Sentence}