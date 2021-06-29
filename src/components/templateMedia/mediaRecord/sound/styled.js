import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #DDE1E6;
  border-radius: 8px;
  width: 100%;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  position: relative;
  
  img {
    width: 32px;
    height: 32px;
    min-width: 32px;
    object-fit: contain;
    object-position: center;
    margin-right: 16px;
    cursor: pointer;
  }
  
  .info {
    .name {
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
  }
  
  .react-player {
    visibility: hidden;
  }
`

export {
  Wrapper
}