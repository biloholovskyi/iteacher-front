import React from 'react'
import {useHistory} from "react-router";

import MainButton from "../../buttons/mainButton/mainButton";

import * as Style from './styled'

const PricingBlock = () => {
  const history = useHistory();

	return (
		<Style.Wrapper>
      <div className="title">Осталось уроков</div>
      <div className="count">28</div>

      <MainButton
        text={'Купить уроки'}
        width={256}
        func={() => history.push('/pricing')}
      />
		</Style.Wrapper>
	)
}

export default PricingBlock