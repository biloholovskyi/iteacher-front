import React from "react";

//styled & media
import nails from '../../assets/media/image/nails.png';
import sound from '../../assets/media/icon/sound.svg';
import {WordWrap, Image, MainWord, WordTranslate} from './styled';

const Word = () => {
  return(
    <WordWrap className={'word'}>
      <Image src={nails} alt="image"/>
      <div className={'content'}>
        <div className="sound"><img src={sound} alt="icon"/></div>
        <div className="word">
          <MainWord>Nails</MainWord>
          <WordTranslate>Ногти</WordTranslate>
        </div>
      </div>
    </WordWrap>
  )
}

export default Word;