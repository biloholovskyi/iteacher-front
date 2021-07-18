import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  padding: 0 48px;
  background-color: #fff;

  .submit {
    background-color: ${props => props.disabledBtn.length <= 0 ? '#DDE1E6' : props.disabledBtn === true ? '#DDE1E6' : '#4F7FFF'}; 
    box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
    border-radius: 6px;
    width: 100%;
    padding: 14px 0;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: ${props => props.disabledBtn.length <= 0 ? '#A2A9B0' : props.disabledBtn === true ? '#A2A9B0' : '#fff'};
    border: none;
    cursor: pointer;
    margin-bottom: 0;
  }

  .forget {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 48px;
    background-color: #fff;

    p {
      background-color: #fff;
      margin-right: 8px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
    }

    button {
      background-color: transparent;
      border: none;
      text-decoration: underline;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #4F7FFF;
      cursor: pointer;
    }
  }

`

const SocialBLock = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;

  a {
    background-color: #fff;
    border: 1px solid #DDE1E6;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 24px;

    img {
      width: 20px;
      height: 20px;
    }
  }

  & a:last-child {
    margin-right: 0;
  }
`

export {
  SocialBLock,
  Form
}