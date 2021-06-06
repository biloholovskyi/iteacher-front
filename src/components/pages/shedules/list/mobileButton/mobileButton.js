import React from "react";

import * as Style from './style'

const MobileButton = () => {
  return (
    <Style.ButtonWrapper>
      <td className="mobile-content" colSpan={4}>
        <button className="mobile-content__text">
          <p>Урок начался</p>
          <p>Нажмите чтобы войти</p>
          <span className="icon"/>
        </button>
      </td>
    </Style.ButtonWrapper>
  )
}

export default MobileButton;
