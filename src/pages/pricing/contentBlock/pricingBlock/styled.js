import styled from "styled-components";

const Count = styled.div`
  opacity: 0.8;
  border: 1px solid #DDE1E6;
  border-radius: 8px;
  display: flex;
  margin-bottom: 32px;
`

const Button = styled.div`
  width: 48px;
  height: 48px;
  background-image: ${props => `url(${props.img})`};
  background-position: center;
  background-size: 18px;
  background-repeat: no-repeat;
  cursor: pointer;
`

const Number = styled.div`
  width: 72px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #E4E7EB;
  border-right: 1px solid #E4E7EB;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #000000;
`

export {
  Count,
  Button,
  Number
}