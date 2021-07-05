import styled from "styled-components";

import decor from  './media/triangles.svg'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  
  .left {
    padding-right: 115px;
    width: 448px;
    
    &__title {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -0.01em;
      color: #000000;
      margin-top: 24px;
    }
    
    &__title-bottom {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -0.01em;
      color: #FFFFFF;
      background: linear-gradient(90deg, #8A3FFC 0.01%, #4F7FFF 99.99%), #FFFFFF;
      border-radius: 4px;
      padding: 0 8px;
      margin-left: -8px;
      margin-bottom: 32px;
    }
  }
  
  .right {
    padding: 32px;
    background: #FFFFFF;
    border: 1px solid #DDE1E6;
    box-shadow: 0 100px 80px rgba(0, 0, 0, 0.04), 0 41.7776px 33.4221px rgba(0, 0, 0, 0.0287542), 0 22.3363px 17.869px rgba(0, 0, 0, 0.0238443), 0 12.5216px 10.0172px rgba(0, 0, 0, 0.02), 0 6.6501px 5.32008px rgba(0, 0, 0, 0.0161557), 0 2.76726px 2.21381px rgba(0, 0, 0, 0.0112458);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      width: 69px;
      height: 63.5px;
      top: -23px;
      left: -20px;
      margin-top: -63.5px;
      background-image: url(${decor});
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    
    &__title {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      letter-spacing: -0.01em;
      color: #697077;
      margin-bottom: 16px;
      
      &--8 {
        margin-bottom: 8px;
      }
    }

    &__all-price {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -0.01em;
      color: #000000;
      margin-bottom: 32px;
    }
  }
`

const Logos = styled.img`
  width: 294.15px;
  height: 26px;
  margin-top: 32px;
  object-position: center;
  object-fit: contain;
`

export {
  Wrapper,
  Logos
}