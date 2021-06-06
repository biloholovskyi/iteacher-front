import React from "react";

import {ListLessonDoneWrap} from './leftSideBarStyled';

import ok from '../../../../assets/media/icon/ok.svg';

const ListLessonDone = ({data}) => {
  const done = null;
  const inProgress = data.active;

  return (
    <ListLessonDoneWrap
      // это для стилей
      done={done}
      inProgress={inProgress}
    >
      {
        done
          ? <div className="indicatorDone"><img src={ok} alt="icon"/></div>
          : inProgress
            ? <div className="indicatorInProgress">
                <svg id="svg" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="#DDE1E6"/>
                  <path fill="none" strokeLinecap="round" strokeWidth="8" stroke="#4F7FFF" strokeDasharray="80,250" d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"/>
                </svg>
                <div className="mask" />
              </div>
            : <div className="indicator"/>
      }
      <div className="text">{data.name}</div>
    </ListLessonDoneWrap>
  )
}

export default ListLessonDone;