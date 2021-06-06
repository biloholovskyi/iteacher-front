import styled from "styled-components";

const NotesBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 24px;
  background-color: #fff;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export {
  NotesBody
}