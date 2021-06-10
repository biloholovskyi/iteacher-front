import React from "react";

//styled & media
import {NotificationSingleWrap, Photo, Title, Desc, NotificationModal, MainBtnWrap} from './NotificationStyled';
import photo from '../../../assets/media/image/respurse.png';
import close from '../../../assets/media/icon/close.svg';

const NotificationSingle = ({ closed }) => {
  return(
    <NotificationSingleWrap
      className={'modal'}
    >
      <NotificationModal>
        <img onClick={closed} className={'close'} src={close} alt="icon"/>
        <Title>Lorem ipsum dolor sit amet</Title>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend aliquam pretium. Phasellus posuere odio sed nulla vehicula, in venenatis nulla auctor. Nunc eu iaculis nunc. Etiam gravida aliquet magna, in consectetur risus laoreet nec. Nunc et mi ex. Phasellus viverra sem non est aliquam, non finibus mi convallis. Sed nec tincidunt tortor, non molestie lorem.</Desc>
        <Photo src={photo} alt="image"/>
        <div className="btnSection">
          <MainBtnWrap>Secondary action 1</MainBtnWrap>
          <MainBtnWrap className={'transparentBtn'}>Secondary action 2</MainBtnWrap>
          <MainBtnWrap className={'actionBtn'}>Primary action</MainBtnWrap>
        </div>
      </NotificationModal>
    </NotificationSingleWrap>
  )
}

export default NotificationSingle;