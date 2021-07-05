import React from 'react';

import Button from "../buttons/button/button";

import {CleanWrapp} from './cleanBoardStyled';

import empty from '../../assets/media/image/lesson_empty.svg';

const CleanBoard = ({subtitle, descr, textButton, func, open}) => (

  <CleanWrapp>

    <div className="flex-wrap">
      <img src={empty} className="lesson" alt={'image'}/>
    </div>

    <span className="clear_title">
      {subtitle}
    </span>

    <span className="subtitle">
      {descr}
    </span>

    <Button
      onClick={open}
      type="add-round"
      text={textButton}
      func={func}
    />

  </CleanWrapp>

);

export default CleanBoard;
