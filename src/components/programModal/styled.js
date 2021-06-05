import styled from "styled-components";

const ProgramModalWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
  z-index: 11;
  
  @media (max-width: 767px) {
    z-index: 102;
  }
  
`

const ProgramModalBody = styled.div`
  box-shadow: 0px 0px 6px rgba(105, 112, 119, 0.08), 0px 4px 8px rgba(105, 112, 119, 0.1);
  background-color: #fff;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 600px;
  max-width: 600px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 24px 0;

  .close {
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    position: absolute;
    top: 28px;
    right: 28px;
    background-color: transparent;
    cursor: pointer;
    z-index: 11;
    
    @media (max-width: 575px) {
      display: block;
    }
    
  }

  @media (max-width: 767px) {
   min-width: unset;
    padding: 56px 0;
  }

`

const Caption = styled.div`
  padding: 0 24px 28px 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #111111;
  border-bottom: 1px solid #DDE1E6;
  background-color: #fff;
  margin-bottom: 24px;
  
  @media (max-width: 575px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 32px;
    padding: 0 16px 0;
    border-bottom: none;
  }
  
`

const Content = styled.div`
  padding: 0 24px 80px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  background-color: transparent;

  &::-webkit-scrollbar {
    display: none;
  }
  
  .sectionOverlay {
    width: 100%;
  }
  
  .sectionWrapper {
    margin-bottom: 24px;
    
    &:nth-child(1) { 
      margin-bottom: 16px!important;
    }
    
  }
  
  & .sectionWrapper:last-child {
    margin-bottom: 0;
  }

  // для видео
  .react-player {
    max-width: 552px;
  }
`

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #111111;
  background-color: transparent;
  margin-bottom: 24px;
  
  @media (max-width: 575px) {
    font-size: 18px;
    line-height: 24px;
  }
  
`

const SmallTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 8px;
  background-color: transparent;

  @media (max-width: 575px) {
    font-size: 16px;
    line-height: 22px;
  }
  
`

const TaskWrapper = styled.div`
  & * {
    padding-left: ${props => props.taskStyled === 'TEXT' && '0'};
    padding-right: ${props => props.taskStyled === 'TEXT' && '0'};
  }
  margin-top: 12px;
  border: ${props => props.taskStyled === 'DOCUMENT' || props.taskStyled === 'audio' ? '1px solid #DDE1E6' : 'none'};
  border-radius: ${props => props.taskStyled === 'DOCUMENT' || props.taskStyled === 'audio' ? '8px' : 'none'};
  padding: ${props => props.taskStyled === 'DOCUMENT' || props.taskStyled === 'audio' ? '12px' : '0'};
  
  .test__container {
    & * {
      margin-left: 0;
    }
  }
  
`

export {
  ProgramModalWrap,
  ProgramModalBody,
  Caption,
  Content,
  Title,
  SmallTitle,
  TaskWrapper
}