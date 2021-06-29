import styled from "styled-components";

const StartRecord = styled.button`
  padding: 12px 16px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #4F7FFF;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #DDE1E6;
  border-radius: 6px;
`

const LineWrapper = styled.div`

`

const TimeLine = styled.div`
  width: 100%;
  height: 4px;
  background: #DDE1E6;
`

const StopRecord = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  margin-top: 12px;
  cursor: pointer;
  
  .img {
    background-color: #4F7FFF;
    width: 12px;
    height: 12px;
    margin-right: 14px;
  }
  
  .text {
    color: #4F7FFF;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
  }
`

export {
  StartRecord,
  LineWrapper,
  TimeLine,
  StopRecord
}