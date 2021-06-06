import React from "react";
import {NavLink} from "react-router-dom";

//styled & icons
import play from '../../../assets/media/icon/playColor.svg';
import playWhite from '../../../assets/media/icon/playWhite.svg';
import attention from '../../../assets/media/icon/attantion.svg';
import {HomeWorkItemWrap, Desc, Name, StartButton, LeftTimes} from './styled';

const HomeWorkItem = ({inProgress, Start, ends, LeftTime}) => {
  return (
    <HomeWorkItemWrap>
      <div className="left">
        <Name className="number">#3 Lesson name</Name>
        <Desc className="desc">Надо выполнить до 12 октября, 09:00 - 10:00</Desc>
      </div>
      {
        inProgress === true
          ? <div className="right">
            <p className={'inProcess'}>В процессе</p>
            <StartButton
              bg={inProgress ? 1 : 0}
              to={'/HomeWorkItemInner'}
            >
              <img src={playWhite} alt="icon"/>
              Продолжить</StartButton>
          </div>
          : null
      }
      {
        Start === true
          ? <div className="right">
            <StartButton
              to={'/HomeWorkItemInner'}
            ><img src={play} alt="icon"/>Начать выполнение</StartButton>
          </div>
          : null
      }
      {
        ends
          ? <div className="right">
            <div className={'attentionBlock'}>
              <img src={attention} alt="icon"/>
              <LeftTimes>Осталось 02:32:45</LeftTimes>
            </div>
            <StartButton
              bg={ends ? 1 : 0}
              to={'/HomeWorkItemInner'}
            >
              <img src={playWhite} alt="icon"/>
              Начать выполнение</StartButton>
          </div>
          : null
      }
    </HomeWorkItemWrap>
  )
}
export default HomeWorkItem;