import styled from "styled-components";

const SingleCoursesWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 888px;
  margin: 0 auto;
  padding-top: 58px;
  position: relative;
  
  .course-banner {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 32px;
  }
  
  .closeButton {
    position: absolute;
    right: 0;
    top: 65px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #DDE1E6;

    img {
      background-color: transparent;
      width: 24px;
      height: 24px;
      object-fit: contain;
      margin: 0;
    }

    @media (max-width: 575px) {
      display: none;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 9px;
    text-decoration: none;

    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
      margin-right: 12px;

      @media (max-width: 575px) { 
        filter: brightness(4);
      }

    }

    h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #697077;
      letter-spacing: -0.01em;

      @media (max-width: 575px) {
        color: #fff;
      }

    }

    @media (max-width: 575px) {
      position: absolute;
      z-index: 100;
      padding-top: 0;
      left: 16px;
      top: 16px;
      color: #fff;
    }

  }

  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 8px;

    @media (max-width: 575px) {
      display: none;
    }

  }

  .desc {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #697077;
    letter-spacing: -0.01em;
    margin-bottom: 24px;

    @media (max-width: 575px) {
      display: none;
    }

  }

  @media (max-width: 575px) {
    padding-top: 0;
  }

`

const MobileBlock = styled.div`
  padding: 0 16px;
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 4px;
    display: none;

    @media (max-width: 575px) {
      display: block;
    }

  }

  .desc {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #697077;
    letter-spacing: -0.01em;
    margin-bottom: 24px;
    display: none;

    @media (max-width: 575px) {
      display: block;
    }

  }
`

const Banner = styled.div`
  width: 100%;
  background: ${props => props.bgType === 'image' ? `url(${props.bgImage})` : props.bg};
  border-radius: 8px;
  height: 320px;
  position: relative;
  padding: 34px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 24px;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    background-color: transparent;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    
    @media (max-width: 575px) {
      font-size: 28px;
      line-height: 32px;
    }
    
  }

  .firstLeter {
    font-style: normal;
    font-weight: 800;
    font-size: 440px;
    line-height: 100%;
    background-color: transparent;
    letter-spacing: -0.01em;
    color: rgba(255, 255, 255, .1);
    position: absolute;
    bottom: -60px;
    left: -24px;

    @media (max-width: 575px) {
     font-size: 220px;
      bottom: -25px;
    }
    
  }

  @media (max-width: 575px) {
    border-radius: 0;
    height: 270px;
    padding: 16px;
  }

`

const InfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
  justify-content: space-between;
  width: 100%;
  padding: 24px 0;
  background: rgba(79, 127, 255, 0.1);
  border: 1px solid rgba(79, 127, 255, 0.1);
  box-sizing: border-box;
  border-radius: 8px;

  .infoItem {
    min-height: 68px;
    flex: 1;
    text-align: center;
    border-right: 1px solid #DDE1E6;

    .top {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      margin-bottom: 8px;

      h4 {
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -0.01em;
        color: #111111;
        margin-right: 3px;
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 30px;
        letter-spacing: -0.01em;
        color: #111111;
      }

      .dificulty {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;

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

    .bottom {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #697077;
      max-width: 138px;
      margin: 0 auto;
    }

    @media (max-width: 767px) {
      flex: 49%;
      border-right: none;
      margin-bottom: 24px;
    }

  }

  & .infoItem:last-child {
    border-right: none;
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }

`

const DescSection = styled.div`
  margin-bottom: 24px;
  padding-bottom: 28px;
  border-bottom: 1px solid #DDE1E6;

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.01em;
    color: #111111;
    margin-bottom: 16px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #111;
    height: ${props => props.show ? 'fit-content' : '72px'};
    display: inline;
  }

  button {
    display: ${props => props.show ? 'none' : 'inline-block'};
    color: #4F7FFF;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  .hiddenText {
    display: ${props => props.show ? 'block' : 'none'};
  }
  
  @media (max-width: 575px) {
    display: none;
  }
  
`

const ProgramSection = styled.div`
  width: 100%;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.01em;
    color: #111111;
    margin-bottom: 24px;
  }

  .programs {
    margin-bottom: 150px;

    @media (max-width: 991px) {
      margin-bottom: 80px;
    }
    
  }

  .startBtn {
    width: 100%;
    background-color: #4F7FFF;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    padding: 14px 0;
    box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
    border-radius: 6px;
    margin-bottom: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 50%;
    max-width: 888px;
    transform: translateX(-50%);

    @media (max-width: 991px) {
      width: 90%;
      margin-bottom: 16px;
    }
    
  }
  
  @media (max-width: 575px) {
    padding: 0 16px;
  }
  
`

