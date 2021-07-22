import styled from 'styled-components';

const TimeModalWrap = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  width: 100%;
  max-width: 294px;
  height: 298px;
  overflow: auto;
  position: absolute;
  z-index: 10;
  right: 24px;
  box-shadow: 0px 0px 16px rgb(105 112 119 / 12%), 0px 8px 16px rgb(105 112 119 / 16%);
  top: calc(100% - 86px);
  padding: 0 16px;
  div {
    &.active {
      background-color: red;
    }
  }
  .item {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #000000;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    border-bottom: 1px solid #DDE1E6;
    cursor: pointer;
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  @media(max-width: 630px) {
   height: 240px;
  }
`

export {
  TimeModalWrap
}