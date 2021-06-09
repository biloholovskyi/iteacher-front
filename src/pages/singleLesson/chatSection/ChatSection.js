import React, {Component} from "react";
import ChatInput from './ChatInput';
import TabChat from './TabChat';
import TabNote from '../NoteSection/TabNote';
//styled
import {LessonSidebarWrap, TabBody, TabHead, TabHeadNav} from '../singleLessonStyled';

export class ChatSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabStatus: 'chat'
    }
  }

  // change active tab
  changeTab = (e, tab) => {
    this.setState({tabStatus: tab});
    document.querySelector('.tabs-active').classList.remove('tabs-active');
    e.target.classList.add('tabs-active');
  };

  render() {
    return (
      <LessonSidebarWrap>
        <TabHead>
          <TabHeadNav className='tabs-active' onClick={(e) => this.changeTab(e, 'chat')}>Чат</TabHeadNav>
          <TabHeadNav onClick={(e) => this.changeTab(e, 'link')}>Заметки</TabHeadNav>
        </TabHead>
        <TabBody>
          {
            this.state.tabStatus === 'chat'
              ?   <TabChat/>
              :   <TabNote/>
          }
        </TabBody>
      </LessonSidebarWrap>
    )
  }
}