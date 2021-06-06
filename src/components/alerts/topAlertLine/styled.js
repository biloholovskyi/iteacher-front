import styled from "styled-components";

const AlertLine = styled.div`
  margin-top: ${props => props.top + 'px'};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #FF832B;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  
  img {
    width: 24px;
    min-width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    margin-right: 16px;
  }
`

const Fake = styled.div`
  height: 48px;
`

export {AlertLine, Fake}