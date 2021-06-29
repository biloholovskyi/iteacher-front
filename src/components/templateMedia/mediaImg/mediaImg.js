import React from 'react';
import {connect} from "react-redux";

import { ImageWrap } from './mediaImgStyled';

import ServerSettings from "../../../service/serverSettings";
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";
const server = new ServerSettings();

const MediaImg = ({imageData, user}) => {

  return (
    <ImageWrap>
      <img
        src={user.type === 'admin' ? imageData.file : `${server.getApi()}${imageData.file.slice(1)}`}
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MediaImg);