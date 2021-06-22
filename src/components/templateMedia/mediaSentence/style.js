import styled from "styled-components";

const EmptyBlock = styled.div`
  display: ${props => props.sentence ? 'block' : 'flex'};
  margin-top: ${props => props.sentence || props.mt ? '16px' : '0'};
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
`

const EmptyItem = styled.div`
  width: 107px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #DDE1E6;
  border-radius: 100px;
  margin-right: ${props => props.noneMargin ? '0' : '16px'};
  margin-bottom: ${props => props.noneMargin ? '0' : '16px'};

  ${props => props.active
          && parseInt(props.active.task) === parseInt(props.task)
          && props.active.empty === props.empty
          && props.user.type === 'teacher'
          && {
            border: '1px solid #885CFF'
          }}

  ${props => props.active
          && parseInt(props.active.task) === parseInt(props.task)
          && props.active.empty === props.empty
          && props.user.type === 'student'
          && {
            border: '1px solid #4F7FFF'
          }}
  
  &:last-child {margin-right: 0;}
`

export {EmptyBlock, EmptyItem}