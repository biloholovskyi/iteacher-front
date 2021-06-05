import styled from "styled-components";

const ContainerWrapper = styled.div `
    .container {
      @media (max-width: 575px) {
        padding: 0 16px;
      }
    }
`

const CourseEmptyWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  
  @media (max-width: 991px) {
    flex-direction: column;
  }
`

const MainContent = styled.div`
  flex: 2;
  background-color: #fff;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  padding-top: 16px;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #111111;
    background-color: transparent;
    padding: 0 16px 16px;
    border-bottom: 1px solid #DDE1E6;
  }
  
  @media (max-width: 991px) {
    order: 3;
    width: 100%;
  }
`

const Plans = styled.div`
  padding: 0 16px;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

const SidebarItem = styled.div`
  background-color: #fff;
  box-shadow: 0 0 2px rgba(105, 112, 119, 0.06), 0 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  width: 100%;
  padding: 16px 0;
  margin-bottom: 24px;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #111111;
    padding: 0 16px 16px;
    margin-bottom: 16px;
    background-color: #fff;
    border-bottom: 1px solid #DDE1E6;
    
    @media (max-width: 1099px) {
     font-size: 16px;
    }
    
  }

  .info {
    display: flex;
    align-items: center;
    padding: 0 16px;
    background-color: #fff;

    img {
      width: 40px;
      height: 40px;
      margin-right: 16px;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
    }
    
    .date {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
    }
    
    .photo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      min-width: 40px;
      border-radius: 50%;
      border: 1px dashed #DDE1E6;
      margin-right: 16px;
      
      img {
        width: 32px;
        height: 32px;
        min-width: 32px;
        margin-right: 0;
      }
    }
    
    .no-photo {
      
    }

    .name {
      .email {
        font-family: Inter, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #111111;
      }

      .student {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #111111;
        background-color: #fff;
      }
    }
    
    .no-text {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #697077;
      opacity: 0.72;
    }
  }

  @media (max-width: 1099px) {
    margin-bottom: 16px;
  }
`

const InfoList = styled.div`
  padding: 0 16px;
  background-color: #fff;

  .infoItem {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 56px;
    border-bottom: 1px solid #DDE1E6;

    .name {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #697077;
      background-color: #fff;
      
      @media (max-width: 1099px) {
        font-size: 14px;
      }
      @media (max-width: 575px) {
        font-size: 16px;
      }
      
    }

    .desc { 
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #111111;
      letter-spacing: -0.01em;
      background-color: #fff;
      
      @media (max-width: 1099px) {
        font-size: 14px;
      }

      @media (max-width: 575px) {
        font-size: 16px;
      }
      
    }

    .dificulty {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      background-color: #fff;

      .dificulty-item {
        width: 8px;
        height: 8px;
        background: #DDE1E6;
        border-radius: 100px;
        margin: 0 4px;

        &.active {
          background: #FF832B;
        }
      }
    }
  }

  & .infoItem:last-child {
    border: none;
  }
`

const LeftAside = styled.div`
  flex: 1;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(105, 112, 119, 0.06), 0 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  padding-top: 16px;
  margin-right: 24px;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #111111;
    background-color: transparent;
    padding: 0 16px 16px;
    border-bottom: 1px solid #DDE1E6;
  }
  
  @media (max-width: 1099px) {
    min-width: 250px;
    margin-right: 10px;
  }

  @media (max-width: 991px) {
    order: 1;
    width: 100%;
    margin-bottom: 16px;
    margin-right: 0;
  }
`

const ActiveSidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: transparent;
  margin-left: 24px;
  
  @media (max-width: 1099px) {
    min-width: 250px; 
    margin-left: 10px;
  }
  
  @media (max-width: 991px) {
    order: 2;
    width: 100%;
    margin-left: 0; 
  }
`

export {
  ContainerWrapper,
  CourseEmptyWrap,
  MainContent,
  Plans,
  SidebarItem,
  InfoList,
  LeftAside,
  ActiveSidebarWrap
}