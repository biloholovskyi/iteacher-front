import React from "react";
import ChatItem from "./ChatItem";

import {ChatBody} from "./ChatStyled";

const ChatList = ({posts}) => {

  const elements = posts.map((item) =>{
    const {id, ...itemProps} = item;
    return (
      <ChatItem
        key={id}
        {...itemProps}
      />
    )
  });

  return (
    <ChatBody>
      {elements}
    </ChatBody>
  )
}

export default ChatList;