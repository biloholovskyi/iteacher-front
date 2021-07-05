import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 30.83%, #F8F9FB 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    background: linear-gradient(180deg, #FFFFFF 0%, #F8F9FB 100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .decor {
    border-radius: 50%;
    position: absolute;

    &--1 {
      width: 180px;
      height: 180px;
      top: 256px;
      left: -114px;
      background: linear-gradient(154.48deg, rgba(138, 63, 252, 0.4) 0%, rgba(79, 127, 255, 0.4) 83.85%), #FFFFFF;
    }
    
    &--2 {
      width: 32px;
      height: 32px;
      right: 145px;
      top: 121px;
      background: #33B1FF;
    }
    
    &--3 {
      width: 8px;
      height: 8px;
      right: 316px;
      top: 162px;
      background: #4F7FFF;
    }
    
    &--4 {
      width: 48px;
      height: 48px;
      right: 266px;
      top: 371px;
      background: #EE5396;
    }
  }
  
  .yellow {
    border-radius: 50%;
    width: 1440px;
    height: 1440px;
    right: -480px;
    bottom: -750px;
    background: radial-gradient(50% 50% at 50% 50%, rgba(255, 177, 105, 0.3) 0%, rgba(255, 177, 105, 0) 100%);
    position: absolute;
    z-index: 2;
  }
  
  .purple {
    position: absolute;
    z-index: 2;
    width: 1440px;
    height: 1440px;
    left: -480px;
    top: -750px;
    background: radial-gradient(50% 50% at 50% 50%, rgba(136, 92, 255, 0.3) 0%, rgba(136, 92, 255, 0) 100%);
  }
  
  .mint {
    position: absolute;
    width: 1440px;
    height: 1440px;
    right: -480px;
    top: -750px;
    z-index: 2;
    background: radial-gradient(50% 50% at 50% 50%, rgba(79, 127, 255, 0.3) 0%, rgba(79, 127, 255, 0) 100%);
  }
  
  .orange {
    position: absolute;
    width: 1440px;
    height: 1440px;
    left: -480px;
    bottom: -750px;
    z-index: 2;
    background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  }
`

export {
  Wrapper
}