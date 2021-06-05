import React, {Component} from 'react';
import ReactPlayer from "react-player";

import { AudioWrap } from './mediaAudioStyled';

class MediaAudio extends Component {

  constructor(props) {

    super(props);

    this.state = {

      play: false

    }

  }

  PlayMusic = () => {
    if(!this.state.play) {
      this.setState(() => {
        return {
          ...this.state,
          play: true
        }
      })
    } else {
      this.setState(() => {
        return {
          ...this.state,
          play: false
        }
      })
    }
  }

  render() {

    const {audioData} = this.props;

    const { name, format, size } = audioData;

    return (

      <AudioWrap>

        <button
          onClick={this.PlayMusic}
          className = "video__container">

          <span className = "video__play" />

        </button>

        <div className = "video__wrap video__wrap_1">

          <span className = "video__text">{ name }</span>

          <span className = "video__subtext">{ format }, { size }</span>

        </div>

        <ReactPlayer

          className='react-player'
          url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
          width="400px"
          height="50px"
          playing={this.state.play ? true : false}
          controls={true}

        />

      </AudioWrap>

    )
  }
};

export default MediaAudio;