import React from 'react';

import {DragWordsWrap, WordsSection, Word} from '../mediaDragWords/dragWordsStyled';

import * as Style from '../mediaSentence/style'
import {Sentence} from "../mediaTransfer/style";


const MediaWrite = ({data}) => {
  // получаем все слова
  const sentences = data.desc.split('\n');

  const sentencesBlock = [];

  sentences.forEach(sentence => {
    // получаем предложение без слова
    sentencesBlock.push(
      <Sentence>
        <p>{sentence.split('[')[0]}</p>
        <Style.EmptyItem/>
        <p>{sentence.split('[')[1].split(']')[1]}</p>
      </Sentence>
    );
  })

  return (
    <DragWordsWrap>
      <Style.EmptyBlock sentence>
        {sentencesBlock}
      </Style.EmptyBlock>
    </DragWordsWrap>
  )
};

export default MediaWrite;