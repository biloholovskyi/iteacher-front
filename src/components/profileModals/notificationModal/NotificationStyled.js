import styled from "styled-components";

const NotificationWrap = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 6px rgba(105, 112, 119, 0.08), 0px 4px 8px rgba(105, 112, 119, 0.1);
  border-radius: 8px;
  padding: 17px 0;
  width: 100%;
  max-width: 420px;
  min-height: 461px;
  position: absolute;
    z-index: 20;
    top: 70px;
    right: 112px;
  .close {
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    background-color: transparent;
  }
  .caption {
    padding: 0 16px 18px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
    border-bottom: 1px solid #DDE1E6;
    background-color: transparent;
  }
  .notificationBody {
    padding: 150px 16px 0;
    background-color: transparent;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 400px;
    overflow: auto;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const NotificationItemWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 80px;
  padding: 19px 0 0 0;
  background-color: transparent;
  cursor: pointer;
  .indicator {
    width: 8px;
    height: 8px;
    min-width: 8px;
    margin-right: 16px;
    background-color: #DDE1E6;
    border-radius: 50%;
    margin-top: 4px;
  }
  .active {
    background-color: #4F7FFF;
  }
  .content {
    display: flex;
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
     //border-bottom: 1px solid #DDE1E6;
     padding-bottom: 19px;
     background-color: transparent;
    .title {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
      background-color: transparent;
    }
    .desc {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #697077;
      background-color: transparent;
    }
  }
  
  button {
    padding: 10px 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    max-height: 38px;
  }
`
const NotificationSingleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(1,1,1, .2);
  z-index: 22;
`

const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 16px;
  background-color: transparent;
`
const Desc = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111111;
  background-color: transparent;
  margin-bottom: 30px;
`

const Photo = styled.img` 
  width: 100%;
  height: 100%;
  max-height: 344px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
`

const NotificationModal = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  max-width: 660px;
  position: relative;
  .btnSection {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    margin-top: 24px;
    background-color: transparent;
    .transparentBtn {
      margin-left: 16px;
    }
    .actionBtn {
      margin-left: 65px;
      background-color: #4F7FFF;
      color: #fff;
    }
  }
  .close {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    object-fit: contain;
    object-position: center;
    background-color: transparent;
  }
`
const MainBtnWrap = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #4F7FFF;
  background: transparent;
  border-radius: 6px;
  padding: 14px 20px;
  border: 1px solid #DDE1E6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: fit-content;
`

export {NotificationWrap, NotificationItemWrap, NotificationSingleWrap, Photo, Title, Desc, NotificationModal, MainBtnWrap}