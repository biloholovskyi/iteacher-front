import styled from "styled-components";

import icon_arrow_left from '../../../../assets/media/icon/arrow_left.svg';

const IconArrow = styled.a`

  display: block;
  width: 16px;
  height: 16px;
  background: url(${icon_arrow_left}) center center/cover no-repeat;
  cursor: pointer;
  &:focus {
      outline: transparent;
  }

`;

const HeaderInput = styled.input`

  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #111111;
  margin-left: 28px;
  margin-right: auto;
  border: none;

  &:hover {

    color: rgba(17, 17, 17, 0.6);

  }

  &:focus {

    width: 420px;
    outline: transparent;
    color: rgba(17, 17, 17, 0.6);
    border-bottom: 1px solid #DDE1E6;

  }

`;

const ChangeTime = styled.span`

  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #697077;
  margin-right: 24px;

`;

export { IconArrow, HeaderInput, ChangeTime };