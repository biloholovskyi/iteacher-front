import styled from "styled-components";

const ArticleWrap = styled.div`
   position: relative;
    z-index: 10;
    padding-top: 48px;
    background-color: #F8F9FB;
    width: 100%;
    height: 100%;
  .close {
    position: absolute;
    right: 48px;
    top: 48px;
    width: 56px;
    height: 56px;
    background-color: #DDE1E6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      background-color: transparent;
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }
  .edit {
    position: absolute;
    left: 48px;
    top: 48px;
    width: 56px;
    height: 56px;
    background-color: #DDE1E6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    img {
      background-color: transparent;
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }
  .smallContainer {
    width: 100%;
    max-width: 888px;
    margin: 0 auto;
  }
  .infoBLock {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    margin-bottom: 24px;
    .border {
      width: 1px;
      height: 20px;
      background: rgba(105, 112, 119, 0.2);
      margin: 0 8px;
    }
    .likeBlock {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      
      .like {
        width: 24px;
        height: 24px;
        margin-right: 8px;
        object-fit: contain;
        object-position: center;
        cursor: pointer;
      }
    }
  }
  .border-bottom {
    width: 100%;
    height: 1px;
    background: #DDE1E6;
    margin-bottom: 48px;
  }
  .otherSection {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    flex-wrap: wrap;
    & .card:nth-child(3n) {
    margin-right: 0;
  }
  }
`

const MainPhoto = styled.img`
      width: 100%;
    max-height: 500px;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    height: 100%;
    margin-bottom: 24px;
`

const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 18px;
`

const Date = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #697077;
`

const Like = styled.div`
font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #697077;
`

const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 24px;
  background-color: transparent;
`

const ArticleButton = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  background: #4F7FFF;
  border-radius: 6px;
  padding: 14px 20px;
  border: none;
`
const Section = styled.div`
  width: 100%;
  background: rgba(79, 127, 255, 0.1);
  border-radius: 8px;
 display: flex;
 align-items: flex-start;
 justify-content: flex-start;
 margin: 48px 0;
 flex-direction: column;
 padding: 24px;
 
 h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #4F7FFF;
  margin-bottom: 16px;
  background-color: transparent;
 }
 p {
   font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 16px;
  background-color: transparent;
 }
`

const Promocod = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #000000;
  background-color: transparent;
`

export {ArticleWrap, MainPhoto, Title, Date, Like, Description, ArticleButton, Section, Promocod}