import React from "react";

import {Video} from "./leftSideBarStyled";

import avatar from "../../../assets/media/icon/person.svg";
import micro from "../../../assets/media/image/voice.svg";
import cam from "../../../assets/media/image/cam.svg";


const VideoBlock = () => {
  return (
    <Video>

      {/*заглушка для видео*/}
      <img src={avatar} alt="image"/>
      {/*заглушка для видео*/}

      <div className="video-btn">
        <div className="micro"><img src={micro} alt="icon"/></div>
        <div className="cam"><img src={cam} alt="icon"/></div>
      </div>
    </Video>
  )
}

export default VideoBlock;