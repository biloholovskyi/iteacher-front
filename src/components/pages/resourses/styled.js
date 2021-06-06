import styled from "styled-components";

const MainBtnWrap = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  background: #4F7FFF;
  border-radius: 6px;
  padding: 14px 20px;
  border: none; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: ${props => props.showIconRight ? 'row-reverse' : 'row'};
  img {
    width: 24px;
    height: 24px;
    margin-right: ${props => props.showIconRight ? '0' : '8px'};
    margin-left: ${props => props.showIconRight ? '8px' : '0'};
    object-fit: contain;
    object-position: center;
    background-color: transparent;
  }
`

const Caption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  
  h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #000000;
    
    @media (max-width: 575px) {
      font-size: 24px;
      line-height: 32px;
    }
    
  }
  .wrap {
    display: flex;
    align-items: center;
  }
`

const ResourcesWrap = styled.div`
  padding-top: 128px;
  
  .container {
    @media (max-width: 575px) {
      padding: 0 16px;
    }
  }
`

const TilesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  
  & .card:nth-child(3n) {
    margin-right: 0;
  }
`

export {
  MainBtnWrap,
  Caption,
  ResourcesWrap,
  TilesList
}