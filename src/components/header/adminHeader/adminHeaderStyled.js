import styled from "styled-components";

const HeaderWrap = styled.header`

  width: 100%;
  height: 80px;
  box-shadow: 0px 8px 4px -4px rgba(105, 112, 119, 0.08),
              0px 8px 4px -4px rgba(105, 112, 119, 0.16);
  padding: 20px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #fff;
  z-index: 100;

  @media (max-width: 991px) {
    padding: 16px;
  }

  @media (max-width: 575px) {
    padding: 12px 16px;
  }

`;

export { HeaderWrap };