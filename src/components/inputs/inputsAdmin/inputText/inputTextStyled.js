import styled from "styled-components";

const InputWrap = styled.div`
  width: 100%;
  background: #DDE1E6;
  opacity: 0.8;
  border-radius: 8px;
  padding-top: 17px;
  position: relative;
  margin-bottom: 23px;

  label {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
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
      top: 14px;
    }
    
  }

  input {
    width: 100%;
    width: 100%;
    padding: 0 16px 17px;
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
  }
`;

export { InputWrap };