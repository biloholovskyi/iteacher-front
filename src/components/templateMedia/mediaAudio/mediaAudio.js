import React, {Component} from 'react';
import ReactPlayer from "react-player";
import {connect} from "react-redux";

import {AudioWrap} from './mediaAudioStyled';

class MediaAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    }
  }

  PlayMusic = () => {
    if (!this.state.play) {
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

    return (
      <AudioWrap>
        <button
          onClick={this.PlayMusic}
          className="video__container"
        >
          <span className="video__play"/>
        </button>
        <div className="video__wrap video__wrap_1">
          <span className="video__text">{audioData.name_video}</span>
          <span
            className="video__subtext">{audioData.file.split('.')[audioData.file.split('.').length - 1]}, {audioData.file_size}</span>
        </div>

        <ReactPlayer
          className='react-player'
          url={this.props.user.type === 'admin' ? audioData.file : audioData.file}
          width="400px"
          height="50px"
          playing={this.state.play}
          controls={true}
        />
      </AudioWrap>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MediaAudio);