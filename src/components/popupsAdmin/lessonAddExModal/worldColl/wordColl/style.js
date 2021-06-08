import styled from "styled-components";

const AddColumn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #DDE1E6;
  width: calc(100% + 48px);
  margin-right: -24px;
  margin-left: -24px;
  height: 56px;
  min-height: 56px;
  cursor: pointer;
  margin-bottom: 32px;
  
  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    object-position: center;
    display: block;
    margin-right: 11px;
  }
  
  p {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #4F7FFF;
  }
`

const Form = styled.form`
  width: 100%;
`

export {AddColumn, Form}