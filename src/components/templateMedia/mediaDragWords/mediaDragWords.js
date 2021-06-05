import React from 'react';

import { DragWordsWrap, WordsSection, Word, SentenceSection, Sentence, PasteWord } from './dragWordsStyled';


const MediaDragWords = () => {

  return (

    <DragWordsWrap>

      <WordsSection>

        <Word>somebody</Word>

        <Word>something</Word>

        <Word>somewhere</Word>

      </WordsSection>

      <SentenceSection>

        <Sentence>It`s <PasteWord/>who works in a hospital.</Sentence>

        <Sentence>It`s <PasteWord/>which we use for everything nowadays.</Sentence>

        <Sentence>It`s <PasteWord/>where people go when they want to buy something.</Sentence>

      </SentenceSection>

    </DragWordsWrap>

  )

};

export default MediaDragWords;