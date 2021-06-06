import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";

import LogOutWrap from '../profileModals/LogOutModal';
import ChangeWrap from '../profileModals/changePassword';
import SuccessChangePassModal from '../profileModals/successChangePassModal';
import PersonalData from '../profileModals/personalData';
import ErrorEmail from '../profileModals/errorEmail';
import NotificationModal from '../profileModals/notificationModal/notificationModal';

import ProfileModal from './ProfileModal';

import {AvatarBlock, NavList, Logo, HeaderWrap, MobileWrap, MobileWrapOverylay} from './headerStyle';

import logo from '../../assets/media/icon/logo.svg';
import bell from '../../assets/media/icon/content.png';
import ava from '../../assets/media/icon/avatar.svg';
import burger from '../../assets/media/icon/burger.svg';
import close from '../../assets/media/icon/close.svg';

import ServerSettings from "../../service/serverSettings";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoModal: false,
      LogOut: false,
      LogOutModal: false,
      changePassword: false,
      successChangePass: false,
      personalDataModal: false,
      errorEmail: false,
      notification: false,
      showMobileMenu: false
    }
    document.body.addEventListener('click', (e) => this.closeBody(e));
    document.body.addEventListener('click', (e) => this.closeBodyNotification(e));
  }

  // logout function
  LogOut(e) {
    e.preventDefault();
    if (localStorage.getItem('iteacher_login')) {
      window.localStorage.removeItem("iteacher_login");
      window.location.assign('/');
      this.setState(() => {
        return {
          ...this.state,
          LogOut: true
        }
      })
    }
  }

  // show profile modal
  showInfoModal = () => {
    if (!this.state.infoModal) {
      this.setState(() => {
        return {
          ...this.state,
          infoModal: true
        }
      })
    } else {
      this.setState(() => {
        return {
          ...this.state,
          infoModal: false
        }
      })
    }
  }

  //show log out modal
  showLogOut = () => {
    this.setState(() => {
      return {
        ...this.state,
        LogOutModal: true,
        infoModal: false
      }
    })
  }

