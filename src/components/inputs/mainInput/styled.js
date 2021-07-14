import styled from "styled-components";

import dd from '../../../assets/media/icon/dd.png'

const Wrapper = styled.div`
  width: ${props => props.width ? props.width + 'px' : '100%'};
  background-color: #DDE1E6;
  border-radius: 8px;
  height: 56px;
  min-height: 56px;
  position: relative;
  margin-bottom: 23px;
  
  &.wrapper-textarea {
    min-height: 224px;
  }

  .label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    background-color: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: ${props => props.ValiddationBg ? 'red' : '#697077'};
    opacity: 0.8;
    transition: .3s;
    z-index: 1;

    &.active {
      top: 15px;
      font-size: 12px;
      line-height: 18px;
      color: ${props => props.grey ? '#697077' : '#4F7FFF'};
      opacity: 0.8;
    }
  }

  .labelPass {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    background-color: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #697077;
    opacity: 0.8;
    transition: .3s;
    z-index: 1;

    &.active {
      top: 15px;
      font-size: 12px;
      line-height: 18px;
      color: #4F7FFF;
      opacity: 0.8;
    }
  }

  .input {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 10px 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #111111;
    opacity: 0.8;
  }
  
  .select {
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    cursor: pointer;

    option { 
      visibility: hidden; 
      display: none;
    }
    
  }
  
  textarea {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 10px 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #111111;
    opacity: 0.8;
    resize: none;
    min-height: 224px;
  }
  
  .select-arrow {
    position: absolute;
    background-image: url(${dd});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat; 
    width: 24px;
    height: 24px;
    top: 50%;
    margin-top: -12px;
    margin-right: 0 !important;
    right: 12px;
    transform: rotate( ${props => props.fakeBg ? '180deg' : '0deg'};);
  }

  &.valid {
    background: linear-gradient(0deg, rgba(218, 30, 40, 0.1), rgba(218, 30, 40, 0.1)), #FFFFFF;
    border: 1px solid rgba(218, 30, 40, 0.1);

    .label {
      color: red;
    }
  }

  .errorText {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #DA1E28;
    opacity: 0.8;
    margin-left: 14px;
    margin-top: 3px;
  }
  
  .fake {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: transparent;
    opacity: .2;
    left: 0;
    top: 0;
    z-index: 12;
    display:  ${props => props.fakeBg ? 'block' : 'none'};
  }

`

const DropLIstItems = styled.ul`
  width: 100%;
  box-shadow: 0px 8px 38px -4px rgb(33 39 42 / 10%);
  background: #fff;
  position: absolute;
  z-index: 100;
  border-radius: 8px;
  top: 0px;
  left: 0;
  padding: 8px 16px;
  overflow: auto;
  max-height: 160px;
  z-index: 14;
  .listItem {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #111111;
    min-height: 48px;
    cursor: pointer;
  }
  
  &::-webkit-scrollbar {
    display: none;
  }
  
`

export {Wrapper, DropLIstItems}