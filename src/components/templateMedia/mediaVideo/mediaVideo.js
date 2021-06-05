import React from 'react';
import ReactPlayer from "react-player";

import { VideoWrap } from './mediaVideoStyled';

const MediaVideo = ({ data }) => {

  return (
    <VideoWrap>
      <div className = "video__container">
        {/*<div className="video__play--section">*/}
        {/*  <span className = "video__play" />*/}
        {/*</div>*/}
        <ReactPlayer
          className='react-player'
          // url="https://www.youtube.com/embed/MKk1u5RMTn4"
          url={data.link}
          //controls={true}
        />
      </div>
    </VideoWrap>
  )
};

export default MediaVideo;