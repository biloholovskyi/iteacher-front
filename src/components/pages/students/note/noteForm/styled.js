import styled from "styled-components";

const InputWrap = styled.form`
  padding: 0 24px;
  background-color: #fff;
  position: relative;

  input {
    width: 100%;
    background: #DDE1E6;
    opacity: 0.8;
    border-radius: 8px;
    min-height: 48px;
    border: none;
    padding-left: 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
    opacity: 0.8;

    &::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #697077;
      opacity: 0.8;
    }
  }

  .add {
    position: absolute;
    right: 25px;
    height: 100%;
    border: none;
    background: #4F7FFF;
    border-radius: 8px;
    width: 48px;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
      object-position: center;
      object-fit: contain;
      background-color: transparent;
    }
  }
`

export {
  InputWrap
}