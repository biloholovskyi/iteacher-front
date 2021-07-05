import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(79, 127, 255, 0.1);
  border: 1px solid rgba(79, 127, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  width: calc(100% - 32px);
  margin-bottom: 8px;
  
  .title {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #697077;
  }
  
  .count {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #111111;
    margin-top: 4px;
    margin-bottom: 16px;
  }
`

export {
  Wrapper
}