import React, {Component} from "react";

import InputText from "../../../inputs/inputsAdmin/inputText/inputText";
import Button from "../../../buttons/button/button";
import Textarea from "../../../inputs/textarea/textarea";

import {TextModalBody, TextModalOverlay} from './styled';
import closed from "../../../../assets/media/icon/close.svg";
import arrow from '../../../../assets/media/icon/arrow-left.svg';

export default class DragWords extends Component {
  constructor(props) {

    super(props);
    this.state = {
      text: '',
      textArea: ''
    }

  }

  render() {

    const {back, close} = this.props;

    return (

      <TextModalOverlay>

        <TextModalBody>

          <img onClick={close} className={'closed'} src={closed} alt="icon"/>

          <div className="caption">

            <button
              onClick={back}
              className={'arrow_back'}>

              <img src={arrow} alt="icon"/>

            </button>

            <h2 className={'title'}>Перенести слова</h2>

          </div>

          <InputText

            placeholder={'Условия упражнения'}
            value = { this.state.text }
            set = { ( value ) => this.setState({ text: value }) }

          />

          <div className="descSection">

            <h3>Текст задания</h3>

            <p>Напишите текст. Слова и фразы, которые нужно вставить из рамочки, заключите в квадратные скобки.</p>

          </div>

          <Textarea
            placeholder={'Пример: I like [walking] in the park in the morning.'}
            value = { this.state.textArea }
            set = { ( value ) => this.setState({ textArea: value }) }
          />

          <Button

            type = ""
            text = "Добавить"
            func = { () => {}}

          />

        </TextModalBody>

      </TextModalOverlay>

    )
  }

}