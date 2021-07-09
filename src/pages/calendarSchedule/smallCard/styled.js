import styled from "styled-components";

const SmallCardWrap = styled.div`
  max-width: 100%;
  display: flex;
  margin: 0;
  z-index: 8;
  width: 100%;
  overflow: hidden;
  height: 40px;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 12px;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16), 0 0.5px 0.5px rgba(0, 0, 0, 0.1), 0 0.1px 0.1px rgba(0, 0, 0, 0.07);
  border-radius: 4px;

  @media (max-width: 1260px) {
    padding: 0 10px;
  }
  
  .photo {
    width: 24px;
    height: 24px;
    min-width: 24px;
    border-radius: 50%;
    margin-right: 12px;
  }

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #111111;

    @media (max-width: 1260px) {
      font-size: 12px;
      line-height: 18px;
    }

    @media (max-width: 1099px) {
      font-size: 11px;
      line-height: 18px;
    }

  }

  .indicator {
    width: 4px;
    height: 100%;
    background: #4F7FFF;
    position: absolute;
    left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

`

const ModalCardWrap = styled.div`
  position: absolute;
  background-color: #fff;
  z-index: 9;
  width: 100%;
  padding: 16px;
  min-width: 370px;
  top: 1px;
  left: 1px;
  box-shadow: 0px 0px 6px rgb(105 112 119 / 8%), 0px 4px 8px rgb(105 112 119 / 10%);
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  
  .photo {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 16px;
  }

  .indicator {
    background: #4F7FFF;
    border-radius: 3px;
    width: 12px;
    height: 12px;
    margin-right: 16px;
    margin-top: 4px;
    @media(max-width: 575px){
      margin-right: 10px;
    }
  }

  .right {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  @media(max-width: 575px){
    padding: 5px;
  }

`

const Caption = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 22px;

  .title_block {
    display: flex;

    .title {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
      
      @media(max-width: 575px){
        font-size: 16px;
      }
      
    }

    .date {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #697077;
    }
  }

  .btn_block {
    display: flex;

    button {
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }
    }

    & button:first-child {
      margin-right: 16px;
      
      img {
        width: 16px;
      }
    }
  }
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .timer-block {
    background: rgba(79, 127, 255, 0.1);
    border: 1px solid rgba(79, 127, 255, 0.1);
    border-radius: 8px;
    padding: 4px 4px 4px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    &__text {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #4F7FFF;
    }
    
    &__info {
      display: flex;
      align-items: center;
      
      .timer {
        margin-right: 12px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: #4F7FFF;
      }
    }
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    &--last {
      margin-bottom: 16px;
    }

    span {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #697077;
      min-width: 80px;
    }

    .course_name {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
      
      @media(max-width: 575px){
        font-size: 14px;
      }
      
    }

    .student_name {
      display: flex;

      img {
        width: 28px;
        height: 28px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 12px;
      }

      .name {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #111111;
        white-space: nowrap;

        @media(max-width: 575px){
          font-size: 14px;
        }
        
      }
    }
  }

  & .info:first-child {
    padding-bottom: 7px;
    margin-bottom: 7px;
    border-bottom: 1px solid #DDE1E6;
  }

`

const ActiveCard = styled.button`
  width: 100%;
  background: #4F7FFF;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  padding: 0 12px;
  cursor: pointer;
  flex-direction: column;
  border: none;

  & div:first-child {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
  }

  & div:nth-child(2) {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
  }

  img {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    filter: invert(1);
  }

  @media (max-width: 1260px) {
    padding: 0 5px;

    & div:first-child {
      font-size: 12px;
    }

    & div:nth-child(2) {
      font-size: 8px;
    }

    img {
      right: 10px;
    }

  }

  @media (max-width: 1099px) {
    img {
      display: none;
    }
  }

`

export {SmallCardWrap, ModalCardWrap, Caption, InfoBlock, ActiveCard}