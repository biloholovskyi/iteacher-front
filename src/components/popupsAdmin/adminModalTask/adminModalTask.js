import React from "react";

import * as Style from './style';

import arrow from "../../../assets/media/icon/arrow-left.svg";
import closed from "../../../assets/media/icon/close.svg";

const AdminModalTask = ({children, type, back, title, close}) => {
  return (
    <Style.Wrapper>
      <Style.Body>
        <img onClick={close} className={'closed'} src={closed} alt="icon"/>
        <div className="caption">
          {
            type === 'add' && (
              <button
                onClick={back}
                className={'arrow_back'}>
                <img src={arrow} alt="icon"/>
              </button>
            )
          }
          <h2 className={'title'}>{title}</h2>
        </div>
        {children}
      </Style.Body>
    </Style.Wrapper>
  )
}

export default AdminModalTask;