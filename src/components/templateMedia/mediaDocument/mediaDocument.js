import React from 'react';
import {connect} from "react-redux";

import {DocumentWrap} from './mediaDocumentStyled';

import ServerSettings from "../../../service/serverSettings";
const api = new ServerSettings()

const MediaDocument = ({documentData, user}) => {
  let format = documentData.file.split('/media/');
  format = format[1].split('.')[1];
  return (

    <DocumentWrap>
      <div className="video__container">
        <span className="video__play"/>
      </div>

      <a download={user.type === 'admin' ? documentData.file : api.getApi() + documentData.file.slice(1)} href={user.type === 'admin' ? documentData.file : api.getApi() + documentData.file.slice(1)} target={'_blank'}
         className="video__wrap video__wrap_1">
        <span className="video__text">{documentData.name_video}</span>
        <span className="video__subtext">{format}, {documentData.file_size}</span>
      </a>

    </DocumentWrap>

  )

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MediaDocument);