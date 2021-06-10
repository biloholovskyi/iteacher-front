import React from 'react'

import * as Style from './styled.js'

const Tabs = () => {
  return (
    <>
      <Style.TabsHead>
        <div className={'tabs active'}>
          Курсы
        </div>
        <div className={'tabs'}>
          Заметки
        </div>
      </Style.TabsHead>
    </>
  )
}

export default Tabs