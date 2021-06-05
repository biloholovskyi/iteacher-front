import styled from "styled-components";

const PersonalDataWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(1, 1, 1, .2);
`
const PersonalDataBody = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  width: 100%;
  max-width: 660px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: relative;

  .close {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-color: transparent;
    object-fit: contain;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 24px;
    background-color: transparent;
  }
`

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;

  .photoSection {
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;
    background-color: transparent;
    padding: 24px 0;

    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.01em;
      color: #111111;
      margin-bottom: 16px;
      background-color: transparent;
    }

    .photoWrap {
      display: flex;
      align-items: center;
      width: 100%;
      background-color: transparent;

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 16px;
      }
      
      .hidden-input {
        display: none;
      }
    }
  }

  .dateBlock {
    padding: 24px 0;
    border-top: 1px solid #DDE1E6;
    background-color: transparent;
    border-bottom: 1px solid #DDE1E6;

    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.01em;
      color: #111111;
      margin-bottom: 16px;
      background-color: transparent;
    }

    .dateSelect {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;

      .day,
      .month {
        margin-right: 24px;
      }
    }
  }
`
const InputWrap = styled.div`
  width: 100%;
  background: #DDE1E6;
  opacity: 0.8;
  border-radius: 8px;
  padding-top: 17px;
  position: relative;
  margin-bottom: 23px;

  .label {
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
      font-weight: normal !important;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.01em;
      color: #697077;
      opacity: 0.8;
      top: 14px;
    }

  }

  .labelEmail {
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
      font-weight: normal !important;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.01em;
      color: #697077;
      opacity: 0.8;
      top: 14px;
    }

  }

  .labelDay {
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
      font-weight: normal !important;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.01em;
      color: #697077;
      opacity: 0.8;
      top: 14px;
    }

  }

  .labelMonth {
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
      font-weight: normal !important;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.01em;
      color: #697077;
      opacity: 0.8;
      top: 14px;
    }

  }

  .labelYear {
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
      font-weight: normal !important;
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
`
const DeleteBtn = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #DA1E28;
  border: 1px solid #DDE1E6;
  border-radius: 6px;
  padding: 14px 26px;
  background-color: transparent;
  max-height: 48px;
  cursor: pointer;
`
const ChangeBtn = styled.label`
  border: 1px solid #DDE1E6;
  border-radius: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #4F7FFF;
  margin-right: 16px;
  padding: 14px 26px;
  background-color: transparent;
  max-height: 48px;
  cursor: pointer;
`
const SaveChange = styled.button`
  background: #4F7FFF;
  border-radius: 6px;
  max-width: 225px;
  margin-left: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
  padding: 14px 20px;
  border: none;
`
export {DeleteBtn, ChangeBtn, SaveChange, PersonalDataWrap, PersonalDataBody, Form, InputWrap}