import React from "react";

import VideoBlock from "./videoBlock";
import ListLesson from "./listLesson";

import {LeftSideBarWrap} from './leftSideBarStyled';

const LeftSideBar = ({data, activeSection}) => {
  return (
    <LeftSideBarWrap>

      <VideoBlock/>

      <ListLesson data={data} activeSection={activeSection}/>

    </LeftSideBarWrap>
  )
}

export default LeftSideBar;