const WithOutHeaderContainer = styled.div`
  position: relative;
  z-index: 10;
  background-color: #F8F9FB;

  .close {
    position: absolute;
    right: 24px;
    top: 24px;
    width: 24px;
    height: 24px;
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

    @media (max-width: 575px) {
      display: none;
    }
  }

  .container {
    @media (max-width: 767px) {
      padding: 0 16px;
    }
    @media (max-width: 575px) {
      padding: 0;
    }
  }

`

const ProgramItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  padding: 21px 24px;
  cursor: pointer;
  transition: .3s;

  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
    background-color: transparent;
  }

  img {
    width: 24px;
    height: 24px;
    object-position: center;
    object-fit: contain;
    background-color: transparent;
  }

  &:hover {
    box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  }
  
  @media (max-width: 575px) {
    border: 1px solid #DDE1E6;
    margin-bottom: 16px;
  }
  
`

const ProgramModalWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
  z-index: 11;
  
  @media (max-width: 767px) {
    z-index: 102;
  }
  
`

const ProgramModalBody = styled.div`
  box-shadow: 0px 0px 6px rgba(105, 112, 119, 0.08), 0px 4px 8px rgba(105, 112, 119, 0.1);
  background-color: #fff;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 600px;
  max-width: 600px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 24px 0;

  .close {
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    position: absolute;
    top: 28px;
    right: 28px;
    background-color: transparent;
    cursor: pointer;
    z-index: 11;
    
    @media (max-width: 575px) {
      display: block;
    }
    
  }

  @media (max-width: 767px) {
   min-width: unset;
    padding: 56px 0;
  }

`

const Caption = styled.div`
  padding: 0 24px 28px 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #111111;
  border-bottom: 1px solid #DDE1E6;
  background-color: #fff;
  margin-bottom: 24px;
  
  @media (max-width: 575px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 32px;
    padding: 0 16px 0;
    border-bottom: none;
  }
  
`

const Content = styled.div`
  padding: 0 24px 80px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  background-color: transparent;

  &::-webkit-scrollbar {
    display: none;
  }
  
  .sectionOverlay {
    width: 100%;
  }
  
  .sectionWrapper {
    margin-bottom: 24px;
    
    &:first-child { 
      margin-bottom: 16px!important;
    }
    
  }

  // для видео
  .react-player {
    max-width: 552px;
  }
`

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #111111;
  background-color: transparent;
  margin-bottom: 24px;
  
  @media (max-width: 575px) {
    font-size: 18px;
    line-height: 24px;
  }
  
`

const SmallTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 8px;
  background-color: transparent;

  @media (max-width: 575px) {
    font-size: 16px;
    line-height: 22px;
  }
  
`

const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 24px;
  background-color: transparent;
`

const Video = styled.div`
  width: 100%;
  border-radius: 8px;
  position: relative;
  max-height: 304px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  //padding-bottom: 24px;
  //border-bottom: 1px solid  #DDE1E6;
  margin-bottom: 24px;
  background-color: transparent;

  img {
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`

const PlayBtn = styled.button`
  box-shadow: 0px 15px 12px rgba(105, 112, 119, 0.12), 0px 19px 38px rgba(105, 112, 119, 0.16);
  background-color: #fff;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  z-index: 3;
  border: none;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    background-color: transparent;
  }
`

const TaskWrapper = styled.div`
  & * {
    padding-left: ${props => props.taskStyled === 'TEXT' && '0'};
    padding-right: ${props => props.taskStyled === 'TEXT' && '0'};
  }
  margin-top: 12px;
  border: ${props => props.taskStyled === 'DOCUMENT' || props.taskStyled === 'audio' ? '1px solid #DDE1E6' : 'none'};
  border-radius: ${props => props.taskStyled === 'DOCUMENT' || props.taskStyled === 'audio' ? '8px' : 'none'};
  padding: ${props => props.taskStyled === 'DOCUMENT' || props.taskStyled === 'audio' ? '12px' : '0'};
  
  .test__container {
    & * {
      margin-left: 0;
    }
  }
  
`

export {
  PlayBtn,
  Video,
  Text,
  SmallTitle,
  Title,
  Content,
  Caption,
  ProgramModalBody,
  ProgramModalWrap,
  ProgramItemWrap,
  ProgramSection,
  SingleCoursesWrap,
  Banner,
  InfoBlock,
  DescSection,
  WithOutHeaderContainer,
  MobileBlock,
  TaskWrapper
}