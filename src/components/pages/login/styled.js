import styled from "styled-components";

const WithOutHeaderContainer = styled.div`
  position: relative;
  z-index: 10;
  background-color: #E5E5E5;

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

const SignInModal = styled.div`
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  background-color: #fff;
  max-width: 660px;
  width: 100%;
  height: 100%;
  max-height: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 40px 0;
  margin-bottom: 32px;
  
  .logo {
    width: 171px;
    height: 48px;
    object-fit: contain;
    margin-bottom: 32px;
  }

  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 24px;
    background-color: #fff;
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

const TabsBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
`

export {
  WithOutHeaderContainer,
  SignInModal,
  SignInModalWrapp,
  TabsBody
}