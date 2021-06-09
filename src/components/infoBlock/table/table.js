import React from "react";

import * as Style from './styled'

const Table = ({content}) => {
  return (
    <Style.Wrapper>
      {content.map((item, key) => {
        return (
          <Style.Item key={key}>
            <span className="name">{item.name}</span>
            <span className="value">{item.value}</span>
          </Style.Item>
        )
      })}
    </Style.Wrapper>
  )
}

export default Table;