import React from 'react';

import CourseCover from "../../../components/courseCover/courseCover";

import {CaptionBlockWrap} from './styled';

import settings from '../../../assets/media/icon/settings.svg';

const CaptionBlock = ({course}) => {
  return(
    <CaptionBlockWrap>
      <div className="left">

        <CourseCover course={course} medium={true}/>

        <div className="nameBlock">
          <div className={'name'}>{course.name}</div>
          {/*<div className={'desc'}>{course.small_desc}</div>*/}
        </div>

      </div>
      {/*<button className={'settings'}>*/}
      {/*  <img src={settings} alt="icon"/>*/}
      {/*</button>*/}
    </CaptionBlockWrap>
  )
}

export default CaptionBlock;