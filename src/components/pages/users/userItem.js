import React, {Component} from "react";

import ava from '../../../assets/media/icon/avatar2.svg';
import letter from '../../../assets/media/icon/letter.svg';
import phones from '../../../assets/media/icon/phone.svg';
import more from '../../../assets/media/icon/more.svg';
import block from '../../../assets/media/icon/block.svg';
import profile from '../../../assets/media/icon/profile.svg';

import {UserItemWrap, Info, Phone, Email, MoreBtn, BtnBlock, BtnProfile} from './usersStyled';

export default class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  showBtn = () => {
    this.setState(() => {
      return {
        ...this.state,
        hover: true
      }
    })
  }

  render(){
    const {hover} = this.state;
    const {data} = this.props;
    return (
      <UserItemWrap
        key={data.id}
      >
        <Info>
          <img src={data.photo} alt="icon"/>
          <div className="nameBlock">
            <div className="name">{data.name}</div>
            <div className="user">Ученик</div>
          </div>
        </Info>
        <Email href={"mailto:" + data.email}><img className={'icons'} src={letter} alt="icon"/>{data.email}</Email>
        <Phone href='#'><img className={'icons'} src={phones} alt="icon"/>+380000000</Phone>
        {
          hover
          ? null
          : <MoreBtn
              className={'more'}
              onClick={this.showBtn}
            ><img src={more} className={'icons'} alt="icon"/></MoreBtn>
        }
        {
          hover
            ? <div className={'btnBlock'}>
              <BtnBlock><img src={block} alt="icon"/></BtnBlock>
              <BtnProfile>
                <img src={profile} alt="icon"/>
                <div className="hover">
                  <div className="arrow"/>
                  Профиль
                </div>
              </BtnProfile>
            </div>
            : null
        }
      </UserItemWrap>
    )
  }
}
