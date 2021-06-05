import styled from "styled-components";

const Button = styled.button`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  background: #4F7FFF;
  border-radius: 6px;
  padding: 14px 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${props => props.width ? `${props.width}px` : 'auto'};
`

export {Button}