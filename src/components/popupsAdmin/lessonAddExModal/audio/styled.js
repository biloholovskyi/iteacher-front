import styled from "styled-components";

import icon_play from "../../../../assets/media/icon/audio.svg";
import icon_change from "../../../../assets/media/icon/refresh.svg";

const TextModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(1,1,1,.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
`

const TextModalBody = styled.div`
  width: 100%;
  max-width: 660px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: relative;
  padding: 24px;
  max-height: 745px;
  
  .closed {
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 24px;
  }
  
  .caption {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 24px;
    width: 100%;
    .title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #000000;
  }
  
    .arrow_back {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
      background-color: transparent;
    }
    
  }
  }
  
  .cover {

    &__row {

      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: flex-start;

      &_1 {

        display: flex;
        width: calc(100% + 48px);
        margin-left: -24px;
        padding-left: 24px;
        border-bottom: 1px solid #DDE1E6;

      }

      &_2 {

        justify-content: space-between;
        flex-flow: row wrap;
        padding-top: 8px;

      }

      &_3 {

        min-height: 342px;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        border: 2px dashed #DDE1E6;
        border-radius: 8px;
        margin-bottom: 32px;

      }

    }

    &__gradient, &__image {

      color: #697077;
      line-height: 22px;
      padding-bottom: 18px;
      position: relative;

      &:hover {
        cursor: pointer;
      }

      &:focus {

        color: #000000;
        outline: transparent;

      }

    }

    &__gradient_active:after, &__image_active:after {

      content: "";
      display: block;
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: -1px;
      left: 0;
      background: #4F7FFF;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      z-index: 5;

    }

    .cover__active {

      display: block;

    }

    &__gradient {

      margin-right: 32px;

    }

    &__gradient-item {

      margin-top: 16px;
      width: 111px;
      height: 111px;
      border-radius: 8px;
      cursor: pointer;

    }

    &__title {

      font-size: 24px;
      line-height: 32px;
      margin-bottom: 8px;

    }

    &__subtitle {

      font-size: 16px;
      line-height: 22px;
      color: #697077;
      margin-bottom: 16px;

    }

  } 
`

const AudioWrap = styled.div`

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #DDE1E6;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  padding: 19px 24px;
  
  .video {

    &__container {

      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      background-color: #DDE1E6;
      margin-right: 16px;
      border-radius: 50%;
      
    }

    &__play {

      width: 18px;
      height: 18px;
      background: url(${icon_play}) center center/contain no-repeat;
      cursor: pointer;
    }

    &__wrap {

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      &_1 {

        flex-flow: column nowrap;
        margin-right: auto;

      }

      &_2 {

        flex-flow: row nowrap;
        align-items: center;
        cursor: pointer;

      }

    }

    &__subtext {

      font-size: 14px;
      line-height: 20px;
      color: #697077;

    }

    &__icon {

      display: block;
      width: 20px;
      height: 16px;
      background: url(${icon_change}) center center/cover no-repeat;
      margin-right: 9px;

    }

    &__remove {

      color: #4F7FFF;

    }

  }

  .delete_btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 5;
    width: 24px;
    height: 24px;
    img {
      width: 24px;
      height: 24px;
      background-color: transparent;
      object-fit: contain;
    }
    
  }

`;

export {TextModalBody, TextModalOverlay, AudioWrap}