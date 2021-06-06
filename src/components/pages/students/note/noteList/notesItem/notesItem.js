import React, {Component} from "react";
import moment from 'moment'

import {NotesItemWrap, Data, Message} from "./styled";

class NotesItem  extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment().locale("ru").format('dddd, H:mm')
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
    const { note, onDelete } = this.props;
    const time = note.time.split('-');
    return(
      <NotesItemWrap>
        <Data>{`${time[2].substr(0, 2)}.${time[1]}.${time[0]} : ${time[2].substr(3, 5)}`}</Data>
        <Message>
          <div className="text">{note.text}</div>
          <button
            onClick={onDelete}
          >Удалить</button>
        </Message>
      </NotesItemWrap>
    )
  }
}

export default NotesItem;