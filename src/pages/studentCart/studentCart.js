import React from "react";

import UserAvatar from "./userAvatar/userAvatar";
import InfoBlock from "../../components/infoBlock/infoBlock";

import * as Style from './styled'

import pan from './media/pan.svg'

const StudentCart = () => {
  return (
    <Style.Wrapper className={'container'}>
      <div className="left">
        <UserAvatar/>

        <InfoBlock
          data={{
            title: 'Информация',
            type: 'table',
            margin: 24,
            icon: pan,
            table_content: [
              {
                name: 'Город',
                value: 'Простоквашино'
              },
              {
                name: 'Телефон',
                value: '+38(066)474-22-81'
              },
              {
                name: 'Почта',
                value: 'stasmihaylov228@gmail.com'
              }
            ],
            button: {
              text: 'Показать больше информации',
              func: () => alert('some text')
            }
          }}
        />

        <InfoBlock
          data={{
            title: 'Следующее занятие',
            type: 'double-text',
            margin: 24,
            double_text: {
              top: '#2 Finance',
              bot: '12 октября, 09:00 - 10:00'
            }
          }}
        />

        <InfoBlock
          data={{
            title: 'Домашние задания',
            type: 'single-text',
            single_text: 'Нет заданий на проверке'
          }}
        />
      </div>
      <div className="right">

      </div>
    </Style.Wrapper>
  )
}

export default StudentCart