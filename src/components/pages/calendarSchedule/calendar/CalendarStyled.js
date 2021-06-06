import styled from "styled-components";

const CalendarWrapp = styled.div`
  padding-bottom: 40px;
`

const CalendarArrow = styled.div`
  text-align: center;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111111;
  transform: translateY(-57px);

  .calendarIcon {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 12px;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
      cursor: pointer;
    }
  }

  .back {
    margin-right: 12px;
    margin-left: 24px;

    img {
      transform: rotate(180deg);
    }
  }

  .number {
    display: flex;
    margin-right: 5px;
    min-width: 57px;
    align-items: center;
    justify-content: center;
  }
  
  .dailyNumber {
    margin: 0!important;
    min-width: 30px;
  }

  & * {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
  }

  & div:nth-child(2) {
    margin: 0 5px;
  }

  @media(max-width: 767px) {
    transform: translateY(-30px);
  }
  
`

const CalendarTable = styled.table`
  
  width: 100%;

  td {
    cursor: pointer;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    padding: 0.25rem;
    border-right: 1px solid #DDE1E6;
    border-bottom: 1px solid #DDE1E6;
    position: relative;
  }

  tr {
    display: flex;
    justify-content: center;
    // height: 50px;
    // align-items: center;
  }

  th {
    align-items: center;
    justify-content: center;
    width: 100%;
    user-select: none;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #111111;
    flex-direction: column;
    border: 1px solid #DDE1E6;
    display: flex;
    height: 100px;
    border-left: none;
  }
  
  .calendar-today {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #4F7FFF;
    border-radius: 100%;
    height: 48px;
    width: 48px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
  }

  .calendar-notToday {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 40px;
    width: 40px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.01em;
    color: #111111;
  }

  tbody {
    //transform: translateY(-28px);

    & tr {
      td:first-child {
        border: none;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: -0.01em;
        color: #697077;
        max-width: 60px;
        display: flex;
        align-items: flex-start;
        border-right: 1px solid #DDE1E6;

        span {
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: -0.01em;
          color: #697077;
          transform: translateY(-12px);
        }
        
        @media(max-width: 575px) {
          justify-content: flex-start;
        }
        
      }
      td {
        @media(max-width: 991px) {
          border-right: none!important;
        }
      }
    }
    
    & tr {
      td:last-child {
        .card {
          right: 0;
          left: unset;
        }
      }
    }

    & tr:last-child {
      td {
       display: none;
      }
      td:first-child {
        border: none;
        display: flex;
      }
      td:nth-child(2){
        visibility: hidden;
        border: none;
        display: block;
      }
    }
    
    & tr:first-child {
      td:nth-child(2) {
        @media(max-width: 991px) {
          border-top: 1px solid #DDE1E6;
        }
      }
    }

  }

  thead {
    & tr th:first-child {
      border: none;
      max-width: 60px;
      font-size: 12px;
      border-right: 1px solid #DDE1E6;
    }
    
    @media(max-width: 991px) {
      display: none;
    }
    
  }
`

export {CalendarWrapp, CalendarArrow, CalendarTable}
