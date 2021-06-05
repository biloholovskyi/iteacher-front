import styled from "styled-components";

const WithOutHeaderContainer = styled.div`
  position: relative;
  z-index: 10;
  background-color: #E5E5E5;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`

const SignInModal = styled.div`
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  background-color: #fff;
  max-width: 660px;
  width: 100%;
  height: 100%;
  max-height: 834px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 40px 0 0;
  margin-bottom: 32px;
  
  .logo {
    width: 171px;
    height: 48px;
    object-fit: contain;
    margin-bottom: 24px;
  }

  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 16px;
    background-color: #fff;
  }
  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #000000; 
    margin-bottom: 32px;
  }
`

const SignInModalWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  padding: 20px 0;
  .registration_block {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #000000;
    
    a {
      font-style: normal;
      font-weight: normal!important;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      text-decoration-line: underline;
      color: #4F7FFF; 
    }
    
  }
  
`

const TabsHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #DDE1E6;
  margin-bottom: 48px;
  width: 100%;
  background-color: #fff;
  padding: 0 48px;
`

const TabsHeadNav = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #697077;
  padding-bottom: 20px;
  cursor: pointer;
  background-color: #fff;
  flex: 50%;
  text-align: center;

  &.tabs-active {
    color: #000;
    padding-bottom: 18px;
    border-bottom: 2px solid #4F7FFF;
  }
`

const TabsBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
`

const SignInForm = styled.form`
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
    margin-bottom: 45px;
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
  
  .desc {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #697077;
    margin-bottom: 24px;
  }

`

const Inputs = styled.div`
  width: 100%;
  background: #DDE1E6;
  border-radius: 8px;
  height: 56px;
  position: relative;
  margin-bottom: 23px;

  .label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    background-color: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #697077;
    opacity: 0.8;
    transition: .3s;
    z-index: 1;

    &.active {
      top: 15px;
      font-size: 12px;
      line-height: 18px;
      color: #4F7FFF;
      opacity: 0.8;
    }
  }

  .labelPass {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    background-color: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #697077;
    opacity: 0.8;
    transition: .3s;
    z-index: 1;

    &.active {
      top: 15px;
      font-size: 12px;
      line-height: 18px;
      color: #4F7FFF;
      opacity: 0.8;
    }
  }

  .input {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 10px 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #111111;
    opacity: 0.8;
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
  Inputs,
  SignInForm,
  WithOutHeaderContainer,
  SignInModal,
  SignInModalWrapp,
  TabsBody,
  TabsHead,
  TabsHeadNav
}