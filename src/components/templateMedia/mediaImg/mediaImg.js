import React from 'react';
import photo_screen from '../../../assets/media/image/respurse.png';
//ЭТО ЗАГОТОВКА

import { ImageWrap } from './mediaImgStyled';

const MediaImg = ({imageData}) => {
  return (
    <ImageWrap>
      <img
        src={imageData.file}
        className="image__container"
        alt={'image'}
      />

      <div className="image__wrap image__wrap_1">
        <span className="image__text">{ imageData.name }</span>
        {/*нужно распарсить формат*/}
        {/*<span className="image__subtext">{ format }, { size }</span>*/}
      </div>

    </ImageWrap>
    
  )

};

export default MediaImg;