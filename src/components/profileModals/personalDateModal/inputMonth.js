import React, {Component} from 'react';
import {InputWrap} from "../personalDataStyled";


export default class InputMonth extends Component {
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
      document.querySelector('.labelMonth').classList.remove('active');
    } else {
      document.querySelector('.labelMonth').classList.add('active');
    }
  };

  render() {
    return (
      <InputWrap className={'month'}>
        <label className={'labelMonth active'} >Месяц</label>
        <input className={'input'} name={'month'} defaultValue={this.props.month}  type="text"  onChange={(e) => this.changeInput(e)}/>
      </InputWrap>
    )
  }
}
