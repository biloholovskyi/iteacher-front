import styled from "styled-components";

import close from '../../assets/media/icon/close.svg'

const TabHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #DDE1E6;
  margin-bottom: 32px;
  width: 100%;
  background-color: transparent;

  .left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
`

const TabHeadNav = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #697077;
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
  background-color: transparent;
  max-width: 150px;
  cursor: pointer;

  &.tabs-active {
    color: #000;
    padding-bottom: 18px;
    border-bottom: 2px solid #4F7FFF;
  }

  &:first-child {
    margin-right: 16px;
  }
`

const TabBody = styled.div``

const UsersWrap = styled.div`
  padding-top: 128px;
`

const Caption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #000000;
  }
`

const SortBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    background-color: transparent;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
  }

  & img:first-child {
    margin-right: 8px;
  }

  & p:nth-child(2) {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #697077;
    margin-right: 8px;
    cursor: pointer;
  }

  & p:nth-child(3) {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #111111;
    cursor: pointer;
  }
`

const UserItemWrap = styled.div`
  width: 100%;
  display: flex;
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 19px 24px;
  cursor: pointer;
  position: relative;

  .btnBlock {
    display: flex;
    align-items: center;
    background-color: transparent;
    min-width: 80px;
    opacity: 0;
    visibility: hidden;
    transition: .3s;
    position: absolute;
    right: 24px;
    z-index: 20;
  }

  &:hover .btnBlock {
    visibility: visible;
    opacity: 1;
  }

  &:hover .more .icons {
    display: none;
  }
`

const UserList = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Info = styled.div`
  display: flex;
  flex: 3;
  align-items: center;
  background-color: transparent;
  max-width: 500px;

  img {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    border-radius: 50%;
    object-fit: cover;
  }

  .nameBlock {
    background-color: transparent;
  }

  .name {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
    background-color: transparent;
  }

  .user {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #697077;
    background-color: transparent;
  }
`

const Email = styled.a`
  background-color: transparent;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: flex-start;

  .icons {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    background-color: transparent;
  }

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111;
  min-width: 250px;
`

const Data = styled.div`
  background-color: transparent;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  text-decoration: none;

  .icons {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    background-color: transparent;
  }

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111;

`

const MoreBtn = styled.div`
  background-color: transparent;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border: none;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .icons {
    width: 24px;
    height: 24px;
    background-color: transparent;
  }
`

const BtnBlock = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 16px;

  img {
    width: 24px;
    height: 24px;
    background-color: transparent;
  }
`

const BtnProfile = styled.button`
  background-color: rgba(221, 225, 230, 1);
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;

  img {
    width: 24px;
    height: 24px;
    background-color: transparent;
  }

  .hover {
    position: absolute;
    bottom: -50px;
    background: #111111;
    border-radius: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    padding: 10px 14px;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    //transition: .3s;
    display: none;

    .arrow {
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: #111;
      top: -4px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  }

  &:hover .hover {
    display: block;
  }
`

const CreateButton = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  background: #4F7FFF;
  border-radius: 6px;
  padding: 14px 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  white-space: nowrap;
`

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 48px 0;
  background-color: #fff;
  z-index: 500;
  box-shadow: 0px 0px 16px rgb(105 112 119 / 12%), 0px 8px 16px rgb(105 112 119 / 16%);
  border-radius: 8px;

  .close {
    background-image: url(${close});
    width: 25px;
    height: 25px;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }

  .form {
    width: 100%;
    padding: 0 48px;
    background-color: #fff;

    input {
      width: 400px;
    }

    .submit {
      background: #4F7FFF;
      box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
      border-radius: 6px;
      width: 100%;
      padding: 14px 0;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;
      border: none;
      cursor: pointer;
      //margin-bottom: 45px;
    }

    .forget {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 48px;
      background-color: #fff;

      p {
        background-color: #fff;
        margin-right: 8px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #111111;
      }

      button {
        background-color: transparent;
        border: none;
        text-decoration: underline;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #4F7FFF;
        cursor: pointer;
      }
    }
  }
`

const Inputs = styled.div`
  width: 100%;
  background: #DDE1E6;
  border-radius: 8px;
  height: 56px;
  position: relative;
  margin-bottom: 23px;

  select {
    height: 100%;
    border: none;
    outline: transparent;
    margin-left: 8px;
    padding-right: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    background-color: transparent;
    z-index: 2;
    font-family: 'Inter', 'Roboto', sans-serif;
    -webkit-letter-spacing: -0.01em;
    -moz-letter-spacing: -0.01em;
    -ms-letter-spacing: -0.01em;
    letter-spacing: -0.01em;
  }

  .label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    background-color: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #697077;
    opacity: 0.8;
    transition: .3s;
    z-index: 1;

    &.active {
      top: 15px;
      font-size: 12px;
      line-height: 18px;
      color: #4F7FFF;
      opacity: 0.8;
    }
  }

  .labelPass {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    background-color: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #697077;
    opacity: 0.8;
    transition: .3s;
    z-index: 1;

    &.active {
      top: 15px;
      font-size: 12px;
      line-height: 18px;
      color: #4F7FFF;
      opacity: 0.8;
    }
  }

  .input {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 10px 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #111111;
    opacity: 0.8;
  }
