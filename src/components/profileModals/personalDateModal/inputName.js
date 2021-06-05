import React, {Component} from 'react';
import {InputWrap} from "../personalDataStyled";


export default class InputName extends Component {
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
      document.querySelector('.label').classList.remove('active');
    } else {
      document.querySelector('.label').classList.add('active');
    }
  };

  render() {
    return (
      <InputWrap className={'name'}>
        <label className={'label active'} >Имя пользователя</label>
        <input className={'input'} name={'login'}  type="text" defaultValue={this.props.user.name}  onChange={(e) => this.changeInput(e)}/>
      </InputWrap>
    )
  }
}
