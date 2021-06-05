import React from "react";

import error from '../../assets/media/icon/error.svg';
import {ErrorWrap} from './errorEmailStyled';

const ErrorEmail = () => {
  return (
    <ErrorWrap><img src={error} alt="icon"/>Ваш Email не подтвержден</ErrorWrap>
  )
}

export default ErrorEmail;