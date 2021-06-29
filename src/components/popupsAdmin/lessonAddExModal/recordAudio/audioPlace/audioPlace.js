import React from 'react'

import * as Style from './styled'

import sound from './media/sound.svg'

const AudioPlace = () => {
	return (
		<Style.Wrapper>
      <div className="img-wrapper">
        <img src={sound} alt="icon"/>
      </div>

      <div className="info">
        <div className="name">Аудиозапись</div>
        <div className="desc">Ученик должен будет записать аудио что бы закончить упражнение</div>
      </div>
		</Style.Wrapper>
	)
}

export default AudioPlace