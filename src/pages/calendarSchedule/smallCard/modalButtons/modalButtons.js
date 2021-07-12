import React from 'react'

import * as Style from './styled'

const ModalButtons = () => {
	return (
		<Style.Wrapper>
		  <Style.Button>Редактировать</Style.Button>
		  <Style.Button delete>Удалить</Style.Button>
		</Style.Wrapper>
	)
}

export default ModalButtons