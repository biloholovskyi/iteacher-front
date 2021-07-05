import React from "react";

import VideoBlock from "./videoBlock";
import ListLesson from "./listLesson";

import {LeftSideBarWrap} from './leftSideBarStyled';

const LeftSideBar = ({data, activeSection, classRoom}) => {
  
  return (
    <LeftSideBarWrap>

      <VideoBlock classRoom={classRoom}/>

      <ListLesson data={data} activeSection={activeSection}/>

    </LeftSideBarWrap>
  )
}

export default LeftSideBar;