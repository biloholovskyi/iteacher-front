import React from "react";

import {LogOutBody, LogOutModalWrap} from './logOutStyled';
import closed from '../../assets/media/icon/close.svg';

const LogOutWrap = ({exit, close}) =>{
  return(
    <LogOutModalWrap>
      <LogOutBody>
        <img src={closed} alt="image" className={'close'} onClick={close}/>
        <h2>Вы действительно<br/>
          хотите выйти из системы?</h2>
        <div className="buttonSection">
          {/*<button*/}
          {/*  onClick={close}*/}
          {/*  className={'no'}>Нет</button>*/}
          <button
            onClick={(e) => exit(e)}
            className={'yes'}>Да, выйти</button>
        </div>
      </LogOutBody>
    </LogOutModalWrap>
  )
}

export default LogOutWrap;