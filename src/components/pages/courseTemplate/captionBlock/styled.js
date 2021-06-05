import styled from "styled-components";

const CaptionBlockWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 120px;
  justify-content: space-between;
  margin-bottom: 32px;
  .left {
    display: flex;
    align-items: center;
    
    .nameBlock {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      .name {
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 36px;
        letter-spacing: -0.01em;
        color: #000000;
        margin-bottom: 4px;
      }
      .desc {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: #697077;
      }
    }
    
  }
  .settings {
    border: 1px solid #DDE1E6;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }
`

export {
  CaptionBlockWrap
}