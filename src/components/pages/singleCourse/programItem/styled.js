import styled from "styled-components";

const ProgramItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  padding: 21px 24px;
  cursor: pointer;
  transition: .3s;

  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
    background-color: transparent;
  }

  img {
    width: 24px;
    height: 24px;
    object-position: center;
    object-fit: contain;
    background-color: transparent;
  }

  &:hover {
    box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  }
  
  @media (max-width: 575px) {
    border: 1px solid #DDE1E6;
    margin-bottom: 16px;
  }
`

export {
  ProgramItemWrap
}