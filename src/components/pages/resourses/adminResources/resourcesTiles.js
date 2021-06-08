import React from "react";
import {MainBtnWrap} from "../../layout/MainBtnWithIcon/styled";
import CardResource from './TileItem';

//styled
import {Caption, ResourcesWrap, TilesList} from './Styled';
//icon & images
import plus from "../../../assets/media/icon/plus.svg";

const ResourcesTiles = ({student}) => {
  return(
    <ResourcesWrap>
      <div className="container">
        <Caption>
          <h2>Полезное</h2>
          {
            student
              ? null
              :  <MainBtnWrap>
                <img src={plus} alt="icon"/>
                Добавить статью
              </MainBtnWrap>
          }
        </Caption>
        <TilesList>
          <CardResource/>
          <CardResource/>
          <CardResource/>
          <CardResource/>
        </TilesList>
      </div>
    </ResourcesWrap>
  )
}

export default ResourcesTiles;