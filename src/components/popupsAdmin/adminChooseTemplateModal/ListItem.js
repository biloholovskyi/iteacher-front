import React from "react";

//styled
import {ListItemWrap} from './styled';

const ListItem = ({ text, action, photo }) => {
  return (
    <ListItemWrap
      onClick={action}
      className={'listItem'}
      bg={photo}
    >
        <div className="bGround" />
        <div className="title">{text}</div>
    </ListItemWrap>
  )
}

export default ListItem;