import React from "react";

//styled
import {ResourcesItemWrap, Image, Title, User, Data, Photo, Name, Icon, More} from './Styled';

//icon & images
import resources from '../../../assets/media/image/respurse.png';
import ava from '../../../assets/media/icon/avatar2.svg';
import date from '../../../assets/media/icon/calendar.svg';
import time from '../../../assets/media/icon/clock.svg';
import more from '../../../assets/media/icon/more.svg';

const ResourcesItem = () => {
  return(
    <ResourcesItemWrap>
      <div className="titleBlock">
        <Image src={resources} alt="icon"/>
        <div className="smallTitle">
          <Title className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras el...</Title>
          <User className="user">Ученик</User>
        </div>
      </div>
      <div className="nameBlock">
        <Photo src={ava} alt="icon"/>
        <Name>Cameron Jackson</Name>
      </div>
      <div className="dateBlock">
        <Icon src={date} alt="icon"/>
        <Data className="data">26 января, 1999</Data>
      </div>
      <div className="timeBlock">
        <Icon src={time} alt="icon"/>
        <Data className="time">18:32</Data>
      </div>
      <More><img src={more} alt="icon"/></More>
    </ResourcesItemWrap>
  )
}

export default ResourcesItem;