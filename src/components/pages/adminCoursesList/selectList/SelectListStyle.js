import styled from 'styled-components';

import icon_arrow_down from '../../../../assets/media/icon/arrow_down_grey.svg';

const LabelWrap = styled.label`

  width: 100%;
  height: 56px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  border: none;
  border-radius: 8px;
  padding: 10px 16px 9px;
  background: #DDE1E6;

  font-size: 12px;
  line-height: 18px;
  color: #697077;

  margin-bottom: 24px;

  select {

    width: 100%;
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

      width: 450px;
      font-size: 12px;
      line-height: 18px;

    }

    &:focus {

      outline: transparent;

    }

  }

  .complexity {

    width: calc(100% - 16px);
    padding-left: 18px;

  }

  .select__boll {

    content: "";
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 31px;
    left: 16px;
    border-radius: 100%;
    background: #FF832B;

  }

  .option__down {

    display: block;
    width: 10px;
    height: 5px;
    background: url(${icon_arrow_down}) center center/cover no-repeat;
    position: absolute;
    top: 26px;
    right: 19px;
    fill: #697077;
    cursor: pointer;

  }

`;

export { LabelWrap };