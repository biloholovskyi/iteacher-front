import styled from "styled-components";

const CleanWrapp = styled.div`

  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .lesson {

    margin-top: 60px;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    margin-bottom: 36px;
    object-fit: cover;
    
  }

  span {

    font-size: 16px;
    line-height: 22px;
    color: #697077;

  }

  .clear_title {

    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 16px;

  }

  .subtitle {
    margin-bottom: 32px;
  }
  
  button {
    position: absolute;
    right: 16px;
    bottom: 16px;
  }

`;

export { CleanWrapp };