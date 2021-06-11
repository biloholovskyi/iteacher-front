import React from 'react';

// image/icon
import info from '../../../assets/media/icon/info.svg';
//styled
import {ProgramItemWrap} from '../singleCourses/singleStyled';

const ProgramItem = ({ lastElement, open, lesson, number }) => {
  return (
    <ProgramItemWrap
      onClick={() => open(lesson)}
      className={'itemBody'}
      last={lastElement} >
      <div className="text">{`#${number + 1} ${lesson.name}`}</div>
      <img src={info} alt="icon"/>
    </ProgramItemWrap>
  )
}

export default ProgramItem;
