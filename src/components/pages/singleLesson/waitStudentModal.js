import React from "react";

import {WaitStudentOverlay, WaitStudentWrap} from './singleLessonStyled';

import avatar from '../../../assets/media/icon/avatar.png'

const WaitStudentModal = () => {
  return (
    <WaitStudentOverlay>
      <WaitStudentWrap>
        <div className="photoBlock">
          <img src={avatar} alt="image" className={'photo'}/>
        </div>
        <div className="title">Ожидаем преподавателя</div>
        {/*<div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus lectus, iaculis eu ornare eu, efficitur et sem.</div>*/}
      </WaitStudentWrap>
    </WaitStudentOverlay>
  )
}

export default WaitStudentModal;