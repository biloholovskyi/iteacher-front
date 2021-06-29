import React, {Component} from 'react'
import {Recorder} from 'react-voice-recorder'

import Sound from "./sound/sound";

import './index.css'

import * as Style from './styled'
import {TimeLine} from "./styled";

class MediaRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      }
    }
  }

  handleAudioStop(data) {
    this.setState({audioDetails: data});
  }

  handleAudioUpload(file) {
    console.log(file);
  }

  handleReset() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
    };
    this.setState({audioDetails: reset});
  }

  startRecord() {
    const buttonStart = document.querySelector('._1dpop');
    buttonStart.click();
    this.setState({status: true})
  }

  stopRecord() {
    const btn = document.querySelector('._1bSom');
    btn.click();
  }


  render() {
    return (
      <div>
        <Recorder
          record={true}
          audioURL={this.state.audioDetails.url}
          showUIAudio
          handleAudioStop={data => this.handleAudioStop(data)}
          handleAudioUpload={data => this.handleAudioUpload(data)}
          handleReset={() => this.handleReset()}
          mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
        />

        {
          this.state.status
            ? this.state.audioDetails.url
            ? <Sound data={this.state.audioDetails}/>
            : (
              <Style.LineWrapper>
                <TimeLine/>
                <Style.StopRecord onClick={() => this.stopRecord()}>
                  <div className="img"/>
                  <div className="text">Остановить запись</div>
                </Style.StopRecord>
              </Style.LineWrapper>
            )
            : <Style.StartRecord onClick={() => this.startRecord()}>Начать запись</Style.StartRecord>
        }
      </div>
    )
  }
}

export default MediaRecord;