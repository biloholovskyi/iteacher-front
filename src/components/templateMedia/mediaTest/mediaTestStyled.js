import styled from 'styled-components';


const TestWrap = styled.div`

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 7px;
  
  .test__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
`

const CheckboxWrap = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    //margin-left: 50px;
    margin-bottom: 11px;
    .word {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
    }
    
    .checkbox {
      width: 22px;
      height: 22px;
      margin-right: 16px;
    }
    
`

export {TestWrap, CheckboxWrap}