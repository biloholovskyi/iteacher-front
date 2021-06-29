import React, {useState, useEffect} from 'react'

import * as Style from './styled'

import playIcon from './media/play.svg'
import ReactPlayer from "react-player";

const Sound = ({data}) => {
  const [play, setPlay] = useState(false)
  const [time, setTime] = useState(null)

  useEffect(() => {
    setTime(`${data.duration.m}:${data.duration.s > 9 ? data.duration.s : '0' + data.duration.s}`)
  }, [data]);


	return (
		<Style.Wrapper>
      <img src={playIcon} alt="play" onClick={() => setPlay(!play)}/>
      <div className="info">
        <div className="name">Запись</div>
        <div className="desc">{time}, 25mb</div>
      </div>

      <ReactPlayer
        className='react-player'
        url={data.url}
        width="400px"
        height="50px"
        playing={play}
        controls={true}
      />
		</Style.Wrapper>
	)
}

export default Sound