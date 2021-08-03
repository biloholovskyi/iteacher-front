import React, {Component} from "react";
import {connect} from "react-redux";

import ChatInput from "./ChatInput";
import ChatList from './ChatList';

import {ChatWrap} from './ChatStyled';

class TabChat extends Component {
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

  componentDidMount() {
    if(this.props.data) {
      this.setState({data: this.props.data});
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.data && JSON.stringify(this.props.data) !== JSON.stringify(this.state.data)) {
      this.setState({data: this.props.data});
    }
  }

  // add message
  addItem(body) {
    const newItem ={
      label: body,
      name: this.props.user.username,
      ava: this.props.user.photo
    }

    this.setState(({data})=> {
      const newArr = [...data, newItem];

      this.props.socket.send(JSON.stringify({
        'message': {
          type: 'chat_message',
          data: newArr,
          user: {
            type: this.props.user.type,
            id: this.props.user.id
          }
        }
      }));

      this.props.send(newArr)

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
         onAdd={this.addItem}
       />
     </ChatWrap>
   )
 }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TabChat);