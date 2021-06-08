import styled from "styled-components";

const TextModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(1,1,1,.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
`

const TextModalBody = styled.div`
  width: 100%;
  max-width: 660px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: relative;
  padding: 24px;
  max-height: 745px;
  
  .closed {
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 24px;
  }
  
  .caption {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 24px;
    width: 100%;
    .title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #000000;
  }
  
    .arrow_back {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
      background-color: transparent;
    }
    
  }
  }

`

const Slider = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
    margin-bottom: 24px;
  }
  
  .flex {
    display: flex;
    align-items: center;
    width: 100%;
    
    .download {
      border: 2px dashed #DDE1E6;
      background-color: transparent;
      border-radius: 8px;
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    
  }
  
`

export {TextModalBody, TextModalOverlay, Slider}