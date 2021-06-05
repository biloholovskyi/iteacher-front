import styled from "styled-components";

const ChangeModalWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(1,1,1, .2);
`

const ChangeBody = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  width: 100%;
  max-width: 660px;
  min-height: 323px;
  display: flex;
  align-items: flex-end;
  padding: 24px;
  flex-direction: column;
  position: relative;
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.01em;
    color: #111111;
    margin-bottom: 24px;
    background-color: transparent;
    width: 100%;
  }
  .close {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 24px;
    top: 24px;
    object-position: center;
    object-fit: contain;
    cursor: pointer;
    background-color: transparent;
  }
`

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  & input:last-child {
  margin-bottom: 32px;
  }
  
`

const Input = styled.input`
  width: 100%;
  background: #DDE1E6;
  opacity: 0.8;
  border-radius: 8px;
  border: none;
  //min-height: 56px;
  margin-bottom: 23px;
  padding: 17px 16px;
  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #697077;
    opacity: 0.8;
  }
`

const ChangePassBtn =styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  background: #4F7FFF;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  padding: 14px 20px;
`

const ChangeSuccessBody = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  width: 100%;
  max-width: 432px;
  min-height: 197px;
  display: flex;
  align-items: flex-end;
  padding: 24px;
  flex-direction: column;
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.01em;
    color: #111111;
    margin-bottom: 8px;
    background-color: transparent;
    width: 100%;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #697077;
    margin-bottom: 24px;
    width: 100%;
    background-color: transparent;
  }
`

const ChangeSuccessBtn =styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  background: #4F7FFF;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  padding: 14px 20px;
  width: 100%;
`

export {ChangeSuccessBtn, ChangeSuccessBody, ChangePassBtn, ChangeBody, ChangeModalWrap, Form, Input}