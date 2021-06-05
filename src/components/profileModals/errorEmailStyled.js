import styled from "styled-components";

const ErrorWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #DA1E28;
  position: fixed;
  left: 0;
  top: 80px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  padding: 7px 0;
  max-height: 36px;
  img {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    object-fit: contain;
    background-color: transparent;
  }
  
`

export {ErrorWrap}