import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 92px;
  padding-top: 32px;
  display: flex;
  padding-right: 0;
  padding-left: 0;
  
  .left {
    width: 420px;
    min-width: 420px;
  }
  
  .right {
    width: 100%;
    padding-left: 48px;
  }

  @media(max-width: 1449px) {
    max-width: 1100px;
  }

  @media(max-width: 1159px) {
    max-width: 900px;
  }

  @media(max-width: 991px) {
    max-width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    flex-direction: column;

    .left {
      width: 100%;
      margin-bottom: 16px;
    }

    .right {
      padding-left: 0;
    }
  }
`

export {
  Wrapper
}