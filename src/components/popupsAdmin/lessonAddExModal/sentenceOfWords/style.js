import styled from "styled-components";

const TextBlock = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
  }
  
  .desc {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #697077;
  }
`

export {TextBlock}