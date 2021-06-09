import React, {Component} from 'react';
import InviteEmail from "./inviteEmail";
import InviteLink from "./inviteLink";

//styled
import {StudentModalWrap, StudentModal, TabBody,TabHead,TabHeadNav} from './addStudentModalStyled';
// icon
import closed from '../../../assets/media/icon/close.svg';


export default class AddStudentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabStatus: 'email',
      email: ''
    }
  }

  // change active tab
  changeTab = (e, tab) => {
    this.setState({tabStatus: tab});
    document.querySelector('.tabs-active').classList.remove('tabs-active');
    e.target.classList.add('tabs-active');
  };

  // ввод емейла
  onInput = (e) => {
    this.setState({email: e.target.value})
  }

  render() {
    const {close, func} = this.props;
    return (
      <StudentModalWrap>
        <StudentModal className='studentModal'>
          <img src={closed} alt="icon" className='close'  onClick={(e) => {close(e)}}/>
          <h2>Добавить ученика</h2>
          <TabHead>
            <TabHeadNav className='tabs-active' onClick={(e) => this.changeTab(e, 'email')}>Пригласить по Email</TabHeadNav>
            {/*<TabHeadNav onClick={(e) => this.changeTab(e, 'link')}>Пригласить по ссылке</TabHeadNav>*/}
          </TabHead>
          <TabBody>
            {
              this.state.tabStatus === 'email'
                ? <InviteEmail value={this.state.email} onInput={this.onInput}/>
                : <InviteLink/>
            }
            <button className='invite'
                    onClick={() => {func(this.state.email)}}
            >
              {
                this.state.tabStatus === 'email'
                ? 'Пригласить'
                : 'Скопировать ссылку'
              }
            </button>
          </TabBody>
        </StudentModal>
      </StudentModalWrap>
    )
  }
}
