import styled from "styled-components";

const LessonHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 80px;
  padding: 16px 48px;
  background: #FFFFFF;
  z-index: 12;
  position: fixed;
  top: 0;
  left: 0;
  max-height: 92px;
  box-shadow: 0px 0px 4px rgb(105 112 119 / 8%), 0px 4px 4px rgb(105 112 119 / 16%);

  .titleBlock {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.01em;
    color: #111111;
  }

`

const LessonBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`

const BlockWrap = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background: #FFFFFF;
  box-shadow: 0 0 2px rgba(105, 112, 119, 0.06), 0 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  margin-right: 24px;
  flex: 2;
  flex-direction: column;
  min-height: calc(100vh - 200px);
  max-height: calc(100vh - 200px);
  
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
    padding: 0 0 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #DDE1E6;
    width: 100%;
  }

  .section {
    background-color: transparent;
    border-bottom: 1px solid #DDE1E6;
    margin-bottom: 16px;
    padding: 0 0 29px;
    flex: 2;

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
      background-color: transparent;
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
            background-color: #4F7FFF;
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
            background-color: #4F7FFF;
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
            background-color: #4F7FFF;
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
            background-color: #4F7FFF;
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

`

const TabHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #DDE1E6;
  margin-bottom: 32px;
  width: 100%;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex: 1;
  max-height: 63px;
`

const TabHeadNav = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #697077;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
  background-color: transparent;
  width: 115px;
  cursor: pointer;

  &.tabs-active {
    color: #000;
    padding-bottom: 18px;
    border-bottom: 2px solid #4F7FFF;
  }

  &:first-child {
    margin-right: 16px;
  }
`

const TabBody = styled.div`
  height: 490px;
  background-color: #fff;
  flex: 3;
`

const InputWrap = styled.form`
  padding: 16px 16px 0;
  width: 100%;
  background-color: #fff;
  position: relative;
  border-top: 1px solid #DDE1E6;
  height: 48px;
  margin-bottom: 16px;

  input {
    width: 100%;
    background: #DDE1E6;
    opacity: 0.8;
    border-radius: 8px;
    min-height: 48px;
    border: none;
    padding-left: 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
    opacity: 0.8;

    &::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #697077;
      opacity: 0.8;
    }
  }

  .add {
    position: absolute;
    right: 16px;
    height: 100%;
    border: none;
    background: #4F7FFF;
    border-radius: 8px;
    width: 48px;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
      object-position: center;
      object-fit: contain;
      background-color: transparent;
    }
  }
`

const LessonWrap = styled.div`
  background: #F8F9FB;
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  margin-top: 122px;

  .container {
    padding-right: 0;
    padding-left: 0;
  }
`
const LessonSidebarWrap = styled.div`
  flex: 1;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(105, 112, 119, 0.06), 0 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 16px;
  min-height: calc(100vh - 200px);
  max-height: calc(100vh - 200px);
  width: 318px;
  min-width: 318px;
`

const WaitStudentOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(32px);
  z-index: 150;
`

const WaitStudentWrap = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.09), 0px 3px 5.5px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  width: 100%;
  max-width: 660px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  flex-direction: column;

  .photoBlock {
    border: 1px solid #DDE1E6;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;

    .photo {
      width: 80px;
      height: 80px;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
    }

  }

  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 16px;
  }

  .desc {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #697077;
  }

`

const LessonSection = styled.div`
  background-color: transparent;
  border-bottom: 1px solid #DDE1E6;
  margin-bottom: 16px;
  padding: 0 0 29px;
  flex: 2;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

`

const ItemSection = styled.div`
  width: 100%;
  padding: 17px 16px 16px 23px;
  background: #FFFFFF;
  border: 1px solid #DDE1E6;
  box-sizing: border-box;
  box-shadow: 0 0 2px rgba(105, 112, 119, 0.06), 0 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  margin-bottom: 16px;

  .section__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    margin-right: auto;
    margin-bottom: 10px;
  }
`

export {
  InputWrap,
  LessonHeader,
  LessonBody,
  BlockWrap,
  TabHead,
  TabHeadNav,
  TabBody,
  LessonWrap,
  LessonSidebarWrap,
  WaitStudentOverlay,
  WaitStudentWrap,
  LessonSection,
  ItemSection
}