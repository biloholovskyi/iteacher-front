import React, {Component} from "react";

import {InputWrap} from "../singleLessonStyled";

import plus from '../../../../assets/media/icon/plusW.svg';

export default class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // status input
  onValueChange(e) {
    this.props.test()
    this.setState({
      text: e.target.value
    })
  }

  // checked form send
  onSubmit(e){
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    });
  }

  render(){
    return(
      <InputWrap
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          placeholder='Текст сообщения'
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