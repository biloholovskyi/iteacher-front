import React, {Component} from "react";
import InnerMainBlock from './InnerMainBlock';
import {HomeWorkListItem} from './homeWorkListItem';

//styled
import {LessonHeader, LessonBody, LessonWrap } from './styled';

export default class HomeWorkItemInner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doneLesson: true
    }
  }

  render() {
    const {doneLesson} = this.state;
    return(
      <LessonWrap>
        <LessonHeader>
          <div className="titleBlock">
            <div className="title">#1  Lorem ipsum dolor sit amet</div>
            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis porta urna, eget</div>
          </div>
          <button
            className={'finish'}
          >Закончить занятие</button>
        </LessonHeader>
        <div className="container">
          <LessonBody>
            <div className={'left'}>
              <div className="listLesson">
                <HomeWorkListItem done={doneLesson}/>
                <HomeWorkListItem/>
                <HomeWorkListItem/>
                <HomeWorkListItem/>
              </div>
            </div>
            <InnerMainBlock/>
          </LessonBody>
        </div>
      </LessonWrap>
    )
  }
}