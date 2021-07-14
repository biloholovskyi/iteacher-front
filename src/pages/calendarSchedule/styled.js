import styled from "styled-components";

const CalendarWrap = styled.div`
  width: 100%;
  padding: 148px 48px 0;

  .caption {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    //margin-bottom: 24px;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -0.01em;
      color: #000000;
      
      @media(max-width: 575px) {
        font-size: 24px;
        line-height: 32px;
      }
      
    }
    
    .btn_section {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    
    @media(max-width: 575px) {
      padding-right: 16px;
    }
    
  }

  @media (max-width: 830px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (max-width: 575px) {
    padding: 80px 0 0 16px;
  }

`

const AddEventBtn = styled.button`
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

  @media (max-width: 767px) {
    display: none;
  }

`

const SubCaptionBlock = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin-bottom: 24px;

  .arrow {
    min-width: 280px;
  }
  
  @media(max-width: 775px) {
    .arrow {
      min-width: 240px;
    }
  }

  .arrow,
  .toggleTypeCalendar {
    flex: 1;
  }

  & div:nth-child(3) {
    flex: 1;
    margin-bottom: 0;
    max-height: 48px;
    @media (max-width: 767px) {
      display: none;
    }
  }
`

const SearchBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #DDE1E6;
  opacity: 0.8;
  border-radius: 8px;
  width: 100%;
  min-width: 318px;
  min-height: 48px;
  padding: 0 16px;
  margin-right: 20px;
  flex: 2;
  z-index: 2;

  img {
    background-color: transparent;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    margin-right: 12px;
  }

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
    padding: 12px 0px;
    border-radius: 8px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`

const DropDownWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #DDE1E6;
  //opacity: 0.8;
  border-radius: 8px;
  width: 100%;
  min-width: 204px;
  min-height: 48px;
  padding: 12px 16px;
  cursor: pointer;
  flex: 1;
  max-width: 204px;

  img {
    background-color: transparent;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
  }

  p {
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #697077;
    opacity: 0.8;
    background-color: transparent;
  }
`

const InputItem = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  background: #A2A9B0;
  border-radius: 6px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  z-index: 3;

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    margin-left: 8px;
    margin-right: 0;
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
  margin-top: ${props => props.calendar ? '-300px' : '0'};
  
  .wrapper {
    overflow: auto;
    width: 100%;
    position: relative;
  }
  

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
    
    .date-wrapper {
      position: relative;
      min-width: 50%;
    }

    div:first-child {
      margin-right: 24px;
    }

  }
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #DDE1E6;
  margin-bottom: 24px;
`

const SmallTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: #111111;
  width: 100%;
  margin-bottom: 16px;
`

const FilterBtn = styled.button`
  background-color: transparent;
  border: none;
  display: none;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    object-fit: contain;
  }

  @media (max-width: 767px) { 
    display: block;
  }

`

const SelectTodayBtn = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #4F7FFF;
  padding: 14px 20px;
  border: 1px solid #DDE1E6;
  border-radius: 6px;
  background-color: transparent;
  margin-right: 24px;
  cursor: pointer;
  @media (max-width: 767px) {
    display: none;
  }
`

export {
  CalendarWrap,
  AddEventBtn,
  SubCaptionBlock,
  SearchBlock,
  DropDownWrap,
  InputItem,
  TextModalOverlay,
  TextModalBody,
  FilterBtn,
  SelectTodayBtn,
  Line,
  SmallTitle
}