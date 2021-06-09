import React, {Component} from "react";
import axios from "axios";

import {InputWrap} from "./styled";

import plus from '../../../../assets/media/icon/plusW.svg';

import ServerSettings from "../../../../service/serverSettings";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.serverSettings = new ServerSettings();
  }

  // status input
  onValueChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  // checked form send
  onSubmit = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    await axios.post(`${this.serverSettings.getApi()}api/notations/`, {
      text: this.state.text,
      teacher: this.props.teacherID,
      student: this.props.studentID
    })
      .then(res => {
        const date = new Date();
        const timeString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}`

        const newNote = {
          id: 999,
          student: this.props.studentID,
          teacher: this.props.teacherID,
          text: this.state.text,
          time: timeString
        }
        this.props.onAdd(newNote);
      }).catch(error => console.log(error));


    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <InputWrap
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          placeholder='Текст заметки'
          onChange={this.onValueChange}
          value={this.state.text}
        />
        {
          this.state.text === ''
            ? null
            : <button
              className={'add'}
              type={"submit"}
            ><img src={plus} alt="icon"/></button>
        }
      </InputWrap>
    )
  }
}

export default NoteForm;