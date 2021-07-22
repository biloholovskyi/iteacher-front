import styled from "styled-components";

const SearchBlock = styled.div`
  width: 100%;
`

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #DDE1E6;
  opacity: 0.8;
  border-radius: 8px;
  width: 100%;
  min-height: 48px;
  padding: 0 16px;
  margin-right: 20px;
  img {
    background-color: transparent;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    margin-right: 12px;
  }
  input {
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
    padding: 12px 0px;
    border-radius: 8px;
  }
`

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

export {
  SearchBlock,
  Input,
  ListResult
}