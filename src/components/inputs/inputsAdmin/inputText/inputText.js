import React, { Component } from 'react';
import { InputWrap } from "./inputTextStyled";

export default class InputText extends Component {

  render() {

    const {

      placeholder, 
      value, 
      set 

    } = this.props;

    return (

      <InputWrap>

        <label className = { value.length > 0 ? 'active' : '' } >{ placeholder }</label>

        <input

          type = "text"
          value = { value }  
          onChange={ ( e ) => set( e.target.value ) }

        />

      </InputWrap>

    );

  }

}