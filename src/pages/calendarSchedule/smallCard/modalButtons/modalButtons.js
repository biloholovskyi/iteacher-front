import React from 'react'

import * as Style from './styled'

const ModalButtons = ({update, event, onDelete}) => {
	return (
		<Style.Wrapper>
		  <Style.Button onClick={() => update(event)}>Редактировать</Style.Button>
		  <Style.Button delete onClick={onDelete}>Удалить</Style.Button>
		</Style.Wrapper>
	)
}

export default ModalButtons