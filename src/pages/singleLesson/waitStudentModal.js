import React, {useState, useEffect} from "react";
import axios from "axios";

import {WaitStudentOverlay, WaitStudentWrap} from './singleLessonStyled';

import avatar from '../../assets/media/icon/avatar.svg'

import ServerSettings from "../../service/serverSettings";

const WaitStudentModal = ({teacher}) => {
  const [photo, setPhoto] = useState('');

  const getPhoto = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();
    await axios.get(`${server.getApi()}api/users/${teacher}/`)
      .then(res => {
        setPhoto(`${server.getApi()}${res.data.photo.slice(1)}`);
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
          <img src={photo || avatar} alt="image" className={'photo'}/>
        </div>
        <div className="title">Ожидаем преподавателя</div>
        {/*<div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus lectus, iaculis eu ornare eu, efficitur et sem.</div>*/}
      </WaitStudentWrap>
    </WaitStudentOverlay>
  )
}

export default WaitStudentModal;