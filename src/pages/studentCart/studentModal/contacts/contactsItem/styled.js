import styled from "styled-components";

import iconDelete from './media/trash.svg'

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .socialDropList {
    margin-right: 16px;
  }
  
  &:hover {
    .delete {
      opacity: 1;
      visibility: visible;
    }
  }
`

const Delete = styled.div`
  cursor: pointer;
  background-image: url(${iconDelete});  
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  min-width: 24px;
  margin-bottom: 23px;
  margin-left: 24px;
  transition: all .3s;
  opacity: 0;
  visibility: hidden;
`

export {
  Item,
  Delete
}