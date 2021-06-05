import React from "react";

import { Button } from "./styled";

const MainButton = ({text, func = () => null, width, type = 'button', classList}) => {
  return (
    <Button
      onClick={() => func()}
      width={width}
      type={type}
      className={classList}
    >
      {text}
    </Button>
  )
}

export default MainButton;