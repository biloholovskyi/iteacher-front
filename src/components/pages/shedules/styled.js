import styled from "styled-components";

const ScheduleWrap = styled.div`
  width: 100%;
  padding: 148px 48px 0;

  @media (max-width: 575px) {
    padding: 120px 16px 0;
  }
`

const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 32px;

  @media (max-width: 575px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 0;
  }
`

const HomeWorkItemWrap = styled.tr`
  width: 100%;
  box-shadow: 0 0 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;

  td {
    background: #FFFFFF;

    .td-wrapper {
      display: flex;
      align-items: center;
      padding: 16px;

      .alert-text {
        margin-right: 24px;
        font-family: Inter, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #4F7FFF;

        @media (max-width: 600px) {
          display: none;
        }
      }

      &--no-flex {
        display: block;
      }

      &--no-padding {
        padding: 0;
      }

      &--end {
        justify-content: flex-end;
      }
    }
  }

  .right {
    .attentionBlock {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
        margin-right: 16px;
        background-color: transparent;

        @media (max-width: 1099px) {
          margin-right: 0;
        }

      }

      @media (max-width: 1099px) {
        margin-right: 0;
        min-width: unset;
      }
    }

    .DoneBlock {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: transparent;
      margin-right: 32px;
      min-width: 272px;

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
        margin-right: 16px;
        background-color: transparent;

        @media (max-width: 1099px) {
          margin-right: 0;
        }

      }

      .done {
        color: #24A148;

        @media (max-width: 1099px) {
          display: none;
        }
      }

      @media (max-width: 1099px) {
        margin-right: 0;
        min-width: unset;
      }
    }

    .StartBlock {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: transparent;
      flex-direction: row;

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #4F7FFF;
        margin-right: 24px;

        @media (max-width: 767px) {
          display: none;
        }

      }

      button {
        @media (max-width: 575px) {
          font-size: 14px;
          line-height: 20px;
          padding: 8px 16px;
        }
      }

    }

    .schedule-buttons {
      @media (max-width: 500px) {
        display: none;
      }
    }
  }

  .right_new--lesson {
    justify-content: flex-start;
    flex: 1;
    
    @media (max-width: 500px) {
      display: none;
    }

    .StartBlock {
      background: #DA1E28;
      border-radius: 100px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #FFFFFF;
      max-height: 36px;
      padding: 14px 20px;

      @media (max-width: 575px) {
        padding: 8px 15px;
        white-space: nowrap;
        font-size: 12px;
        line-height: 12px;
      }
    }
  }
`

// блок с картинкой, названием и временем урока
const InfoLesson = styled.td`
  background-color: transparent;
  display: flex;
  align-items: center;

  // обложка курса
  .infoBG {
    width: 48px;
    height: 48px;
    min-width: 48px;
    background: ${props => props.bg};
    border-radius: 4px;
    margin-right: 16px;
    padding: 5px;
    display: flex;
    align-items: flex-end;
    position: relative;

    .nameCourse {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 7px;
      line-height: 7px;
      letter-spacing: -0.01em;
      color: #FFFFFF;
    }

    .firstLetter {
      position: absolute;
      bottom: 15px;
      left: -5px;
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 50px;
      line-height: 7px;
      letter-spacing: -0.01em;
      color: #FFFFFF;
      opacity: 0.1;
    }
  }
`

const Name = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #111111;
  background-color: transparent;
`

const Desc = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #697077;
  background-color: transparent;
`

const StartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${props => props.bg ? '#fff' : '#4F7FFF'};
  padding: 14px 20px;
  cursor: pointer;
  border: 1px solid #DDE1E6;
  border-radius: 6px;
  background-color: ${props => props.bg ? '#4F7FFF' : '#fff'};

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 8px;
    background-color: transparent;
  }
`

const LeftTimes = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #DA1E28;
  background-color: transparent;

  @media (max-width: 1099px) {
    display: none;
  }

`

const StartTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-right: ${props => props.type === 'student' ? 'none' : '1px solid #DDE1E6'};
  height: 48px;
  padding-right: 24px;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 16px;
    background-color: transparent;
  }

  @media (max-width: 990px) {
    display: none;
  }
`

const Times = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #697077;
  background-color: transparent;
  white-space: nowrap;

  @media (max-width: 767px) {
    display: none;
  }

`

const TextModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, .2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
`

const TextModalBody = styled.form`
  width: 100%;
  max-width: 660px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: relative;
  padding: 24px;
  max-height: 745px;

  .closed {
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 24px;
  }

  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #000000;
    width: 100%;
    margin-bottom: 24px;
  }

  .double {
    display: flex;
    width: 100%;

    div:first-child {
      margin-right: 24px;
    }

  }

`

const AddCourse = styled.button`
  background: #4F7FFF;
  box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
  border-radius: 6px;
  border: none;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 14px 20px;

  img {
    background-color: transparent;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    margin-right: 8px;
  }

  @media (max-width: 575px) {
    display: none;
  }

`

const NameCourse = styled.td`
  .label {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #697077;
  }

  .name {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

const Caption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: 575px) {
    margin-bottom: 16px;
  }
`

export {
  ScheduleWrap,
  Title,
  HomeWorkItemWrap,
  Desc,
  Name,
  StartButton,
  LeftTimes,
  StartTask,
  Times,
  TextModalOverlay,
  TextModalBody,
  AddCourse,
  InfoLesson,
  NameCourse,
  Caption
}