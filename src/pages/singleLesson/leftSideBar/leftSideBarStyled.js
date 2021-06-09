import styled from "styled-components";

const Video = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 238px;
  border-radius: 8px;
  margin-bottom: 24px;
  background: linear-gradient(0deg, #697077, #697077);
  min-height: 238px;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 96px;
    height: 96px;
    object-fit: contain;
  }

  .video-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    .micro,
    .cam {
      cursor: pointer;
      width: 40px;
      height: 40px;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(16px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
        background-color: transparent;
      }
    }

    .micro {
      margin-right: 24px;
    }
  }
`

const LessonSidebarWrap = styled.div`
  flex: 1;
  background-color: #fff;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 16px;
`

const ListLessonDoneWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  margin: 10px 0;

  .indicator {
    width: 22px;
    min-width: 22px;
    height: 22px;
    border: 2px solid #DDE1E6;
    border-radius: 50%;
    background-color: transparent;
    margin-right: 18px;
  }

  .text {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: ${props => props.done ? '#697077' : props.inProgress ? '#4F7FFF' : '#111'};
    background-color: transparent;
    text-decoration: ${props => props.done ? 'line-through' : 'none'};
  }

  .indicatorDone {
    width: 22px;
    height: 22px;
    min-width: 22px;
    background: #4F7FFF;
    border: 2px solid #4F7FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 18px;

    img {
      width: 18px;
      height: 18px;
      background-color: transparent;
    }
  }

  .indicatorInProgress {
    width: 24px;
    height: 24px;
    min-width: 24px;
    overflow: hidden;
    margin-right: 18px;
    position: relative;

    svg {
      width: 100%;
    }
  }

  .mask {
    position: absolute;
    background-color: #fff;
    width: 17px;
    height: 17px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`

const ListLessonWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  padding: 0 16px;
  flex-direction: column;
`

const LeftSideBarWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 24px;
`

export {
  ListLessonDoneWrap,
  Video,
  LessonSidebarWrap,
  ListLessonWrap,
  LeftSideBarWrap
}