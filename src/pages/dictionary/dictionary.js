import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import WordTable from "./wordList";
import { DictionaryWrap, NavBar } from "./styled";

const apiUrl = process.env.REACT_APP_API_URL;

const Dictionary = ({ user }) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("text");
  const [order, setOrder] = useState("");
  const [dictionaryList, setDictionaryList] = useState(null);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      axios
        .get(
          `${apiUrl}api/translate/dictionary/user/${user.id}/?search=${search}&ordering=${order}${sortBy}`
        )
        .then((res) => {
          setDictionaryList(res.data);
        });
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [search]);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}api/translate/dictionary/user/${user.id}/?search=${search}&ordering=${order}${sortBy}`
      )
      .then((res) => {
        setDictionaryList(res.data);
      });
  }, [sortBy, order]);

  return (
    <DictionaryWrap>
      <div className="container">
        <h1>Словарь</h1>
        <NavBar>
          <div className="search-input">
            <input
              autoFocus
              type="text"
              placeholder="Введите слово на русском или английском"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div>
            <div className="sortby">
              <i className="icon-sort"></i>
              <span>Сортировать по</span>
              <select
                name=""
                id=""
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="text">алфавиту</option>
                <option value="id">порядку</option>
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Dictionary);
