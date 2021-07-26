import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  height: 100%;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(1,1,1,.2);

  @media (max-width: 767px) {
    padding: 0 16px;
  }
`

const FormModal = styled.form`
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  max-width: 660px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 24px;
    background-color: #fff;

    @media (max-width: 575px) {
      font-size: 20px;
    }

  }
  .close {
    position: absolute;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    top: 24px;
    right: 24px;
    background-color: #fff;
    cursor: pointer;
  }
`

export {
  Wrapper,
  FormModal
}