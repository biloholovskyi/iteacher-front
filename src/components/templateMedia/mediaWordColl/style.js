import styled from "styled-components";

const Columns = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 16px;
`

const Column = styled.div`
  width: 100%;
  margin-right: 16px;
  &:last-child {margin-right: 0}
  border: 1px solid #DDE1E6;
  border-radius: 8px;
  
  .title-block {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #697077;
    background: rgba(221, 225, 230, 0.4);
    padding: 16px;
  }
  
  .words-block {
    height: max-content;
    min-height: 100px;
    padding: 16px 16px 0 16px;
    display: flex;
    flex-wrap: wrap;

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
  }
`

export {Column, Columns};