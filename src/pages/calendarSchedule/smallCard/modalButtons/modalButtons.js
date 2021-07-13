import React from 'react'

import * as Style from './styled'

const ModalButtons = ({update, event}) => {
	return (
		<Style.Wrapper>
		  <Style.Button onClick={() => update(event)}>Редактировать</Style.Button>
		  <Style.Button delete>Удалить</Style.Button>
		</Style.Wrapper>
	)
}

export default ModalButtons