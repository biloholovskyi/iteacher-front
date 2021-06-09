import React, {Component} from "react";
import ChatInput from "./ChatInput";
import ChatList from './ChatList';

import {ChatWrap} from './ChatStyled';

export default class TabChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [
      //   {label : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero orci, auctor non imperdiet' , id: 1},
      // ]
      data: []
    }
    this.addItem = this.addItem.bind(this);
  }

  // add message
  addItem(body) {
    const newItem ={
      label: body
    }
    this.setState(({data})=>{
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

 render() {
   return(
     <ChatWrap>
       <ChatList
         posts={this.state.data}
       />
       <ChatInput
         test={this.props.test}
         onAdd={this.addItem}
       />
     </ChatWrap>
   )
 }
}
