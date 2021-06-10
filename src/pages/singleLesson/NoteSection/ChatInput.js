import React, {Component} from "react";
import {InputWrap} from "../singleLessonStyled";

// media
import plus from '../../../assets/media/icon/plusW.svg';

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
  onValueChange(e){
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