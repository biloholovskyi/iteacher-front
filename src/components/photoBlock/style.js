import styled from "styled-components";

import camera from '../../assets/media/icon/camera.svg'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  cursor: pointer;
  
  .hidden-input {
    display: none;
  }
`

const Photo = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  .preview {
    min-width: 80px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #DDE1E6;
    background-image: url(${camera});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 36px;
    margin-right: 16px;
  }
  
  img {
    width: 80px;
    min-width: 80px;
    height: 80px;
    display: block;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-right: 16px;
  }
  
  .text {
    flex: 1;
    .title {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
    }
    
    .format {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #697077;
    }
  }
`

const Button = styled.div`
  border: 1px solid #DDE1E6;
  border-radius: 6px;
  padding: 14px 20px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #4F7FFF;
  background-color: transparent;
  cursor: pointer;
  white-space: nowrap;
`

const ButtonRed = styled.button`
  border: 1px solid #DDE1E6;
  border-radius: 6px;
  padding: 14px 20px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #DA1E28;
  background-color: transparent;
  cursor: pointer;
  margin-left: 16px;
  white-space: nowrap;
`

export {Wrapper, Photo, Button, ButtonRed}