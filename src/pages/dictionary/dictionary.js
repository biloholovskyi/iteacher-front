import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import WordTable from "./wordList";
import DictionarySearchModal from "../dictionary/dictionaryModals/searchModal";
import { DictionaryWrap, NavBar } from "./styled";
import empty from "../../assets/media/image/dictionary_empty.svg";

const apiUrl = process.env.REACT_APP_API_URL;

const Dictionary = ({ user }) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("text");
  const [order, setOrder] = useState("");
  const [dictionaryList, setDictionaryList] = useState(null);
  const [dictionaryModal, setDictionaryModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeOutId = setTimeout(() => {
      getDictionary();
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [search]);

  useEffect(() => {
    getDictionary();
  }, [sortBy, order]);

  const getDictionary = async (cursor = null, concat = false) => {
    setIsLoading(true);
    const url = cursor
      ? cursor
      : `${apiUrl}api/translate/dictionary/user/${user.id}/?search=${search}&ordering=${order}${sortBy}`;

    const response = await axios.get(url);
    if (concat && dictionaryList != null)
      response.data.results = await dictionaryList.results.concat(
        response.data.results
      );
    setDictionaryList(response.data);
    setIsLoading(false);
  };

  const deleteWord = async (word) => {
    const url = `${apiUrl}api/translate/dictionary/${word.id}/`;

    await axios.delete(url);
    const new_results = await dictionaryList.results.filter(function (item) {
      return item.id !== word.id;
    });
    setDictionaryList({ ...dictionaryList, results: new_results });
  };

  const addWord = async (data) => {
    const url = `${apiUrl}api/translate/dictionary/user/${user.id}/`;

    try {
      await axios.post(url, data);
      getDictionary();
      setDictionaryModal(false);
    } catch (err) {
      alert(err.response.data[0]);
    }
  };

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
    <DictionaryWrap onScroll={handleScroll}>
      <div className="container">
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
                className={`icon-sort ${order ? "" : "isReverse"}`}
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
              <i className="icon-plus mr-1"></i>Добавить слово
            </button>
          </div>
        </NavBar>
        <main>
          {dictionaryList && (
            <>
              <WordTable
                dictionary={dictionaryList.results}
                deleteWord={deleteWord}
              />
              {!isLoading && dictionaryList.results.length === 0 && (
                <>
                  {search ? (
                    <div className="empty-block">
                      <h4>Слова "{search}" нет в вашем словаре</h4>
                      <h6>Нажмите “Добавить слово” что бы оно тут появилось</h6>
                    </div>
                  ) : (
                    <div className="empty-block">
                      <img src={empty} alt="" width="360px" height="280px" />
                      <h3>Словарь пуст</h3>
                      <h6>Добавьте слова в словарь</h6>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </main>
      </div>
      {dictionaryModal && (
        <DictionarySearchModal close={showDictionaryModal} addWord={addWord} />
      )}
    </DictionaryWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Dictionary);
