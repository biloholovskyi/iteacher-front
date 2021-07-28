import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import WordTable from "./wordList";
import DictionarySearchModal from "../dictionary/dictionaryModals/searchModal";
import { DictionaryWrap, NavBar } from "./styled";

const apiUrl = process.env.REACT_APP_API_URL;

const Dictionary = ({ user }) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [dictionaryList, setDictionaryList] = useState(null);
  const [dictionaryModal, setDictionaryModal] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      getDictionary();
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [search]);

  useEffect(() => {
    getDictionary();
  }, [sortBy, order]);

  const getDictionary = async (cursor = null, concat = false) => {
    const url = cursor
      ? cursor
      : `${apiUrl}api/translate/dictionary/user/${user.id}/?search=${search}&ordering=${order}${sortBy}`;

    const response = await axios.get(url);
    if (concat && dictionaryList != null)
      response.data.results = await dictionaryList.results.concat(
        response.data.results
      );
    setDictionaryList(response.data);
  };

  const deleteWord = async (word) => {
    const url = `${apiUrl}api/translate/dictionary/${word.id}/`;

    await axios.delete(url);
    const new_results = await dictionaryList.results.filter(function (item) {
      return item.id !== word.id;
    });
    setDictionaryList({ ...dictionaryList, results: new_results });
  };

  // const addWord = async (word) => {
  //   const url = `${apiUrl}api/translate/dictionary/`;
  //   const data = {
  //       text: word.input.text,
  //       language: word,
  //       transcription: word.input.ts,
  //       translate: word.translate.text,
  //       translate_language: word,
  //       translate_transcription: word.transcription.ts,
  //       data: word,
  //   }

  //   await axios.post(url);
  //   const new_results = await dictionaryList.results.filter(function (item) {
  //     return item.id !== word.id;
  //   });
  //   setDictionaryList({ ...dictionaryList, results: new_results });
  // };

  const handleScroll = async (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && dictionaryList.next)
      await getDictionary(dictionaryList.next, true);
  };

  const showDictionaryModal = () => {
    setDictionaryModal(!dictionaryModal);
  };

  return (
    <DictionaryWrap>
      <div className="container" onScroll={handleScroll}>
        <h1>Словарь</h1>
        <NavBar>
          <div className="search-input">
            <input
              autoFocus
              type="text"
              placeholder="Поиск"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div>
            <div className="sortby noselect">
              <i
                className={`icon-sort ${order ? "isReverse" : ""}`}
                onClick={() => {
                  setOrder(order ? "" : "-");
                }}
              ></i>
              <span>Сортировать по</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="text">алфавиту</option>
                <option value="id">порядку</option>
              </select>
            </div>
            <button className="btn btn-primary" onClick={showDictionaryModal}>
              <i className="icon-plus"></i>&nbsp;Добавить слово
            </button>
          </div>
        </NavBar>
        <main>
          {dictionaryList && (
            <WordTable
              dictionary={dictionaryList.results}
              deleteWord={deleteWord}
            />
          )}
        </main>
      </div>
      {dictionaryModal && <DictionarySearchModal close={showDictionaryModal} />}
    </DictionaryWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Dictionary);
