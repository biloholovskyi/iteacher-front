import React, {Component} from "react";
import Moment from "react-moment";
import moment from 'moment'

import {ChatItemWrap, Data, Message} from "./ChatStyled";

import ava from '../../../assets/media/icon/avatar.svg';

import ServerSettings from "../../../service/serverSettings";
const server = new ServerSettings();

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
    const {post} = this.props;
    
    return(
      <ChatItemWrap>
        <img src={post.ava ? `${server.getApi()}${post.ava.slice(1)}` : ava} alt="icon"/>
        <div>

          <Data>{post.name}, { currentTime }</Data>
          <Message>
            <div className="text">{post.label}</div>
          </Message>
        </div>
      </ChatItemWrap>
    )
  }
}