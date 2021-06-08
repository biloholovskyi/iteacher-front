import React from 'react';
import {Link} from 'react-router-dom';

import {AvatarBlock, NavList, Logos, MobileWrap, MobileWrapOverylay} from './headerMainStyled';
import ProfileModal from "../../ProfileModal";
import LogOutWrap from "../../../profileModals/LogOutModal";
import ChangeWrap from "../../../profileModals/changePassword";
import SuccessChangePassModal from "../../../profileModals/successChangePassModal";
import PersonalData from "../../../profileModals/personalData";
import ErrorEmail from "../../../profileModals/errorEmail";

import logoImg from "../../../../assets/media/icon/logo.svg";
import burger from "../../../../assets/media/icon/burger.svg";
import close from "../../../../assets/media/icon/close.svg";

import ServerSettings from "../../../../service/serverSettings";
const server = new ServerSettings()

// навигация
const linksArr = [
  ['Пользователи', '/admin-panel/users'],
  ['Курсы', '/admin-panel/templates'],
  ['Полезное', '/admin-panel/resources'],
];

class HeaderMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      infoModal: false,
      LogOut: false,
      LogOutModal: false,
      changePassword: false,
      successChangePass: false,
      personalDataModal: false,
      errorEmail: false,
      showMobileMenu: false
    }
    document.body.addEventListener('click', (e) => this.closeBody(e));
  }

  componentDidMount() {
    this.setUserData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(this.props.user) !== JSON.stringify(prevProps.user)) {
      this.setUserData();
    }
  }

  setUserData = () => {
    if (this.props.user) {
      this.setState({userData: this.props.user});
    }
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
    this.setState(() => {
      return {
        ...this.state,
        showMobileMenu: false
      }
    })
  }

  // close modal on click body
  closeBody = (e) => {
    const block = document.querySelector('.infoModal');
    if (block === null) {
      return
    }
    const button = document.querySelector('.face');
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

  render() {
    const {userData, showMobileMenu} = this.state;

    return (
      <>
        <Logos src={logoImg} alt="img"/>
        <NavList>
          {linksArr.map((item, k) =>
            <Link to={item[1]} key={k}>
              <li
                className="header__link"
                tabIndex="-1"
              >
                {item[0]}
              </li>
            </Link>
          )}
        </NavList>
        <AvatarBlock avatar={userData.photo ? `${server.getApi()}${userData.photo.slice(1)}` : null}>
          <div className="bell"/>
          <div className="face" onClick={this.showInfoModal}/>
          <img onClick={this.showMobileMenuLayout} className="burger" src={burger} alt="img"/>
        </AvatarBlock>
        {
          showMobileMenu && (
            <MobileWrapOverylay>
              <img onClick={this.closeMobileMenu} src={close} className={'close'} alt="image"/>
              <MobileWrap>
                <NavList onClick={this.closeMobileMenu}>
                  {linksArr.map((item, k) =>
                    <Link to={item[1]} key={k}>
                      <li
                        className="header__link"
                        tabIndex="-1"
                      >
                        {item[0]}
                      </li>
                    </Link>
                  )}
                </NavList>
              </MobileWrap>
            </MobileWrapOverylay>
          )
        }
        {
          this.state.infoModal
            ? <ProfileModal
              user={this.props.user}
              logOut={this.showLogOut}
              changePass={this.showChangePass}
              personalDataModal={this.showPersonalDataModal}
            />
            : null
        }
        {
          this.state.LogOutModal
            ? <LogOutWrap
              exit={this.LogOut}
              close={this.closeLogOut}
            />
            : null
        }
        {/*change password modal*/}
        {
          this.state.changePassword
            ? <ChangeWrap
              closed={this.closeChangePass}
              successChange={this.showSuccessChangePass}
            />
            : null
        }
        {
          this.state.successChangePass
            ? <SuccessChangePassModal
              close={this.closeSuccessChangePass}
            />
            : null
        }
        {/*modal with personal data admin_users*/}
        {
          this.state.personalDataModal
            ? <PersonalData
              user={this.props.user}
              closed={this.closePersonalDataModal}
            />
            : null
        }
        {
          this.state.changePassword
            ? <ChangeWrap
              closed={this.closeChangePass}
              successChange={this.showSuccessChangePass}

            />
            : null
        }
        {
          this.state.successChangePass
            ? <SuccessChangePassModal
              close={this.closeSuccessChangePass}
            />
            : null
        }
        {
          this.state.errorEmail
            ? <ErrorEmail/>
            : null
        }
      </>
    )
  }
}

export default HeaderMain;