import styled from "styled-components";

const LogOutModalWrap = styled.div`
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

const LogOutBody = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  width: 100%;
  max-width: 480px;
  min-height: 175px;
  display: flex;
  align-items: flex-start;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  .close {
    position: absolute;
    right: 25px;
    top: 25px;
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #111111;
    background-color: transparent;
    margin-bottom: 32px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #697077;
    background-color: transparent;
    margin-bottom: 24px;
  }
  .buttonSection {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    .no {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #4F7FFF;
      border: 1px solid #DDE1E6;
      box-sizing: border-box;
      border-radius: 6px;
      padding: 14px 0;
      margin-right: 24px;
      width: 100%;
      background-color: transparent;
      cursor: pointer;
    }
    .yes {
       font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #fff;
      border: none;
      background-color: #DA1E28;
      box-sizing: border-box;
      border-radius: 6px;
      padding: 14px 0;
      width: 100%;
      cursor: pointer;
    }
  }
`

export {LogOutBody, LogOutModalWrap}