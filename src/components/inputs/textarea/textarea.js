import React, { Component } from 'react';
import { TextareaWrap } from "./styled";

export default class Textarea extends Component {

  render() {

    const {

      placeholder,
      value,
      set

    } = this.props;

    return (

      <TextareaWrap>

        <label className = { value.length > 0 ? 'active' : '' } >{ placeholder }</label>

        <textarea

          type="textarea"
          value = { value }
          onChange={ ( e ) => set( e.target.value ) }

        />

      </TextareaWrap>

    );

  }

}