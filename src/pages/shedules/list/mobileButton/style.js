import styled from "styled-components";

import icon from '../../../../assets/media/icon/arrow-white.svg'

const ButtonWrapper = styled.tr`
  .mobile-content {
    width: 100%;
    
    &__text {
      background-color: #4F7FFF;
      border: none;
      border-radius: 8px;
      width: 100%;
      padding: 19px 16px;
      position: relative;
      text-align: left;
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #FFFFFF;
      
      p:first-child {
        font-size: 16px;
      }
      
      .icon {
        position: absolute;
        width: 24px;
        height: 24px;
        background-image: url(${icon});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        top: 50%;
        margin-top: -12px;
        right: 16px;
      }
    }
  }
`

export {ButtonWrapper}