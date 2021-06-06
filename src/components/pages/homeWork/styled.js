import styled from "styled-components";

import {NavLink} from "react-router-dom";

const HomeWorkWrap = styled.div`
  width: 100%;
  padding: 148px 48px 0;
 
`

const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 32px;
`

const HomeWorkItemWrap = styled.div`
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 24px;
  .left {
    background-color: transparent;
  }
  .right {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    .inProcess {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #4F7FFF;
      margin-right: 32px;
      background-color: transparent;
    }
    .attentionBlock {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      margin-right: 32px;
      background-color: transparent;
      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
        margin-right: 16px;
        background-color: transparent;
      }
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

const StartButton = styled(NavLink)` 
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
  text-decoration: none;
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
`

const LessonHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 80px;
  padding: 16px 48px;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(105, 112, 119, 0.08), 0px 4px 4px rgba(105, 112, 119, 0.16);
  margin-bottom: 24px;
  
  .titleBlock {
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    .title {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      display: flex;
      align-items: center;
      letter-spacing: -0.01em;
      color: #111111;
      background: #FFFFFF;
    }
    .desc {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #697077;
      background: #FFFFFF;
    }
  }
  .finish {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    margin: 10px 0px;
    padding: 14px 20px;
    background: #4F7FFF;
    box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
    border-radius: 6px;
    cursor:pointer;
    border: none;
  }
`

const LessonBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`

const LessonWrap = styled.div`
  background: #F8F9FB;
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  .left {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 24px;
    max-width: 318px;
    .listLesson {
      display: flex;
      align-items: center;
      width: 100%;
      background: #FFFFFF;
      box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
      border-radius: 8px;
      padding: 0px 16px;
      flex-direction: column;
    }
  }
`

const ListLessonDoneWrap = styled.div`
  
      display: flex;
      align-items: center;
      background-color: transparent;
      margin: 10px 0;
      .indicator {
      width: 20px;
      height: 20px;
      border: 2px solid #DDE1E6;
      border-radius: 50%;
      background-color: transparent;
      margin-right: 18px;
    }
    .text {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: ${props => props.done ? '#111' : '#697077'};
      background-color: transparent;
      text-decoration: ${props => props.done ? 'line-through' : 'none'};
    }
  .indicatorDone {
      width: 20px;
      height: 20px;
      background: #4F7FFF;
      border: 2px solid #4F7FFF;
      display: flex;align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-right: 18px;
      img {
        width: 18px;
        height: 18px;
        background-color: transparent;
      }
  }
`
const BlockWrap = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  margin-right: 24px;
  flex: 2;
    .desc {
      background-color: transparent;
      .title__block {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #000000;
        background-color: transparent;
        margin-bottom: 32px;
    }
      .section {
      background-color: transparent;
      padding-bottom: 29px;
      border-bottom: 1px solid #DDE1E6;
      margin-bottom: 16px;
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 26px;
          color: #000000;
          background-color: transparent;
          display: flex;
          align-items: center;
          .empty {
                display: inline-block;
                min-width: 80px;
                background: #F0F1F2;
                border-radius: 4px;
                height: 24px;
                margin: 0 6px;
          }
        }
        .addWords {
          background-color: transparent;
          margin-top: 16px;
          button {
            cursor: pointer;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 26px;
            color: #000000;
            border: 1px solid #DDE1E6;
            border-radius: 4px;
            padding: 5px 12px;
            background-color: transparent;
          }
          & button:first-child {
            margin-right: 12px; 
          }
        }
        .question {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 26px;
          color: #000000;
          margin-bottom: 16px;
          background-color:transparent;
        }
        .photo {
          border-radius: 8px;
          width: 100%;
          max-width: 516px;
          margin-bottom: 24px;
        }
        .checkbox__section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          background-color: transparent;
          .checkbox__item {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            background-color: transparent;
            margin-bottom: 16px;
            input {
              width: 24px;
              height: 24px;
              margin-right: 24px;
            }
            .version {
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 22px;
              letter-spacing: -0.01em;
              color: #000000;
              margin-right: 7px;
              background-color: transparent;
            }
            .answer {
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 22px;
              letter-spacing: -0.01em;
              color: #000000;
              background-color: transparent;
            }
          }
        }
        .emptyInput {
                display: inline-block;
                padding: 0 6px;
                background: #F0F1F2;
                border-radius: 4px;
                height: 24px;
                margin: 0 6px;
                font-family: Roboto Mono;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 26px;
                color: #4F7FFF;
                border: none;
                max-width: 100px;
        }
        .selectBlock {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          margin-top: 20px;
          width: 100%;
          background-color: transparent;
          flex-direction: column;
          .selectItem {
            display: flex;
            align-items: center;
            background-color: transparent;
            margin-bottom: 16px;
            position: relative;
            width: 100%;
            .info {
            display: flex;
            align-items: center;
            margin-right: 56px;
            flex: 2;
            background-color: transparent;
              .num {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: -0.01em;
            color: #000000;
            background-color: transparent;
            margin-right: 12px;
            }
              .desc {
              background-color: transparent;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 22px;
              letter-spacing: -0.01em;
              color: #000000;
              
            }
            }
            .trueOrFalse {
            border-radius: 4px;
            background-color: #fff;
            flex: 1;
            cursor: pointer;
              button {
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 26px;
                color: #000000;
                background-color: transparent;
                cursor: pointer;
                border: none;
                padding: 5px 15px;
                border: 1px solid #DDE1E6;
                &:disabled {
                  background: #4F7FFF;
                  color: #FFFFFF;
                  border: 1px solid #4F7FFF;
                }
              }
              & button:first-child {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
              }
              & button:last-child {
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
              }
            }
          }
        }
        .conversation {
          display: flex;
          align-items: flex-start;
          background-color: transparent;
          margin-top: 16px;
            .questions,
            .answers {
            flex: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background-color: transparent;
            max-width: 441px;
             .question__item,
             .answer__item {
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              background-color: transparent;
              border: 1px solid #DDE1E6;
              border-radius: 4px;
              padding: 6px 15px;
              margin-bottom: 8px;
              width: 100%;
              position: relative;
               .num,
               .leter {
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 22px;
                color: #000000;
                margin-right: 6px;
                background-color: transparent;
              }
               .question,
               .answer {
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 22px;
                color: #000000;
                background-color: transparent;
                margin-bottom: 0;
              }
            }
          }
          .questions {
            margin-right: 50px;
            .question__item {
              &:after {
                content: '';
                position: absolute;
                width: 10px;
                height: 10px;
                background-color:  #4F7FFF;
                right: -5px;
                top: 50%;
                transform: translateY(-50%);
                border-radius: 50%;
                cursor: pointer;
              }
              &:before {
                content: '';
                position: absolute;
                width: 18px;
                height: 18px;
                background-color:  #4F7FFF;
                right: -9px;
                top: 50%;
                transform: translateY(-50%);
                border-radius: 50%;
                opacity: .2;
                cursor: pointer;
              }
            }
          }
          .answers {
            .answer__item {
              &:after {
                content: '';
                position: absolute;
                width: 10px;
                height: 10px;
                background-color:  #4F7FFF;
                left: -5px;
                top: 10px;
                //transform: translateY(-50%);
                border-radius: 50%;
                cursor: pointer;
              }
              &:before {
                content: '';
                position: absolute;
                width: 18px;
                height: 18px;
                background-color:  #4F7FFF;
                left: -9px;
                top: 6px;
                //transform: translateY(-50%);
                border-radius: 50%;
                opacity: .2;
                cursor: pointer;
              }
            }
          }
        }
      }  
      .image__section {
        width: 100%;
        background-color: transparent;
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 26px;
          color: #000000;
          margin-bottom: 16px;
          background-color: transparent;
        }
        .images {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          flex-wrap: wrap;
          background-color: transparent;
          margin-bottom: 20px;
          .photos {
            width: 150px;
            height: 150px;
            border-radius: 8px;
            object-fit: cover;
            object-position: center;
            margin-right: 17px;
            margin-bottom: 17px;
            background-color: transparent;
          }
          & .photos:nth-child(5) {
            margin-right: 0;
          }
        }
        .chooseButtons {
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: flex-start;
          flex-wrap: wrap;
          margin-bottom: 20px;
          background-color: transparent;
          .dragBtn {
            background-color: transparent;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 26px;
            color: #000000;
            border: 1px solid #DDE1E6;
            border-radius: 4px;
            position: relative;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 9px 6px;
            max-height: 36px;
            margin-right: 12px;
            margin-bottom: 12px;
            img {
              width: 18px;
              height: 18px;
              margin-right: 6px;
              background-color: transparent;
            }
          }
        }
        .sort__section {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          background-color: transparent;
          .sort__item {
            width: 32%;
            margin-right: 32px;
            min-height: 379px;
            background: #F2F4F8;
            border: 1px dashed #DDE1E6;
            border-radius: 4px;
            padding: 16px;
            margin-bottom: 32px;
            p {
              font-style: normal;
              font-weight: 500;
              font-size: 12px;
              line-height: 18px;
              text-transform: uppercase;
              color: #697077;
            }
          }
          & .sort__item:last-child {
            margin-right: 0;
          }
        }
      }
      .finish {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        margin: 10px 0px;
        padding: 14px 20px;
        background: #4F7FFF;
        box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
        border-radius: 6px;
        cursor:pointer;
        border: none;
      }
  }
`

export {BlockWrap, HomeWorkWrap, Title, HomeWorkItemWrap, Desc, Name, StartButton, LeftTimes, LessonHeader, LessonBody, LessonWrap, ListLessonDoneWrap}