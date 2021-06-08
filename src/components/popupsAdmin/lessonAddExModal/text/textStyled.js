import styled from "styled-components";

const TextModalOverlay = styled.div`
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

const TextModalBody = styled.div`
  width: 100%;
  max-width: 660px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: relative;
  padding: 24px;
  max-height: 745px;

  .closed {
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 24px;
  }

  .caption {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 24px;
    width: 100%;

    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #000000;
    }

    .arrow_back {
      border: none;
      background-color: transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
        background-color: transparent;
      }
    }
  }
  .smallText {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #000000;
    opacity: 0.8;
    margin-bottom: 12px;
    width: 100%;
  }

  .wrapper-class {
    width: 100%;
    opacity: 0.8;
    border-radius: 8px;
    position: relative;
    margin-bottom: 32px;
    min-height: 360px;
    max-height: 360px;
    background: #DDE1E6;
    display: flex;
    flex-direction: column;

    .toolbar-class {
      background: #DDE1E6;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom: 1px solid  #D0D3D7;
      padding: 16px 16px 12px;
      .icons {
        border-right: 1px solid #D0D3D7;
        margin-right: 12px;
        margin-bottom: 0;
        .rdw-option-wrapper {
          background-color: transparent;
          border: none;
          margin: 0;
          margin-right: 12px;
          padding: 0;
          width: 18px;
          height: 18px;
          min-width: 18px;
          object-fit: cover;
          &:hover {
            box-shadow: none;
          }
        }
      }
      .rdw-image-wrapper {
        //border-right: 1px solid #D0D3D7;
        //margin-right: 12px;
        margin-bottom: 0;
        .icons {
          background-color: transparent;
          border: none;
          &:hover {
            box-shadow: none;
          }
        }
      }
      .icon_text,
      .icon_list,
      .icon_font {

      }
    }
  }
  .editor-class {
    flex: 2;
    padding: 17px 16px 17px;
    cursor: text;
    .DraftEditor-root {
      min-height: 270px;
      .DraftEditor-editorContainer {
        .public-DraftStyleDefault-block {
          margin: 0;
        }
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export {TextModalBody, TextModalOverlay}