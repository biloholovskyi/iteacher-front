import React from "react";

import MainButton from "../../buttons/mainButton/mainButton";

import {NotificationItemWrap} from './NotificationStyled';

const NotificationItem = ({open, active, waitLesson}) => {
  return(
    <NotificationItemWrap
      onClick={open}
      className={'button'}
    >
      {
        active
        ? <div className="indicator active" />
        : waitLesson
          ? <div className="indicator active" />
          :<div className="indicator " />
      }
      {
        // выводим уведомление в зависимости от типа (обичное, урок начнеться через n часов, войти в урок)
        active
        ? <div className="content">
            <div className="title">Урок начался</div>
            <div className="desc">*Username* ждет вас. Поторопитесь! </div>
          </div>
        : waitLesson
          ? <div className="content">
            <div className="title">Урок начнется через 1 час</div>
            <div className="desc">Курс: Basic English, Урок: #1 Traveling, Ученик: Альбе...</div>
          </div>
          : <div className="content">
            <div className="title">Lorem ipsum dolor sit amet</div>
            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing eli... </div>
          </div>
      }
      {
        active
        ? <MainButton text={'Войти'}/>
          : null
      }
    </NotificationItemWrap>
  )
}

export default NotificationItem;