`

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(1, 1, 1, .2);
  z-index: 100;
`

const DropLIstItems = styled.ul`
  width: 100%;
  box-shadow: 0px 8px 38px -4px rgb(33 39 42 / 10%);
  background: #fff;
  position: absolute;
  z-index: 100;
  border-radius: 8px;
  top: 0px;
  left: 0;
  padding: 8px 16px;
  overflow: auto;
  max-height: 160px;

  .listItem {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #111111;
    min-height: 48px;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    display: none;
  }

`
const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 40px;
  min-width: 140px;

  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #697077;
  }

`

const EmailBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #697077;
  }

`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const User_blocked = styled.div`
  display: flex;
  align-items: center;
  background: rgba(218, 30, 40, 0.1);
  border-radius: 6px;
  margin-right: 44px;
  padding: 6px 10px;

  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #DA1E28;
  }

  .icon {
    width: 18px;
    height: 18px;
    object-fit: contain;
    margin-right: 8px;
  }

`

const UsersModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .24);
  z-index: 100;
`

const UserModal = styled.div`
  width: 100%;
  height: 100%;
  min-height: 569px;
  max-height: 569px;
  background: #FFFFFF;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.18), 0px 3px 5.5px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  max-width: 480px;
  position: relative;
  display: flex;
  flex-direction: column;

  .closed {
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
    right: 24px;
    top: 24px;
    position: absolute;
    z-index: 20;
  }

`

const NameBlock = styled.div`
  width: 100%;
  padding: 24px 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #DDE1E6;
  position: relative;

  .photo {
    border-radius: 50%;
    width: 128px;
    height: 128px;
    object-fit: cover;
    margin-bottom: 24px;
  }

  .name {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 4px;
  }

  .type {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #697077;
  }

`

const MainInfo = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const DateRegistration = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 57px;
  border-bottom: 1px solid #DDE1E6;

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #697077;
  }

  .info {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
  }

`

const Email_block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 57px;
  border-bottom: 1px solid #DDE1E6;

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #697077;
  }

  .info {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
  }

`

const Teacher = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 57px;
  border-bottom: 1px solid #DDE1E6;

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #697077;
  }

  .info {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;

    display: flex;
    align-items: center;

    .teacher_name {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
    }

    .avatar {
      width: 40px;
      height: 40px;
      object-fit: cover;
      margin-left: 16px;
    }

  }

`

const Course_info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 57px;
  border-bottom: 1px solid #DDE1E6;

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #697077;
  }

  .info {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
  }

