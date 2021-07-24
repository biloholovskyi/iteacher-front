import styled from "styled-components";

const ListResult = styled.div`
  position: relative;
  .lr-wrap {
    position: absolute;
    top: 8px;
    background: #fff;
    left: 0;
    right: 0;
    padding: 0 16px;
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.18), 0px 3px 5.5px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }
  li {
    list-style: none;
    color: #111;
    cursor: pointer;
    padding: 10px 0;
    line-height: 22px;
    border-bottom: #DDE1E6 solid 1px;
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      opacity: .7;
    }
    span {
      color: #697077;
      display: block;
    }
  }
`

const DetailResult = styled.div`
  h4 {
    margin-bottom: 8px;
  }
  .dr-main {
    display: flex;
    flex-direction: row;
    border: 1px solid #DDE1E6;
    border-left: none;
    border-right: none;
    padding: 24px 0;
    margin-bottom: 24px;
    .dr-col {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 50%;
      padding: 8px 24px;
      &:first-child {
        border-right: 1px solid #DDE1E6;
      }
    }
    strong {
      font-size: 22px;
      font-weight: normal;
      line-height: 30px;
      display: block;
    }
  }
  .dr-other {
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid #DDE1E6;
    li {
      display: flex;
      flex-direction: row;
      list-style: none;
      padding: 8px 0;
      span {
        font-size: 14px;
        line-height: 20px;
        width: 50%;
      }
    }
  }
  .dr-example {
    li {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 8px 0;
      span {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`

export {
  ListResult,
  DetailResult
}