// show mobile menu
  showMobileMenuLayout = () => {
    this.setState(() => {
      return {
        ...this.state,
        showMobileMenu: true
      }
    })
  }

  // close mobile menu
  closeMobileMenu = () => {
    this.setState(()=>{
      return {
        ...this.state,
        showMobileMenu: false
      }
    })
  }

  //close log out modal
  closeLogOut = () => {
    this.setState(() => {
      return {
        ...this.state,
        LogOutModal: false
      }
    })
  }

  //show change password modal
  showChangePass = () => {
    this.setState(() => {
      return {
        ...this.state,
        changePassword: true,
        infoModal: false
      }
    })
  }

  //close change password modal
  closeChangePass = () => {
    this.setState(() => {
      return {
        ...this.state,
        changePassword: false
      }
    })
  }

  //show change password modal
  showPersonalDataModal = () => {
    this.setState(() => {
      return {
        ...this.state,
        personalDataModal: true,
        infoModal: false,
      }
    })
  }

  //close change password modal
  closePersonalDataModal = () => {
    this.setState(() => {
      return {
        ...this.state,
        personalDataModal: false
      }
    })
  }

  //show success change password modal
  showSuccessChangePass = () => {
    this.setState(() => {
      return {
        ...this.state,
        changePassword: false,
        successChangePass: true
      }
    })
  }

  //close success change password modal
  closeSuccessChangePass = () => {
    this.setState(() => {
      return {
        ...this.state,
        successChangePass: false
      }
    })
  }

  // open notification modal
  showNotificationModal = () => {
    this.setState(() => {
      return {
        ...this.state,
        notification: true
      }
    })
  }

  // open notification modal
  closeNotificationModal = () => {
    this.setState(() => {
      return {
        ...this.state,
        notification: false
      }
    })
  }

  // close modal on click body
  closeBody = (e) => {
    const block = document.querySelector('.infoModal');
    if (block === null) {
      return
    }
    const button = document.querySelector('.ava');
    const status = e.target === block || block.contains(e.target);
    const statusModal = e.target === button;
    if (!status && !statusModal) {
      this.setState(() => {
        return {
          ...this.state,
          infoModal: false
        }
      });
    }
  }

  // close modal on click body
  closeBodyNotification = (e) => {
    const block = document.querySelector('.modal');
    if (block === null) {
      return
    }
    const button = document.querySelector('.bell');
    const status = e.target === block || block.contains(e.target);
    const statusModal = e.target === button;
    if (!status && !statusModal) {
      this.setState(() => {
        return {
          ...this.state,
          notification: false
        }
      });
    }
  }

  render() {
    const {personalDataModal, infoModal, LogOutModal, changePassword, successChangePass, errorEmail, notification, showMobileMenu} = this.state;
    const server = new ServerSettings();
    // навигация
    const nav = this.props.user.type === 'teacher' ? (
      <>
        <NavLink to='/schedule'>Расписание</NavLink>
        <NavLink to='/schedule-old'>Расписание старое</NavLink>
        <NavLink to='/students'>Ученики</NavLink>
        <NavLink to='/courses' >Курсы</NavLink>
        <NavLink to='/resources'>Полезное</NavLink>
      </>
    ) : (
      <>
        <NavLink to='/schedule'>Мое расписание</NavLink>
        <NavLink to='/homework'>Домашние задания</NavLink>
        <NavLink to='/dictionary'>Мой словарь</NavLink>
        <NavLink to='/resources'>Полезное</NavLink>
      </>
    )

    return (
      <>
        <HeaderWrap>
          <Link to='/'>
            <Logo src={logo} alt="img" />
          </Link>
          <NavList>
            {nav}
          </NavList>
          <AvatarBlock>
            <img onClick={this.showNotificationModal} className="bell" src={bell} alt="img"/>
            {this.props.user.type && <img onClick={this.showInfoModal} className="ava" src={this.props.user.photo ?  `${server.getApi()}${this.props.user.photo.slice(1)}` : ava} alt="img"/>}
            <img onClick={this.showMobileMenuLayout} className="burger" src={burger} alt="img"/>
          </AvatarBlock>
          {/*profile modal*/}
          {
            infoModal
              ? <ProfileModal
                user={this.props.user}
                logOut={this.showLogOut}
                changePass={this.showChangePass}
                personalDataModal={this.showPersonalDataModal}
              />
              : null
          }
          {/*log out modal*/}
          {
            LogOutModal
              ? <LogOutWrap
                exit={this.LogOut}
                close={this.closeLogOut}
              />
              : null
          }
          {/*change password modal*/}
          {
            changePassword
              ? <ChangeWrap
                closed={this.closeChangePass}
                successChange={this.showSuccessChangePass}
              />
              : null
          }
          {
            successChangePass
              ? <SuccessChangePassModal
                close={this.closeSuccessChangePass}
              />
              : null
          }
          {/*modal with personal data admin_users*/}
          {
            personalDataModal
              ? <PersonalData
                user={this.props.user}
                closed={this.closePersonalDataModal}
              />
              : null
          }
        </HeaderWrap>
        {
          showMobileMenu && (
            <MobileWrapOverylay>
              <img onClick={this.closeMobileMenu} src={close} className={'close'} alt="image"/>
              <MobileWrap>
                <NavList onClick={this.closeMobileMenu}>
                  {nav}
                </NavList>
              </MobileWrap>
            </MobileWrapOverylay>
          )
        }
        {
          changePassword
          ? <ChangeWrap
              closed={this.closeChangePass}
              successChange={this.showSuccessChangePass}

            />
          : null
        }
        {
          successChangePass
          ? <SuccessChangePassModal
              close={this.closeSuccessChangePass}
            />
        : null
        }
        {
          errorEmail
            ? <ErrorEmail/>
            : null
        }

        {/*Notification modal*/}
        {
          notification
            ? <NotificationModal
              closed={this.closeNotificationModal}
            />
            : null
        }
      </>
    )
  }
}