`

const ButtonBlockUser = styled.button`
  width: 100%;
  border: 1px solid #DDE1E6;
  border-radius: 6px;
  padding: 14px 0;
  background-color: transparent;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #DA1E28;
  margin: 0 24px;
  max-width: 432px;
  cursor: pointer;
  margin-top: 24px;
`

const StudentList = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 57px;
  border: none;
  border-bottom: 1px solid #DDE1E6;
  background-color: transparent;
  cursor: pointer;

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #697077;
  }

  .arrow_section {
    display: flex;
    align-items: center;

    .info {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
    }

    img {
      width: 24px;
      height: 24px;
      object-fit: cover;
    }
  }
`

const CourseListModal = styled.div`
  width: 100%;
  height: 100%;
  min-height: 569px;
  max-height: 569px;
  background: #FFFFFF;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.18), 0px 3px 5.5px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  max-width: 480px;
  position: absolute;
  z-index: 30;
  display: flex;
  flex-direction: column;

  .closed {
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
    right: 24px;
    top: 24px;
    position: absolute;
    z-index: 20;
  }

  .caption {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 24px;
    border-bottom: 1px solid #DDE1E6;

    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
      cursor: pointer;
      margin-right: 24px;
    }

    p {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #111111;
    }
  }

`

const CourseListBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  align-items: center;
  max-height: 490px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

`

const CourseListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 70px;
  border-bottom: 1px solid #DDE1E6;

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
  }

`

const StudentListModal = styled.div`
  width: 100%;
  height: 100%;
  min-height: 569px;
  max-height: 569px;
  background: #FFFFFF;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.18), 0px 3px 5.5px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  max-width: 480px;
  position: absolute;
  z-index: 30;
  display: flex;
  flex-direction: column;

  .closed {
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
    right: 24px;
    top: 24px;
    position: absolute;
    z-index: 20;
  }

  .caption {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 24px;
    border-bottom: 1px solid #DDE1E6;

    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
      cursor: pointer;
      margin-right: 24px;
    }

    p {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #111111;
    }
  }

`

const StudentListBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  align-items: center;
  max-height: 490px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

`

const BgWrap = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background: ${props => props.bg};
  border-radius: 8px;
  padding: 4px;
  display: flex;
  align-items: flex-end;
  margin-right: 16px;
  overflow: hidden;

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 8px;
    letter-spacing: -0.01em;
    color: #fff;
    background-color: transparent;
  }

  .firstLeter {
    font-style: normal;
    font-weight: 800;
    font-size: 31px;
    line-height: 36px;
    background: transparent;
    position: absolute;
    bottom: 0px;
    left: 4px;
    letter-spacing: -0.01em;
    color: rgba(255, 255, 255, .1);
  }

  .unActive_label {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #111111;
    border-radius: 6px;
    padding: 6px 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
  }
}
`

const StudentListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 70px;
  border-bottom: 1px solid #DDE1E6;

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
  }


  .ava {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 16px;
  }
`

// не понятно почему нету стилей вообще никаких
const Phone = styled.div`

`

export {
  StudentListItem,
  StudentListModal,
  StudentListBody,
  BgWrap,
  CourseListBody,
  CourseListItem,
  ButtonBlockUser,
  DateRegistration,
  Teacher,
  Course_info,
  Email_block,
  BtnProfile,
  BtnBlock,
  MoreBtn,
  Data,
  Email,
  Info,
  UserList,
  UserItemWrap,
  SortBlock,
  Caption,
  TabBody,
  TabHead,
  TabHeadNav,
  UsersWrap,
  CreateButton,
  Modal,
  Inputs,
  ModalOverlay,
  DropLIstItems,
  DateBlock,
  EmailBlock,
  Right,
  User_blocked,
  UserModal,
  UsersModalOverlay,
  NameBlock,
  MainInfo,
  StudentList,
  CourseListModal,
  Phone
}
