import styled from 'styled-components';

import photo_screen from '../../../assets/media/image/media-photo.png';
import icon_change from '../../../assets/media/icon/refresh.svg';

const ImageWrap = styled.div`

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 7px;

  .image {

    &__container {
      width: 100%;
      height: 100%;
      max-height: 522px;
      min-height: 400px;
      position: relative;
      border-radius: 8px;
      object-position: center;
      object-fit: cover;
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

`;

export { ImageWrap };
