import React, {Component} from 'react';
import {InputWrap} from "../personalDataStyled";


export default class InputEmail extends Component {
  constructor(props) {
    super(props);
    this.state={
      inputActive: false
    }
  }

  //add  active input
  changeInput = (e) => {
    const value = e.target.value;
    this.setState({inputActive: true});
    if(value === '' ) {
      document.querySelector('.labelEmail').classList.remove('active');
    } else {
      document.querySelector('.labelEmail').classList.add('active');
    }
  };

  render() {
    return (
      <InputWrap>
        <label className={'labelEmail active'} >Email</label>
        <input className={'input'} name={'email'} defaultValue={this.props.user.email}  type="text"  onChange={(e) => this.changeInput(e)}/>
      </InputWrap>
    )
  }
}
