import styled from 'styled-components';

import icon_play from '../../../assets/media/icon/document.svg';
import icon_change from '../../../assets/media/icon/refresh.svg';

const DocumentWrap = styled.div`

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 7px;

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

export { DocumentWrap };