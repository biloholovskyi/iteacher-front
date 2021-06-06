import React, {Component} from "react";
import Moment from "react-moment";
import moment from 'moment'

import {ChatItemWrap, Data, Message} from "./ChatStyled";
import note from '../../../../assets/media/icon/not.svg';


export default class ChatItem extends Component {
  render() {
    const {label} = this.props;
    return (
      <ChatItemWrap>
        <Message>
          <div className="iconNote">
            <img src={note} alt="icon"/>
          </div>
          <div className="text">{label}</div>
        </Message>
      </ChatItemWrap>
    )
  }
}