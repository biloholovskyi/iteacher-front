import styled from "styled-components";

const TabsHead = styled.div`
  display: flex;
  border-bottom: 1px solid #DDE1E6;
  
  .tabs {
    margin-right: 32px;
    padding-bottom: 24px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #000000;
    cursor: pointer;
    
    &:last-child {
      margin-right: 0;
    }
    
    &.active {
      border-bottom: 2px solid #4F7FFF;
    }
  }
`
export {
  TabsHead,
}