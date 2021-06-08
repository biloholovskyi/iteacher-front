import React, {Component} from "react";
import Dropzone from 'react-dropzone';

import InputText from "../../../inputs/inputsAdmin/inputText/inputText";
import Button from "../../../buttons/button/button";


import {TextModalBody, TextModalOverlay, AudioWrap} from './styled';
import {ImageZone} from "../image/styled";

import closed from "../../../../assets/media/icon/close.svg";
import arrow from '../../../../assets/media/icon/arrow-left.svg';
import dlt from '../../../../assets/media/icon/trash_basket.svg'

export default class AddAudioModal extends Component {

  constructor(props) {

    super(props);
    this.state = {
      text: '',
      name: '',
      file: '',
      audioPreview: '',
      deleteAudio: false
    }

  }

  DeleteAudioItem = () => {
    this.setState(() => {
      return {
        ...this.state,
        deleteAudio: true
      }
    });
    setTimeout(() => {
      this.setState(() => {
        return {
          ...this.state,
          deleteAudio: false,
          file: '',
          audioPreview: '',
        }
      })
    }, 500)
  }

  // add audio file

  _handleAudioChange(e) {

    e.preventDefault();

    let reader = new FileReader();

    let file = e.target.files[0];

    reader.onloadend = () => {

      this.setState({

        file: file,

        audioPreview: reader.result

      });

    }

    reader.readAsDataURL(file)

  }

  render() {

    function uploadImage(file) {

      console.log(`Загружено изображение ${file.name}:`, file);
      // TODO UPLOAD TO SERVER, get URL, and:
      this.props.close();

    }

    const {back, close} = this.props;

    const { audioPreview, file, deleteAudio } = this.state;



    // code for download audio file

    let $audioPreview = null;

    if (audioPreview) {

      $audioPreview = (

        <ImageZone>

          {/*<audio ref="audio_tag" src={audioPreview} controls />*/}

          <AudioWrap>

            <div className = "video__container">

              <span className = "video__play" />

            </div>

            <div className = "video__wrap video__wrap_1">

              <span className = "video__text">{ file.name.split(".mp3")[0] }</span>

              <span className = "video__subtext">{ file.type }, { Math.round(file.size / 1024 / 1024) + " mb" }</span>

            </div>

            <button

              onClick={this.DeleteAudioItem}
              className={'delete_btn'}

            ><img src={dlt} alt="icon"/></button>

          </AudioWrap>

          {/*<input*/}

          {/*  accept=".mp3,audio/*"*/}
          {/*  className={'hidden-input'}*/}
          {/*  id="contained-button-file"*/}
          {/*  name={'banner'}*/}
          {/*  onChange={(e) => this._handleAudioChange(e)}*/}
          {/*  type={'file'}*/}

          {/*/>*/}

        </ImageZone>

      );

    } else {

      $audioPreview = (

        <Dropzone onDrop={acceptedFile => uploadImage(acceptedFile)}>

          {({ getRootProps, getInputProps, isDragActive }) => (

            <div {...getRootProps()} className = {`cover__row cover__row_3`}>

              { isDragActive

                ? <span className = "cover__title">Загрузить!</span>

                : <>

                  <span className = "cover__title">Перетащите файл сюда</span>

                  <span className = "cover__subtitle">или</span>

                  <Button
                    text = "Выбрать файл на устройстве"
                    type = "cover"
                  />

                </> }

              <input

                {...getInputProps()}
                accept=".mp3,audio/*"
                className={'hidden-input'}
                id="contained-button-file"
                name={'banner'}
                onChange={(e) => this._handleAudioChange(e)}

              />

            </div>

          )}

        </Dropzone>

      );

    }

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

            <h2 className={'title'}>Аудиофайл</h2>

          </div>

          <InputText
            placeholder={'Условия упражнения'}
            value = { this.state.text }
            set = { ( value ) => this.setState({ text: value }) }
          />

          <InputText
            placeholder={'Название аудио'}
            value = { this.state.name }
            set = { ( value ) => this.setState({ name: value }) }
          />

          {
            deleteAudio

              ? <Dropzone onDrop={acceptedFile => uploadImage(acceptedFile)}>

                {({ getRootProps, getInputProps, isDragActive }) => (

                  <div {...getRootProps()} className = {`cover__row cover__row_3`}>

                    { isDragActive

                      ? <span className = "cover__title">Загрузить!</span>

                      : <>

                        <span className = "cover__title">Перетащите файл сюда</span>

                        <span className = "cover__subtitle">или</span>

                        <Button
                          text = "Выбрать файл на устройстве"
                          type = "cover"
                        />

                      </> }

                    <input

                      {...getInputProps()}
                      accept=".mp3,audio/*"
                      className={'hidden-input'}
                      id="contained-button-file"
                      name={'banner'}
                      onChange={(e) => this._handleAudioChange(e)}

                    />

                  </div>

                )}

              </Dropzone>

              : $audioPreview

          }

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