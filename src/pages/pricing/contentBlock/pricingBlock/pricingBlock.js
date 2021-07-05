import React, {useState} from 'react'

import * as Style from './styled'

import minus from './media/minus.svg'
import plus from './media/plus.svg'

const PricingBlock = ({count, changeCount}) => {
	return (
		<Style.Count>
		  <Style.Button img={minus} onClick={() => changeCount('minus')}/>
      <Style.Number>{count}</Style.Number>
		  <Style.Button img={plus} onClick={() => changeCount('plus')}/>
		</Style.Count>
	)
}

export default PricingBlock