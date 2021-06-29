import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px dashed #DDE1E6;
  border-radius: 8px;
  padding: 11px 16px;
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  
  .img-wrapper {
    border-radius: 50%;
    width: 32px;
    max-width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DDE1E6;
    margin-right: 16px;
    
    img {
      width: 24px;
      max-width: 24px;
      height: 24px;
      object-position: center;
      object-fit: contain;
    }
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
`

export {
  Wrapper
}