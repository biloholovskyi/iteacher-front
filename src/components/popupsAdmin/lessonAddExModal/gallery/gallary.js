import React, {Component} from "react";
import Dropzone from 'react-dropzone';

import InputText from "../../../inputs/inputsAdmin/inputText/inputText";
import Button from "../../../buttons/button/button";


//styled
import {TextModalBody, TextModalOverlay, Slider} from './styled';
import closed from "../../../../assets/media/icon/close.svg";
import arrow from '../../../../assets/media/icon/arrow-left.svg';
import add from '../../../../assets/media/icon/add.svg';

export default class AddGallery extends Component {

  constructor(props) {

    super(props);
    this.state = {
      text: '',
      name: ''
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

            <h2 className={'title'}>Галерея</h2>

          </div>

          <InputText
            placeholder={'Условия упражнения'}
            value = { this.state.text }
            set = { ( value ) => this.setState({ text: value }) }
          />

          <InputText
            placeholder={'Вид галереи'}
            value = { this.state.name }
            set = { ( value ) => this.setState({ name: value }) }
          />

          <Slider>

            <h2>Добавьте изображения</h2>

            <div className={'flex'}>

              {/*<label htmlFor="contained-button-file_2">*/}

                <button className={'download'}  component="span">

                  <img src={add} alt="icon"/>

                </button>

              {/*</label>*/}

              {/*<input*/}

              {/*  accept="image/*"*/}
              {/*  className={'hidden-input'}*/}
              {/*  id="contained-button-file_2"*/}
              {/*  multiple*/}
              {/*  name={'slider'}*/}
              {/*  type="file"*/}

              {/*/>*/}

            </div>

          </Slider>

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