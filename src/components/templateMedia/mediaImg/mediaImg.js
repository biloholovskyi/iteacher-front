import React from 'react';

import { ImageWrap } from './mediaImgStyled';

import ServerSettings from "../../../service/serverSettings";
const server = new ServerSettings();

const MediaImg = ({imageData}) => {
  console.log(imageData.file)
  return (
    <ImageWrap>
      <img
        src={`${server.getApi()}${imageData.file.slice(1)}`}
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