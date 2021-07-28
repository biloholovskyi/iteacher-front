import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import YandexApi from "../../../service/yandexApi";
import DictionaryResultModal from './resultModal'
import { ListResult } from "./styled";


const DictionarySearchModal = ({user, close}) => {
  const [query, setQuery] = useState("");
  const [lookupResult, setLookupResult] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [showClearQuery, setShowClearQuery] = useState(false);
  const [resultDetail, setResultDetail] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setLookupResult(null);
      setShowClearQuery(query);
      if (!query)
        return;
      
      YandexApi.lookup(query).then((result) => {
        setLookupResult(result);
      })
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [query]);


  const clearQuery = () => {
    setQuery("");
    setLookupResult(null);
    setShowClearQuery(false);
  }

  return (
    <>
      <div className={"modal " + (resultDetail ? 'd-none' : '')}>
        <div className="modal-content">
          <div className="modal-header">
            <i className="modal-close" onClick={close}></i>
            <h2>Найти слово</h2>
          </div>
          <div className="modal-body">
            <div className="search-input">
              <input
                autoFocus
                type="text"
                placeholder="Введите слово на русском или английском"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              {showClearQuery &&
                <i className="si-canсel" onClick={() => clearQuery()}></i>
              }
            </div>
            <ListResult>
              <div className="lr-wrap">
                <ul>{lookupResult &&
                  lookupResult.words.slice(0, 4).map((word, key) => {
                    return (
                      <li key={key} onClick={() => {
                        setResultDetail(true);
                        setSelectedWord(word);
                      }}>
                        {word.input.text}
                        <span>{word.translate.text}</span>
                      </li>
                    )
                  })

                }</ul>
              </div>
            </ListResult>
          </div>
        </div>
      </div>
      {resultDetail && (
        <DictionaryResultModal
          lookupResult={lookupResult}
          selectedWord={selectedWord}
          close={close}
          back={() => setResultDetail(false)} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};


export default connect(mapStateToProps, null)(DictionarySearchModal);
