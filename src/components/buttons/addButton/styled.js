import styled from "styled-components";

import plus from '../../../assets/media/icon/plus-blue.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  .button {
    width: ${props => props.status === 'small' ? '24px' : '40px'};
    min-width: ${props => props.status === 'small' ? '24px' : '40px'};;
    height: ${props => props.status === 'small' ? '24px' : '40px'};;
    background-color: rgba(79, 127, 255, 0.1);
    border: 1px dashed #4F7FFF;
    border-radius: 50%;
    margin-right: ${props => props.status === 'small' ? '10px' : '16px'};;
    background-image: url(${plus});
    background-position: center;
    background-size: ${props => props.status === 'small' ? '7px' : '14px'};;
    background-repeat: no-repeat;
  }
  
  .text {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.status === 'small' ? '14px' : '16px'};;
    line-height: ${props => props.status === 'small' ? '20px' : '22px'};;
    letter-spacing: -0.01em;
    color: #4F7FFF;
  }
`

export {Wrapper}