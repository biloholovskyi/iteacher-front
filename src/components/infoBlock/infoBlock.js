import React from "react";

import Table from "./table/table";
import InfoButton from "./infoButton/infoButton";

import * as Style from './styled'

const InfoBlock = ({data}) => {
  return (
    <Style.Wrapper margin={data.margin || 0}>
      <Style.Title>
        {data.title}
        {
          data.icon && <Style.Icon bg={data.icon} onClick={data.iconFunc || console.log('...')}/>
        }
      </Style.Title>
      {
        data.type === 'single-text' && (
          <Style.SingleText>{data.single_text}</Style.SingleText>
        )
      }

      {
        data.type === 'double-text' && (
          <Style.DoubleText>
            <div className="top">{data.double_text.top}</div>
            <div className="bot">{data.double_text.bot}</div>
          </Style.DoubleText>
        )
      }

      {
        data.type === 'table' && <Table content={data.table_content}/>
      }

      {/*кнопка дополнительных функций*/}
      {
        data.button && <InfoButton button={data.button} more={data.more}/>
      }
    </Style.Wrapper>
  )
}

export default InfoBlock;