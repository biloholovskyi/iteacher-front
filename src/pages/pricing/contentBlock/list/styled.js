import styled from "styled-components";

import check from './media/check.svg'

const Item = styled.div`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: flex-start;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 26px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '';
    width: 24px;
    height: 24px;
    background-image: url(${check});
    margin-right: 16px;
  }
`

export {
  Item
}