import styled from "styled-components";

const TextareaWrap = styled.div`
  width: 100%;
  background: #DDE1E6;
  opacity: 0.8;
  border-radius: 8px;
  //padding-top: 15px;
  position: relative;
  margin-bottom: 32px;
  min-height: 224px;
  label {
    position: absolute;
    left: 16px;
    top: 15px;
    //transform: translateY(-50%);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #697077;
    opacity: 0.8;
    z-index: 2;
    background-color: transparent;
    transition: .3s;

    &.active {
      font-style: normal;
      font-weight: normal!important;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.01em;
      color: #697077;
      opacity: 0.8;
      top: 4px;
    }
    
  }

  textarea {
    width: 100%;
    height: 224px;
    padding: 17px 16px 17px;
    border: none;
    background-color: transparent;
    z-index: 3;
    position: relative;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #111111;
    opacity: 0.8;
    resize: none;
  }
`;

export { TextareaWrap };