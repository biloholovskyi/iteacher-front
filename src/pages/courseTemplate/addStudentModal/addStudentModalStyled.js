import styled from "styled-components";

const StudentModalWrap = styled.div`
  width: 100%;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  height: 100%;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(1,1,1,.2);
  
  @media (max-width: 767px) {
    padding: 0 16px;
  }
  
`
const StudentModal = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  max-width: 660px;
  min-height: 300px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  position: relative;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  
  h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 24px;
  background-color: #fff;
  padding: 0 24px;
    
    @media (max-width: 575px) {
     font-size: 20px;
    }
    
  }
  .close {
    position: absolute;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    top: 24px;
    right: 24px;
    background-color: #fff;
    cursor: pointer;
  }
`
const TabHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #DDE1E6;
    margin-bottom: 32px;
    width: 100%;
    background-color: #fff;
    padding: 0 0px 0 24px;
`

const TabHeadNav = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #697077;
  padding-bottom: 20px;
  cursor: pointer;
  background-color: #fff;
 &.tabs-active {
    color: #000;
    padding-bottom: 19px;
    border-bottom: 2px solid #4F7FFF;
  }
  &:first-child {
    margin-right: 32px;
  }
`
const TabBody = styled.div`
  padding: 0 24px;
  width: 100%;
  .invite {
    width: 100%;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    background: #4F7FFF;
    box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
    border-radius: 6px;
    padding: 14px 0;
    border: none;
    cursor: pointer;
  }
`

const Invite = styled.form`
  width: 100%;
  input {
    width: 100%;
    background: #DDE1E6;
    opacity: 0.8;
    border-radius: 8px;
    padding: 13px 16px;
    border: none;
    margin-bottom: 31px;
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
`

export {Invite,StudentModalWrap, StudentModal,TabBody,TabHead,TabHeadNav}