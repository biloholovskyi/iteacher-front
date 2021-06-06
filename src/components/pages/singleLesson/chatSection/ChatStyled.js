import styled from "styled-components";

const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
  overflow: auto;
  height: 100%;
  &::-webkit-scrollbar {
    display:none;
  }
`

const ChatItemWrap = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
  img {
    width: 32px;
    height: 32px;
    min-width: 32px;
    object-fit: contain;
    margin-right: 8px;
  }
`

const Data = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #697077;
  background-color: #fff;
  margin-bottom: 7px;
`

const Message = styled.div`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
letter-spacing: -0.01em;
color: #111111;
background: #F8F9FB;
border: 1px solid rgba(221, 225, 230, 0.4);
border-radius: 8px;
padding: 12px;
`
const ChatWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
`

export {ChatWrap, ChatBody, ChatItemWrap, Data, Message}