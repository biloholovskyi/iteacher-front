import styled from "styled-components";

import iconDots from './media/dots.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 32px;
  
  img {
    width: 76px;
    height: 76px;
    min-width: 76px;
    object-position: center;
    object-fit: cover;
    margin-right: 16px;
    border-radius: 50%;
  }
  
  .name {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
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
  }
`

const Dots = styled.div`
  background-image: url(${iconDots});
  background-position: center;
  background-size: contain;
  width: 16px;
  height: 4px;
  position: absolute;
  top: 15px;
  right: 0;
  cursor: pointer;
`

export {
  Wrapper,
  Dots
}