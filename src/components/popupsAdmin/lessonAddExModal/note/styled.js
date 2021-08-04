import styled from "styled-components";

const NoteEditor = styled.div`
  width: 100%;
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

export {NoteEditor}