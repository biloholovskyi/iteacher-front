import styled from "styled-components";

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

const SortBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  img {
        background-color: transparent;
        width: 24px;
        height: 24px;
        object-fit: contain;
        object-position: center;
      }
      & img:first-child {
        margin-right: 8px;
      } 
      & p:nth-child(2) {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #697077;
        margin-right: 8px;
        cursor: pointer;
      }
      & p:nth-child(3) {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #111111;
        cursor: pointer;
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

const Input = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background-color: #DDE1E6;
      opacity: 0.8;
      border-radius: 8px;
      width: 100%;
      min-height: 48px;
      padding: 0 16px;
      margin-right: 20px;
      flex: 3;
      img {
        background-color: transparent;
        width: 24px;
        height: 24px;
        object-fit: contain;
        object-position: center;
        margin-right: 12px;
      }
      input {
        background-color: transparent;
        border: none;
        width: 100%;
        height: 100%;
        padding: 12px 0px;
        border-radius: 8px;
      }
`

const DropDown = styled.div`
      display: flex;
      align-items: center;
       justify-content: space-between;
      position: relative;
      background-color: #DDE1E6;
      opacity: 0.8;
      border-radius: 8px;
      width: 100%;
      min-height: 48px;
      padding: 12px 16px;
      cursor: pointer;
      margin-right: 24px;
      flex: 1;
      img {
        background-color: transparent;
        width: 24px;
        height: 24px;
        object-fit: contain;
        object-position: center;
      }
      p {
        display: inline-block;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #697077;
        opacity: 0.8;
        background-color: transparent;
      }
`

const SearchBlock = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    & .dropDown:last-child {
      margin-right: 0;
    }
`

const ResourcesItemWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px 0px 0;
  min-height: 80px;
  margin-bottom: 8px;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  background-color: #fff;
  
  .titleBlock {
    display: flex;
    align-items: center;
    background-color: #fff;
    //margin-right: 80px;
    //max-width: 500px;
    flex: 3;
    padding-right: 20px;
  }
  .nameBlock {
     display: flex;
    align-items: center;
    background-color: #fff;
    flex: 1;
    margin-right: 24px;
    justify-content: flex-start;
    align-items: center;
  }
  .dateBlock {
     display: flex;
    align-items: center;
    background-color: #fff;
    flex: 1;
    margin-right: 24px;
    justify-content: flex-start;
    align-items: center;
  }
  .timeBlock {
    display: flex;
    align-items: center;
    background-color: #fff;
    flex: 1;
    margin-right: 24px;
    justify-content: flex-start;
    align-items: center;
  }
`

const Image = styled.img`
  width: 106px;
  height: 100%;
  object-fit: cover;
  object-position: center;
  margin-right: 16px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111111;
  background-color: #fff;
`

const User = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #697077;
  background-color: #fff;
`

const Photo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  object-fit: cover;
  object-position: center;
`

const Name = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #697077;
  background-color: #fff;
`

const Data = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #697077;
  background-color: #fff;
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  object-fit: contain;
  background-color: transparent;
`

const More = styled.button`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: relative;
  border: none;
  background-color: transparent;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: transparent;
  }
`

const ResourcesList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const CardResourceWrap = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: calc(100% / 3 - 16px);
      margin: 0 24px 24px 0;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
      border-radius: 8px;
      position: relative;
      .img {
            width: 100%;
            height: 100%;
            max-height: 324px;
            object-fit: cover;
            object-position: center;
      }
      .content {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding: 16px;
        background-color: transparent;
        .text {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.01em;
          color: #111111;
          background-color: transparent;
          margin-bottom: 16px;
          
          @media (max-width: 991px) {
            font-size: 14px;
          }
          
        }
        .info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background-color: transparent;
          .like {
            display: flex;
            align-items: center;
            background-color: transparent;
            img {
              width: 24px;
              height: 24px;
              margin-right: 8px;
              cursor: pointer;
              background-color: transparent;
            }
            .count {
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 22px;
              letter-spacing: -0.01em;
              color: #697077;
              background-color: transparent;
            }
          }
          .date {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.01em;
            color: #697077;
            background-color: transparent;
          }
        }
      }
      a {
        text-decoration: none;
        text-transform: none;
      }
  
  @media (max-width: 767px) { 
    max-width: calc(100% / 2 - 24px);
    
    &:nth-child(3n){
      margin-right: 24px!important;
    }
    &:nth-child(2n){
      margin-right: 0px!important;
    }
  }
  
  @media (max-width: 575px) {
    max-width: 100%;
    margin-right: 0!important;
    
    &:nth-child(3n){
      margin-right: 0px!important;
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

export {TilesList, CardResourceWrap, ResourcesList, More, Icon, Name, Data, Photo, Caption, SortBlock, ResourcesWrap, Input, DropDown, SearchBlock, ResourcesItemWrap, Image, Title, User}