import React, {Component} from "react";

import Indicator from "./indicator/indicator";

import {PlanListItemWrap} from "./style";

class PlansListItem extends Component{
  render(){
    const {lesson, number, open} = this.props;
    return(
      <PlanListItemWrap
        onClick={() => open(lesson)}>

        <Indicator />

        <div className="nameBlock">
          <div className='top'>
            <div className="number">#{number + 1}</div>
            <div className="name">{lesson.name}</div>
          </div>
          <button type={'button'} className='bottom'>Назначить урок</button>
        </div>
      </PlanListItemWrap>
    )
  }
}

export default PlansListItem;