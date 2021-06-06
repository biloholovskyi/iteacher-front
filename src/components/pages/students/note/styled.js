import styled from "styled-components";

const NotesWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
`

const Notes = styled.div`
  background: #fff;
  width: 100%;
  max-width: 594px;
  min-height: 100vh;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  padding: 28px 0 24px;
  box-shadow: 0px 0px 6px rgba(105, 112, 119, 0.08), 0px 4px 8px rgba(105, 112, 119, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: .4s;

  .notesHeader {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 28px;
    border-bottom: 1px solid #DDE1E6;
    background-color: #fff;

    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #111111;
      background-color: #fff;
    }

    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
      object-position: center;
      background-color: #fff;
      cursor: pointer;
    }
  }
`

export {
  Notes,
  NotesWrap
}