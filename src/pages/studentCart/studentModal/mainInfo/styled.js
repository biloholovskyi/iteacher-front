import styled from "styled-components";

import icon from './media/icon.svg'

const Wrapper = styled.div`
  
`

const AvatarBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .photo {
    width: 96px;
    min-width: 96px;
    height: 96px;
    border-radius: 50%;
    margin-bottom: 16px;
    background-image: url(${props => props.bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    cursor: pointer;
    
    &::after {
      content: '';
      width: 32px;
      height: 32px;
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 50%;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url(${icon});
    }
  }
  
  .name {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 4px;
  }
  
  .subs {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #697077;
    margin-bottom: 32px;
  }
`

const Line = styled.div`
  width: calc(100% + 48px);
  height: 1px;
  background-color: #DDE1E6;
  margin-top: 32px;
  margin-left: -24px;
`

export {
  Wrapper,
  AvatarBlock,
  Line
}