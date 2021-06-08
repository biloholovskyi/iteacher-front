import styled from "styled-components";

const ChooseTemplateModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, .2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
`

const ChooseTemplateModalBody = styled.div`
  width: 100%;
  max-width: 660px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  padding: 24px 24px 0 24px;
  max-height: 700px;

  .closed {
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 24px;
  }

  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 32px;
  }
`

const ListBody = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & .listItem:nth-child(3n) {
    margin-right: 0px;
  }

`

const ListItemWrap = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: calc(100% / 3 - 18px);
  margin-right: 18px;
  margin-bottom: 24px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  min-width: 190px;

  .bGround {
    width: 100%;
    background-color: #DDE1E6;
    border-radius: 8px;
    min-height: 144px;
    margin-bottom: 12px;
    background-image: url(${props => props.bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
    margin-bottom: 0;
  }
`

export {ListItemWrap, ListBody, ChooseTemplateModalBody, ChooseTemplateModalOverlay}