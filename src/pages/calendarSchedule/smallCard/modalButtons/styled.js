import styled from "styled-components";

const Wrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18), 0 3px 5.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 8px 16px;
  position: absolute;
  top: 16px;
  right: 60px;
`

const Button = styled.button`
  display: block;
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: -0.01em;
  color: ${props => props.delete ? '#DA1E28' : '#000000'};
`

export {
  Wrapper,
  Button
}