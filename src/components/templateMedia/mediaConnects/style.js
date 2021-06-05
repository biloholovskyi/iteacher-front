import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px dashed #DDE1E6;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  width: 100%;
`

const Col = styled.div`
  width: 100%;
  min-height: 100px;
  padding-left: 16px;
  
  &:first-child {
    border-right: 1px solid #DDE1E6;
    padding-left: 0;
  }
`

const Words = styled.div`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #697077;
  padding: 7px 14px;
  background: #DDE1E6;
  border: 1px solid #DDE1E6;
  border-radius: 100px;
  margin-bottom: 16px;
  width: max-content;
  
  &:last-child {margin-bottom: 0;}
`

export {Wrapper, Col, Words}