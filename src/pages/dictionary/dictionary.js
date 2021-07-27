import React, {useState, useEffect} from "react";
import axios from "axios";
import WordTable from "./wordList";
import { DictionaryWrap, NavBar } from "./styled";

const Dictionary = () => {
  const [dictionaryList, setDictionaryList] = useState(null);

  useEffect(() => {
    axios.get(`http://192.168.0.12:8000/api/translate/dictionary/user/1/`)
      .then(res => {
        setDictionaryList(res.data);
      })
  },[])

  console.log(dictionaryList)

  return (
    <DictionaryWrap>
      <div className="container">
        <h1>Словарь</h1>
        <NavBar>
          <div className="search-input">
            <input type="text" placeholder="Поиск" />
          </div>
          <div>
            <div className="sortby">
              <i className="icon-sort"></i>
              <span>Сортировать по</span>
              <select name="" id="">
                <option value="">алфавиту</option>
                <option value="">порядку</option>
              </select>
            </div>
            <button className="btn btn-primary">
              <i className="icon-plus"></i> Добавить слово
            </button>
          </div>
        </NavBar>
        <main>
          {dictionaryList && <WordTable dictionary={dictionaryList.results} />}
        </main>
      </div>
    </DictionaryWrap>
  );
};

export default Dictionary;
