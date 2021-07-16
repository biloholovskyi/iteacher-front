import styled from "styled-components";

import closeIcon from './media/close.svg'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000000;
  background-color: rgba(0, 0, 0, .24);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Body = styled.form`
  padding: 32px 24px 24px 24px;
  background: #FFFFFF;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18), 0 3px 5.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  z-index: 500;
  position: relative;
  max-height: calc(100% - 16px);
  overflow: auto;
`

const Close = styled.div`
  background-image: url(${closeIcon});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 24px;
  right: 24px;
  cursor: pointer;
`

export {
  Wrapper,
  Body,
  Close
}