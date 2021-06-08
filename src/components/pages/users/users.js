import React, {Component} from "react";
import axios from 'axios'
import {connect} from "react-redux";

import {getAllUsers, loginUser} from "../../../actions";

import UsersModal from './usersModal';
import AllUsersList from './allUsersTab';
import TeacherTab from './teacherTab';
import StudentTab from './studentTab';

import {
  TabBody,
  TabHead,
  TabHeadNav,
  UsersWrap,
  Caption,
  SortBlock,
  CreateButton,
  Modal,
  Inputs,
  ModalOverlay,
} from './usersStyled';

import arrow from "../../../assets/media/icon/arrow.svg";
import sort from "../../../assets/media/icon/sort.svg";

import ServerSettings from "../../../service/serverSettings";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabStatus: 'all',
      users: [],
      modals: false,
      infoModal: false,
      modalUser: null
    }
    document.body.addEventListener('click', (e) => this.closeBody(e));
  }

  componentDidMount() {
    this.getUsers().catch(error => console.error(error));
  }

  // регистрация нового пользователя
  registrationNewUser = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const newUser = {
      type: e.target.type.value,
      login: e.target.login.value,
      password: e.target.password.value,
      email: e.target.email.value,
      name: e.target.name.value
    }

    const server = new ServerSettings();
    await axios.post(`${server.getApi()}api/users/`, newUser)
      .then(res => {
        this.setState({modals: false})
      }).catch(error => console.error(error));
  }

  getUsers = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/users/`)
      .then(res => {
        this.props.getAllUsers(res.data);
        this.setState({users: res.data});
      }).catch(error => console.error(error));
  }

  // change active tab
  changeTab = (e, tab) => {
    this.setState({tabStatus: tab});
    document.querySelector('.tabs-active').classList.remove('tabs-active');
    e.target.classList.add('tabs-active');
  };

  // close modal on click body
  closeBody = (e) => {
    const block = document.querySelector('.addUsers_modal');
    if (block === null) {
      return
    }
    const button = document.querySelector('.add_users--btn');
    const status = e.target === block || block.contains(e.target);
    const statusModal = e.target === button;
    if (!status && !statusModal) {
      this.setState(() => {
        return {
          ...this.state,
          modals: false
        }
      });
    }
  }

  // open users modal
  openUserModal = (id) => {
    const userData = this.state.users.find(u => parseInt(u.id) === parseInt(id));
    this.setState({
      modalUser: userData,
      infoModal: id
    });
  }

  // close users modal
  closeUserModal = () => {
    this.setState({
      infoModal: false
    });
  }

  render() {
    return (
      <UsersWrap>
        <div className="container">
          <Caption>
            <h2>Пользователи</h2>
            <SortBlock>
              <img src={sort} alt="icon"/>
              <p>Сортировать по</p>
              <p><b>алфавиту</b></p>
              <img src={arrow} alt="icon"/>
            </SortBlock>
          </Caption>
          <TabHead>
            <div className="left">
              <TabHeadNav className='tabs-active' onClick={(e) => this.changeTab(e, 'all')}>Все
                пользователи</TabHeadNav>
              <TabHeadNav onClick={(e) => this.changeTab(e, 'teacher')}>Преподователи</TabHeadNav>
              <TabHeadNav onClick={(e) => this.changeTab(e, 'student')}>Ученики</TabHeadNav>
            </div>
            <CreateButton className={'add_users--btn'} onClick={() => this.setState({modals: true})}>Добавить
              пользователя</CreateButton>
          </TabHead>
          <TabBody>
            {
              this.state.tabStatus === 'all'
                ? <AllUsersList
                  open={this.openUserModal}
                  users={this.state.users}/>
                : null
            }
            {
              this.state.tabStatus === 'teacher'
                ? <TeacherTab
                  open={this.openUserModal}
                  users={this.state.users}/>
                : null
            }
            {
              this.state.tabStatus === 'student'
                ? <StudentTab
                  open={this.openUserModal}
                  users={this.state.users}/>
                : null
            }
          </TabBody>
        </div>
        {this.state.modals && (
          <ModalOverlay>
            <Modal className={'addUsers_modal'}>
              <div className="close" onClick={() => this.setState({modals: false})}/>
              <form onSubmit={(e) => this.registrationNewUser(e)} className={'form'}>
                <Inputs>
                  <select name={'type'}>
                    <option value={'teacher'}>Преподаватель</option>
                    <option value={'admin'}>Админ</option>
                  </select>
                </Inputs>
                <Inputs>
                  {/*<label className={'label'} >Номер телефона или Email</label>*/}
                  <input className={'input'} name={'name'} type="text" placeholder={'Имя'}/>
                </Inputs>
                <Inputs>
                  <input className={'input'} name={'password'} type="text" placeholder={'Пароль'}/>
                </Inputs>
                <Inputs>
                  <input className={'input'} name={'login'} type="text" placeholder={'Логин'}/>
                </Inputs>
                <Inputs>
                  <input className={'input'} name={'email'} type="text" placeholder={'Email'}/>
                </Inputs>
                <input className={'submit'} type='submit' value={'Сохранить и продолжить'}/>
              </form>
            </Modal>
          </ModalOverlay>
        )}

        {
          this.state.infoModal && (
            <UsersModal
              user={this.state.modalUser}
              closed={this.closeUserModal}
            />
          )
        }

      </UsersWrap>
    )
  }
}


const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = {
  getAllUsers,
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);