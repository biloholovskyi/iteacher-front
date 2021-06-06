import React, {Component} from "react";
import Moment from "react-moment";
import moment from 'moment'

import {ChatItemWrap, Data, Message} from "./ChatStyled";
import ava from '../../../../assets/media/icon/avatar2.svg';

export default class ChatItem  extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment().locale("ru").format('H:mm')
    };
  }
  componentDidMount() {
    this.intervalIdx = (() => this.setState ({
      currentTime: moment().format()
    }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalIdx);
  }

  render() {
    const { currentTime } = this.state;
    const {label, onDelete} = this.props;
    return(
      <ChatItemWrap>
        <img src={ava} alt="icon"/>
        <div>

          <Data>Johnni Douglas, { currentTime }</Data>
          <Message>
            <div className="text">{label}</div>
          </Message>
        </div>
      </ChatItemWrap>
    )
  }
}