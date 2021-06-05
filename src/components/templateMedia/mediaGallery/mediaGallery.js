import React from 'react';
import photo_screen from '../../../assets/media/image/respurse.png';
//ЭТО ЗАГОТОВКА

import { ImageWrap } from './mediaGalleryStyled';

const MediaImg = ({ src, name, format, size }) => {

  return (

    <ImageWrap>

      <img
        src={photo_screen}
        className="image__container"
      />

      <img
        src={photo_screen}
        className="image__container"
      />

      <img
        src={photo_screen}
        className="image__container"
      />

      <img
        src={photo_screen}
        className="image__container"
      />
      
      <div className="image__wrap image__wrap_1">

        <span className="image__text">{ name }</span>

        <span className="image__subtext">{ format }, { size }</span>

      </div>

    </ImageWrap>

  )

};

export default MediaImg;