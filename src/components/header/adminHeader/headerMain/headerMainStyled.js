import styled from "styled-components";

import icon_bell from "../../../../assets/media/icon/bell.svg";
import img_ava from "../../../../assets/media/icon/avatar.svg";

const Logos = styled.img`

  width: 175px;
  height: 48px;
  cursor: pointer;
  object-fit: cover;

  @media (max-width: 575px) {
    width: 124px;
    height: 32px;
  }

`;

const NavList = styled.ul`

  display: flex;
  flex-flow: row wrap;

  @media (max-width: 767px) {
    display: none;
  }

  a {

    text-decoration: none;
    outline: transparent;

  }

  li {

    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    list-style-type: none;
    margin: 0 20px;
    color: #697077;
    cursor: pointer;
    outline: transparent;

    &_active,
    &:focus {
      color: #000000;
    }

  }

`;

const AvatarBlock = styled.div`

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  .bell {
    width: 16px;
    height: 20px;
    margin-right: 28px;
    background: url(${icon_bell}) center center/cover no-repeat;
    cursor: pointer;
  }

  .face {
    border-radius: 100px;
    width: 40px;
    height: 40px;
    background: url(${props => props.avatar ? props.avatar : img_ava}) center center/cover no-repeat;
    cursor: pointer;
    @media (max-width: 767px) {
      display: none;
    }

  }

  .burger {
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
    display: none;

    @media (max-width: 767px) {
      display: block;
    }

  }

`;

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
  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 50px;

    a {
      font-style: normal!important;
      font-weight: 700!important;
      font-size: 25px!important;
      line-height: 60px!important;
      color: #111;
      li {
        font-style: normal!important;
        font-weight: 700!important;
        font-size: 25px!important;
        line-height: 60px!important;
        color: #111;
        margin: 0;
      }
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
  background-color: rgba(0, 0, 0, .5);
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

export {AvatarBlock, NavList, Logos, MobileWrap, MobileWrapOverylay}