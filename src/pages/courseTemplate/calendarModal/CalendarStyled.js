import styled from "styled-components";

const CalendarModalWrapp = styled.div`
  width: 100%;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  height: 100%;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(1, 1, 1, .2);

  @media (max-width: 767px) {
    padding: 0 16px;
  }

`
const CalendarBody = styled.form`
  max-width: 660px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 0 16px rgba(105, 112, 119, 0.12), 0 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  position: relative;
  height: 100%;
  max-height: 324px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 24px;

  .close {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 24px;
    right: 24px;
    background-color: transparent;
    cursor: pointer;
  }

  h3 {
    background-color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 15px;

    @media (max-width: 575px) {
      font-size: 20px;
    }

  }

  .addLesson {
    width: 100%;
    max-width: 193px;
    margin: 0 auto;
    border: none;
    background: #4F7FFF;
    box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
    border-radius: 6px;
    padding: 14px 0;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    cursor: pointer;
    //margin-top: 60px;
    position: absolute;
    bottom: 24px;
    right: 24px;

    @media (max-width: 575px) {
      position: static;
      max-width: none;
    }

  }

  @media (max-width: 575px) {
    padding: 16px;
  }

`
// calendarSchedule style
const CalendarWrap = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 50;
  background-color: #fff;
 
  
  header {
    display: flex;
    align-items: center;
    padding: 10px 24px;
    background-color: #fff;
    justify-content: space-between;

    div {
      background-color: #fff;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
    }
    
    & div:first-child {
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: #000;
      position: relative;
      z-index: 1;
    }
    
    & div:last-child {
      position: absolute;
      background: transparent;
      width: 90%;
      left: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 3;
      transform: translateX(-50%);
    }

    button {
      background-color: #fff;
      border: none;
      cursor: pointer;
      margin-left: 8px;
      width: 24px;
      height: 24px;

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
        background-color: #fff;
      }

      & .prev {
        transform: rotate(180deg);
      }
    }

    ${props => props.new && `
      border-radius: 8px;
    `}
  }

  table {
    width: 100%;
    height: 100%;
    background: #fff;
    border-collapse: collapse;
    border-radius: 8px;
    thead {
      tr {
        th {
          background-color: #fff;
          padding-bottom: 8px;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 20px;
          color: #697077;
          text-transform: uppercase;

          ${props => props.new && `
            background-color: #F2F4F8;
            padding: 9px 11px;
            border-top: 1px solid #DDE1E6;
          `}
        }
      }
    }

    tbody { 
      border-radius: 8px;
      .week {
      }

      tr {
        td {
          background-color: #fff;
          padding-left: 10px;
          padding-top: 10px;
          cursor: pointer;
          position: relative;
          width: 80px;
          height: 40px;

          .tdContainer {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
            padding-right: 3px;
            padding-top: 3px;
            background-color: transparent;

            .d {
              width: 32px;
              height: 32px;
              text-align: center;
              color: #697077;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 32px;
              background-color: #fff;
            }
          }

          @media (max-width: 575px) {
            height: 40px;
          }

        }

        & .today {
          .tdContainer {
            .d {
              background-color: #4F7FFF;
              color: #fff;
              border-radius: 50%;
            }
          }
        }
      }
      
      & .week:last-child {
        & td:first-child,
        & td:last-child {
          border-radius: 8px;
        }
      }
    }
  }
  
  ${props => props.new && `
    width: calc(52% - 48px);
    height: 100px;
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
    border-radius: 8px;
    left: 24px;
    top: calc(100% - 86px);
    @media(max-width: 630px) {
      min-width: 277px
    }
  `}
  ${props => props.templateCalendarStyle && `
    top: 100%;
    left: 0;
  `}
`

const InfoInput = styled.div`
  background: #DDE1E6;
  //opacity: 0.8;
  border-radius: 8px;
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 16px;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  margin-bottom: 24px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #697077;
    opacity: 0.8;
    background-color: transparent;
    width: 100%;
  }

  .showData {
    background-color: transparent;

    input {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.01em;
      color: #111111;
      opacity: 0.8;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

  .arrow {
    width: 24px;
    height: 24px;
    background-color: transparent;
    position: absolute;
    right: 12px;
    top: 50%;
    transition: .4s;
    transform: ${props => props.arrow ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)'};
  }

  input {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #111111;
    opacity: 0.8;
    background-color: transparent;
    border: none;

    &::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.01em;
      color: #111111;
      opacity: 0.8;
      background-color: transparent;
      border: none;
    }
  }
`
export {InfoInput, CalendarModalWrapp, CalendarBody, CalendarWrap}
