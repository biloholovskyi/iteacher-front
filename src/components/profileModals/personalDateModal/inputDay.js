import React, {Component} from 'react';
import {InputWrap} from "../personalDataStyled";


export default class InputDay extends Component {
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
      document.querySelector('.labelDay').classList.remove('active');
    } else {
      document.querySelector('.labelDay').classList.add('active');
    }
  };

  render() {
    return (
      <InputWrap className={'day'}>
        <label className={'labelDay active'} >Число</label>
        <input className={'input'} name={'day'} defaultValue={this.props.day}  type="text"  onChange={(e) => this.changeInput(e)}/>
      </InputWrap>
    )
  }
}
