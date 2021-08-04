import React, {useState, useEffect} from "react";

import {WaitStudentOverlay, WaitStudentWrap} from './singleLessonStyled';
import avatar from '../../assets/media/icon/avatar.svg'

import axiosInstance from "../../service/iTeacherApi";

const WaitStudentModal = ({teacher}) => {
  const [photo, setPhoto] = useState('');

  const getPhoto = async () => {
    await axiosInstance.get(`/users/${teacher}/`)
      .then(res => {
        setPhoto(res.data.photo);
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
   getPhoto().catch(error => console.error(error))
  }, [teacher]);


  return (
    <WaitStudentOverlay>
      <WaitStudentWrap>
        <div className="photoBlock">
          <img src={photo || avatar} alt="" className={'photo'}/>
        </div>
        <div className="title">Ожидаем преподавателя</div>
        {/*<div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus lectus, iaculis eu ornare eu, efficitur et sem.</div>*/}
      </WaitStudentWrap>
    </WaitStudentOverlay>
  )
}

export default WaitStudentModal;