import React from "react";

import CardResource from "./cardResource/cardResource";

import * as Style from './styled'

import plus from "../../../assets/media/icon/plus.svg";

const Resources = ({student}) => {
  return(
    <Style.ResourcesWrap>
      <div className="container">
        <Style.Caption>
          <h2>Полезное</h2>
          {
            student
              ? null
              :  <Style.MainBtnWrap>
                <img src={plus} alt="icon"/>
                Добавить статью
              </Style.MainBtnWrap>
          }
        </Style.Caption>
        <Style.TilesList>
          <CardResource/>
          <CardResource/>
          <CardResource/>
          <CardResource/>
        </Style.TilesList>
      </div>
    </Style.ResourcesWrap>
  )
}

export default Resources;