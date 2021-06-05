import styled from "styled-components";

const QuestionLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #DDE1E6;
  min-height: 62px;
  
  &:first-child {
    border-top: 1px solid #DDE1E6;
    margin-top: 16px;
  }
  
  p {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
  }
`

const SwitchBlock = styled.div`
  border: 1px solid #DDE1E6;
  border-radius: 4px;
  background: rgba(221, 225, 230, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SwitchItem = styled.div`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: ${props => props.result === 'True' && props.true ? '#4F7FFF' : props.result === 'False' && props.false ? '#4F7FFF' : 'rgba(105, 112, 119, 0.8)'};
  height: 32px;
  width: 60px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.result === 'True' && props.true ? '#fff' : props.result === 'False' && props.false ? '#fff' : 'transparent'};
  box-shadow: ${props => props.result === 'True' && props.true ? '0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12)' : props.result === 'False' && props.false ? '0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12)' : 'none'};
  cursor: pointer;
;
  border-radius: 4px;
  
  &:first-child {margin-right: 12px;}
`

export {QuestionLine, SwitchBlock, SwitchItem}