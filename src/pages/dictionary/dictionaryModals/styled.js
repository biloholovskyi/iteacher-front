import styled from "styled-components";

import closeIcon from '../../../assets/media/icon/close.svg'

const Modal = styled.div`
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

const ModalContent = styled.div`
  width: 100%;
  max-width: 530px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 24px;
  max-height: 745px;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #000000;
    width: 100%;
    margin-bottom: 24px;
  }
`

const ModalClose = styled.div`
  background-image: url(${closeIcon});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 24px;
  right: 24px;
  cursor: pointer;
`

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
  .lr-item {
    color: #111;
    cursor: pointer;
    padding: 10px 0;
    line-height: 22px;
    border-bottom: #DDE1E6 solid 1px;
    &:last-child {
      border-bottom: none;
    }
    span {
      color: #697077;
      display: block;
    }
  }
`

export {
  Modal,
  ModalContent,
  ModalClose,
  SearchBlock,
  Input,
  ListResult
}