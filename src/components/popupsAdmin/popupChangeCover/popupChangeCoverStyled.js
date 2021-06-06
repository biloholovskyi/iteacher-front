import styled from 'styled-components';

const CoverWrap = styled.div`
  width: 100%;
  max-width: 492px;
  user-select: none;

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

        min-height: 376px;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        border: 2px dashed #DDE1E6;
        border-radius: 8px;
        margin-top: 24px;

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

`;

export { CoverWrap };