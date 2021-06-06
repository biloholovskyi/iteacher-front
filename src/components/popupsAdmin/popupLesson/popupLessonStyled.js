import styled from 'styled-components';

import icon_arrow_down from '../../../../assets/media/icon/arrow_down_grey.svg';

const PopupCourseWrap = styled.div`

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;
  position: relative;

  .popup-course {

    &__title {

      font-size: 14px;
      line-height: 18px;
      color: #111111;
      margin-right: 24px;

    }

    &__select {

      /* width: 72px; */
      height: 40px;
      padding: 11px 47px 11px 16px;
      border-radius: 8px;
      border: none;
      background: #DDE1E6;
      font-size: 14px;
      color: #111111;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;

      /* стили необходимы для option */
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: -0.01em;

      option {

        font-size: 12px;
        line-height: 18px;

      }

      &:focus {

        outline: transparent;

      }

    }

    &__down {

      display: block;
      width: 10px;
      height: 5px;
      background: url(${icon_arrow_down}) center center/cover no-repeat;
      position: absolute;
      top: 19px;
      right: 19px;
      fill: #697077;
      cursor: pointer;

    }

    label {
      margin-bottom: 0px;
    }
  }

`;

export { PopupCourseWrap };
