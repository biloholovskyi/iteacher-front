import React from "react";
import ChatItem from "./ChatItem";

import {ChatBody} from "./ChatStyled";

const ChatList = ({posts}) => {

  const elements = posts.map((item) =>{
    return (
      <ChatItem
        key={item.id}
        post={item}
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