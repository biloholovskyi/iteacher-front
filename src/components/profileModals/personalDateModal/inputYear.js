import React, {Component} from 'react';
import {InputWrap} from "../personalDataStyled";


export default class InputYear extends Component {
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
      document.querySelector('.labelYear').classList.remove('active');
    } else {
      document.querySelector('.labelYear').classList.add('active');
    }
  };

  render() {
    return (
      <InputWrap>
        <label className={'labelYear active'} >Год</label>
        <input className={'input'} name={'year'} defaultValue={this.props.year}  type="text"  onChange={(e) => this.changeInput(e)}/>
      </InputWrap>
    )
  }
}
