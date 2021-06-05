import styled from 'styled-components';

import photo_screen from '../../../assets/media/image/media-photo.png';
import icon_change from '../../../assets/media/icon/refresh.svg';

const ImageWrap = styled.div`

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 7px;

  .image {

    &__container {

      width: 100%;
      height: 100%;
      max-width: calc(100% / 4 - 11px);
      max-height: 164px;
      position: relative;
      border-radius: 8px;
      background-size: cover !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      margin-right: 14px;
     margin-bottom: 14px;
     
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
  
  & .image__container:nth-child(4n) {
      margin-right: 0;
    }

`;

export { ImageWrap };
