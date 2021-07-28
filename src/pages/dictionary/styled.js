import styled from "styled-components";

const DictionaryWrap = styled.div`
  padding-top: 122px;
  overflow-x: hidden;
  .container {
    height: calc(100vh - 122px);
    overflow-y: auto;
    overflow-x: hidden;
  }
  h1 {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 24px;
  }
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  .search-input {
    width: 318px;
  }
`;

const WordList = styled.div`
  padding-bottom: 24px;
  table {
    width: 100%;
    color: #697077;
    text-align: left;
    border-collapse: separate;
    border-spacing: 0 8px;
    margin-top: -8px;
    .icon-sound {
      background-color: #DDE1E6;
      vertical-align: middle;
      margin-right: 16px;
    }
  }
  thead {
    th {
      width: 30%;
      position: relative;
      border-top: 1px solid #dde1e6;
      border-bottom: 1px solid #dde1e6;
      background: rgba(221, 225, 230, 0.2);
      padding: 12px 16px;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      text-transform: uppercase;
      &:last-of-type {
        width: 10%;
      }
      &:first-of-type:before,
      &:last-of-type:after {
        content: "";
        display: block;
        border-top: 1px solid #dde1e6;
        border-bottom: 1px solid #dde1e6;
        background: rgba(221, 225, 230, 0.2);
        position: absolute;
        width: 100vh;
        height: 100%;
        bottom: 0;
        top: -1px;
      }
      &:first-of-type:before {
        right: 100%;
      }
      &:last-of-type:after {
        left: 100%;
      }
    }
  }
  tbody {
    .tr-empty {
      height: 7px;
      &:after{display: none;}
      td {padding: 0;}
    }
    tr {
      position: relative;
      &:after {
        z-index: 1;
        content: "";
        display: block;
        background: #ffffff;
        box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06),
          0px 2px 2px rgba(105, 112, 119, 0.12);
        border-radius: 8px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 100;
        width: 100%;
      }
      td {
        z-index: 2;
        position: relative;
        padding: 16px;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        &:last-child {
          text-align: right;
        }
      }
    }
  }
`;

export { DictionaryWrap, NavBar, WordList };
