import React from "react";

//styled
import {ListLessonDoneWrap} from './styled';
//images
import ok from '../../assets/media/icon/ok.svg';

const HomeWorkListItem = ({done}) => {
  return (
    <ListLessonDoneWrap
      done={done}
    >
      {
        done
          ? <div className="indicatorDone"><img src={ok} alt="icon"/></div>
          : <div className="indicator"></div>
      }
      <div className="text">Lorem ipsum dolor sit amet</div>
    </ListLessonDoneWrap>
  )
}

export {HomeWorkListItem};