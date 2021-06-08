import styled from "styled-components";

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

const ImageZone = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 32px;
  
  .bannerVisible {
    width: 100%;
    min-height: 342px;
    max-height: 342px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .hidden-input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        z-index: 3;
        cursor: pointer;
        opacity: 0;
  }
  
`

export {TextModalBody, TextModalOverlay, ImageZone}