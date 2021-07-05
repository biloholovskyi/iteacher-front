import styled from "styled-components";

import icon_cross_white from '../../../assets/media/icon/cross_white.svg';

const ButtonMain = styled.button`

  cursor: pointer;
  position: relative;
  padding: 14px 20px;
  background: #4F7FFF;
  border: none;
  border-radius: 6px;

  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  font-family: 'Inter', 'Roboto', sans-serif;
  letter-spacing: -0.01em;

  background: #4F7FFF;
  box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12),
  0px 1px 2px rgba(105, 112, 119, 0.2);

  &:focus {
    outline: transparent;
  }


`;

const ButtonAdd = styled(ButtonMain)`

  padding-left: 56px;

  &:before {

    content: "";
    display: block;
    width: 18px;
    height: 18px;

    position: absolute;
    top: 15px;
    left: 23px;
    background: url(${icon_cross_white});

  }
`;

const ButtonAddRound = styled(ButtonAdd)`
  padding: 28px;
  border-radius: 100%;
  position: sticky !important;
  bottom: 16px;
  width: 56px;
  height: 56px;
  box-shadow: 0 15px 12px rgba(105, 112, 119, 0.12), 0 19px 38px rgba(105, 112, 119, 0.16);

  &:before {
    top: 19px;
    left: 19px;
  }
`;

const ButtonAddPopup = styled(ButtonMain)`

  width: 100%;

`;

const ButtonCover = styled(ButtonMain)`

  font-size: 14px;

`;

const ButtonCancel = styled(ButtonMain)`

  border: 1px solid #DDE1E6;
  background: #fff;
  border-radius: 6px;
  box-shadow: none;
  color: #4F7FFF;
  margin-right: 24px;
  width: calc(50% - 12px);

`;

const ButtonEnter = styled(ButtonMain)`

  box-shadow: none;
  width: calc(50% - 12px);

`;

export {ButtonMain, ButtonAdd, ButtonAddRound, ButtonAddPopup, ButtonCover, ButtonCancel, ButtonEnter}
