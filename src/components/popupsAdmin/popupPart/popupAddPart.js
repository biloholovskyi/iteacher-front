import React, { Component } from 'react';

import Popup from '../popupContainer/popupContainer';
import Button from '../../../button/button';
import InputText from '../../../inputText/inputText';

import { PopupTitle } from '../popupContainer/popupStyled';

export default class PopupAddPart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <Popup onClose = { this.props.close }>
        <PopupTitle>Создать раздел</PopupTitle>
        <InputText
          placeholder = "Название раздела"
          value = { this.state.name }
          set = { ( value ) => this.setState({ name: value }) }
        />
        
        <Button
          type = "add-popup"
          text = "Создать раздел"
          func = { () => {
            this.props.func(this.state.name);
            this.props.close();
          }}
        />
      </Popup>
    );
  }
}