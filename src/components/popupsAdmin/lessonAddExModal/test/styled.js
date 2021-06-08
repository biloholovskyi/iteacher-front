import styled from "styled-components";

const ToggleBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 33px 0;

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #000000;
    opacity: 0.8;
    margin-right: 24px;
  }
`

const Answers = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  flex-direction: column;

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #000000;
    opacity: 0.8;
    margin-bottom: 16px;
    width: 100%;
  }

  .answers_block {
    width: 100%;
  }
`

const CheckBoxWrapper = styled.div`
  position: relative;
  width: 34px;
  height: 18px;
`

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 18px;
  border-radius: 15px;
  border: 1px solid #DDE1E6;
  background: #4F7FFF;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    //margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    margin-top: -2px;
    margin-left: 17px;
  }
`

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 34px;
  height: 18px;
  &:checked + ${CheckBoxLabel} {
    background: #DDE1E6;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 0;
      transition: 0.2s;
    }
  }
`

const Answer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  .checkbox {
    width: 20px;
    height: 20px;
    margin-right: 24px;
    margin-top: -16px;
  }
  
`

const MainBtnWrap = styled.button`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #4F7FFF;
  background: transparent;
  border-radius: 6px;
  padding: 14px 20px;
  border: none; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: row;
  img {
    width: 24px;
    height: 24px;
    margin-right: ${props => props.showIconRight ? '0' : '8px'};
    margin-left: ${props => props.showIconRight ? '8px' : '0'};
    object-fit: contain;
    object-position: center;
    background-color: transparent;
  }
`

const AddQuestion = styled.div`
  width: 100%;
  border-top: 1px solid #DDE1E6;
  border-bottom: 1px solid #DDE1E6;
  display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

export {ToggleBlock, AddQuestion, Answer, Answers, CheckBoxWrapper, CheckBoxLabel, CheckBox, MainBtnWrap }