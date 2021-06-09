import styled from "styled-components";

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
  
  tr {
    vertical-align: middle;

    td:first-child { 
      border-top-left-radius: 8px; 
      border-bottom-left-radius: 8px; 
    }

    td:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`

export {
  TableWrapper
}