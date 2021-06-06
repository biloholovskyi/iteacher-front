import styled from 'styled-components';

import icon_close from '../../../assets/media/icon/cross_rotate.svg';

const PopupWrapper = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 200;

`;

const PopupContainer = styled.div`

  width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 54px;
  padding-bottom: 54px;

  .popup__title {

    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 24px;

    &_delete {

      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 8px;

    }

  }

`;

const Content = styled.div`

  min-width: 539px;
  max-width: 660px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12),
              0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  padding: 24px;
  position: relative;

`;


const PopupTitle = styled.div`

  user-select: none;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  margin-bottom: 24px;

`;

const PopupTitleSmall = styled.div`

  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 8px;

`;
  

const PopupClose = styled.div`{

    width: 18px;
    height: 18px;
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
    background: url(${icon_close}) center center/cover no-repeat;

  }

`;

export { PopupWrapper, PopupContainer, Content, PopupClose, PopupTitle, PopupTitleSmall };