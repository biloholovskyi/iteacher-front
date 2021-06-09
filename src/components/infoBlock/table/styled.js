import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 12px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 56px;
  margin: 0 16px;
  border-bottom: 1px solid #DDE1E6;
  
  .name {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #697077;
  }
  
  .value {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    letter-spacing: -0.01em;
    color: #000000;
  }
`

export {
  Wrapper,
  Item
}