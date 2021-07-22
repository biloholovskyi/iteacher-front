import React from 'react';
import Word from './word';
import {
  DictionaryWrap,
  Caption,
  Input,
  SearchBlock,
  SortBlock,
  Title
} from "./styled";

import search from "../../assets/media/icon/search.svg";
import arrow from "../../assets/media/icon/arrow.svg";
import sort from "../../assets/media/icon/sort.svg";
// import plus from "../../assets/media/icon/plus.svg";

const Dictionary = () => {
    return (
      <DictionaryWrap>
        <div className='container'>
          <Caption>
            <Title>Словарь</Title>
          </Caption>
          <Caption>
            <SearchBlock>
              <Input>
                <img src={search} alt="icon"/>
                <input type="text" placeholder="Поиск"/>
              </Input>
            </SearchBlock>
            <SortBlock>
              <img src={sort} alt="icon"/>
              <p>Сортировать по</p>
              <p><b>алфавиту</b></p>
              <img src={arrow} alt="icon"/>
            </SortBlock>
            <button className="btn btn-primary">Добавить слово</button>
          </Caption>
          <div className="wordList">
            <Word/>
          </div>
        </div>
      </DictionaryWrap>
    )
}

export default Dictionary;
