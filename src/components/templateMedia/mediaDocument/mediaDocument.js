import React from 'react';

import { DocumentWrap } from './mediaDocumentStyled';


const MediaDocument = ({ documentData }) => {
  let format = documentData.file.split('/media/');
  format = format[1].split('.')[1];
  return (

    <DocumentWrap>
      <div className = "video__container">
        <span className = "video__play" />
      </div>

      <div className = "video__wrap video__wrap_1">
        <span className = "video__text">{ documentData.name_video }</span>
        <span className = "video__subtext">{ format }, { documentData.file_size }</span>
      </div>

    </DocumentWrap>

  )

};

export default MediaDocument;