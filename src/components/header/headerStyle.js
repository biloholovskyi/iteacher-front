import styled from "styled-components";

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 20px 48px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 0 4px rgba(105, 112, 119, 0.08), 0px 4px 4px rgba(105, 112, 119, 0.16);
  background-color: #fff;
  z-index: 10;
  a {
   text-decoration: none;
  }
  
  @media (max-width: 991px) {
    padding: 16px;
  }

  @media (max-width: 575px) {
    padding: 12px 16px;
  }
  
`
const Logo = styled.img`
  width: 175px;
  height: 48px;
  cursor: pointer;
  object-fit: cover;

  @media (max-width: 575px){
    width: 124px;
    height: 32px;
  }
  
`
const NavList = styled.nav`
  
  @media (max-width: 767px) {
    display: none;
  }
  
    a {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #707070;
      letter-spacing: -0.01em;
      margin-right: 40px;
      text-decoration: none;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
    }
    & a.active {
      color: #111!important;
      font-weight: normal!important;
      }
`

const AvatarBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  .bell {
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    margin-right: 24px;
    cursor: pointer;
  }
  .ava {
    width: 40px;
    height: 40px;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
    border-radius: 50%;
    display: block;
    
    @media (max-width: 767px){
      display: none;
    }
    
  }
  
  .burger {
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
    display: none;
    
    @media (max-width: 767px){
      display: block;
    }
    
  }
  
`
const ProfileModalWrap = styled.div`
  position: absolute;
  top: 70px;
  right: 43px;
  background: #FFFFFF;
  box-shadow: 0px 0px 6px rgba(105, 112, 119, 0.08), 0px 4px 8px rgba(105, 112, 119, 0.1);
  border-radius: 8px;
  width: 100%;
  max-width: 320px;
  max-height: 402px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;
  z-index: 30;
  .btnSection {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0 16px;
    background-color: transparent;
  }
`

const Photo = styled.img`
  width: 120px!important;
  height: 120px!important;
  object-fit: cover;
  object-position: center;
  margin-bottom: 16px;
  background-color: transparent;
  border-radius: 50%;
`
const Name = styled.div`
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 26px;
letter-spacing: -0.01em;
color: #111111;
margin-bottom: 4px;
background-color: transparent;
`
const Email = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #697077;
    padding-bottom: 16px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #DDE1E6;
    background-color: transparent;
    margin-bottom: 8px;

`
const PersonalData = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111111;
  cursor: pointer;
  min-height: 48px;
  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin-right: 12px;
  }
`
const ChangePassword = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111111;
  cursor: pointer;
  min-height: 48px;
  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin-right: 12px;
  }
`
const Exit = styled.button` 
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #DA1E28;
  cursor: pointer;
  min-height: 48px;
  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin-right: 12px;
  }
`

const MobileWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 360px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 0 4px rgb(105 112 119 / 8%), 0px 4px 4px rgb(105 112 119 / 16%);
  //transform: translateX(150%);
  nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 50px;
    
    a {
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 60px;
      color: #111;
    }

    @media (max-width: 575px) {
      width: unset;
      height: unset;
    }
    
  }
  
  @media (max-width: 575px) {
    max-width: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  
`

const MobileWrapOverylay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  top: 0;
  left: 0;
  z-index: 999;
  
  .close {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 1001;
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
  
`

export {
  AvatarBlock,
  NavList,
  Logo,
  HeaderWrap,
  PersonalData,
  Photo,
  ProfileModalWrap,
  Name,
  ChangePassword,
  Exit,
  Email,
  MobileWrap,
  MobileWrapOverylay
}