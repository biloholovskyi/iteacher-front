import React from "react";
import {connect} from "react-redux";

import Indicator from "./indicator/indicator";

import {PlanListItemWrap} from "./style";

const PlansListItem = ({lesson, number, open, time, user}) => {
  return(
    <PlanListItemWrap
      onClick={() => open(lesson)}>

      <Indicator />

      <div className="nameBlock">
        <div className='top'>
          <div className="number">#{number + 1}</div>
          <div className="name">{lesson.name}</div>
        </div>

        {
          user.type === 'teacher'
            ? <button type={'button'} className='bottom'>Назначить урок</button>
            : <div className={'time'}>{time}</div>
        }
      </div>
    </PlanListItemWrap>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PlansListItem);