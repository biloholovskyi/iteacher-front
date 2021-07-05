import React, {useState} from 'react'

import PricingBlock from "./pricingBlock/pricingBlock";
import MainButton from "../../../components/buttons/mainButton/mainButton";
import List from "./list/list";

import * as Style from './styled'

import logos from './media/logos.svg'

const ContentBlock = () => {
  const [count, setCount] = useState(1);
  const [allPrice, setAllPrice] = useState(15);

  const changeCount = (type) => {
    if(type === 'plus') {
      setAllPrice((count + 1) * 15)
      setCount(count + 1)
    } else {
      if(count === 1) {return}
      setAllPrice((count - 1) * 15)
      setCount(count - 1)
    }
  }

	return (
		<Style.Wrapper>

      <div className="left">
        <div className="left__title">Плати только за уроки,</div>
        <div className="left__title-bottom">остальное бесплатно!</div>

        <List/>
      </div>

      <div className="right">
        <div className="right__title">Сколько тебе нужно уроков?</div>

        <PricingBlock count={count} changeCount={changeCount}/>

        <div className="right__title right__title--8">Общая стоимость</div>

        <div className="right__all-price">{allPrice}.00₽</div>

        <MainButton
          text={'Оплатить'}
          width={356}
        />

        <Style.Logos src={logos} alt={'logos'}/>
      </div>

		</Style.Wrapper>
	)
}

export default ContentBlock