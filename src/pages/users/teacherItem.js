import React, {Component} from "react";

import ava from '../../assets/media/icon/avatar.svg';
import letter from '../../assets/media/icon/letter.svg';
import more from '../../assets/media/icon/more.svg';
import block from '../../assets/media/icon/block.svg';
import profile from '../../assets/media/icon/profile.svg';
import block_red from '../../assets/media/icon/blocked.svg';

import {
  UserItemWrap,
  Info,
  Data,
  Email,
  MoreBtn,
  BtnBlock,
  BtnProfile,
  DateBlock,
  EmailBlock,
  Right,
  User_blocked
} from './usersStyled';

export default class TeacherItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // функция для форматирования даты
  formatDate(string) {
    let options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(string).toLocaleDateString(['ru'], options);
  }

  render() {
    const {hover} = this.state;
    const {data, teahcer, student} = this.props;
    const type = data.type === 'teacher' ? 'Преподаватель' :
      data.type === 'admin' ? 'Админ' :
        data.type === 'student' ? 'Студент' : '';
    if (data.type === 'admin' && teahcer) {
      return null
    }
    if (data.type === 'student' && teahcer) {
      return null
    }
    if (data.type === 'admin' && student) {
      return null
    }
    if (data.type === 'teacher' && student) {
      return null
    }

      // берем дату регистрации юзера
    const date = data.created_at;
    // обрезаем что б получить только день,месяц,год
    const MyNewDate = date.split("T")[0];
    const dateNormal = this.formatDate(MyNewDate);

    return (
      <UserItemWrap
        key={data.id}
      >
        <Info>
          <img src={data.photo ? data.photo : ava} alt="icon"/>
          <div className="nameBlock">
            <div className="name">{data.name}</div>
            <div className="user">{type}</div>
          </div>
        </Info>

        <Right>

          {/*<User_blocked>*/}
          {/*  <img src={block_red} alt="icon" className={'icon'}/>*/}
          {/*  <p className={'text'}>Заблокирован</p>*/}
          {/*</User_blocked>*/}

          <DateBlock>
            <p className={'text'}>Дата регистрации</p>
            <Data>{dateNormal}</Data>
          </DateBlock>

          <EmailBlock>
            <p className={'text'}>EMAIl</p>
            <Email href={"mailto:" + data.email}><img className={'media'} src={letter} alt="icon"/>{data.email}</Email>
          </EmailBlock>

          <MoreBtn className={'more'}>
            <img src={more} className={'media'} alt="icon"/>
          </MoreBtn>

        </Right>

        <div className={'btnBlock'}>
          <BtnBlock><img src={block} alt="icon"/></BtnBlock>
          <BtnProfile onClick={()=>this.props.open(data.id)}>
            <img src={profile} alt="icon"/>
            <div className="hover">
              <div className="arrow"/>
              Профиль
            </div>
          </BtnProfile>
        </div>
      </UserItemWrap>
    )
  }
}
