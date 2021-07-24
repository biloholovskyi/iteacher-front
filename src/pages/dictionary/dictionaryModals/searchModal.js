import React, { useState, useEffect } from "react";
import {lookup} from "../../../service/yandexApi";
import { ListResult } from "./styled";
import DictionaryResultModal from './resultModal'


const DictionarySearchModal = (props) => {
  const [query, setQuery] = useState("");
  const [displayMessage, setDisplayMessage] = useState([]);
  const [cancel, setCancel] = useState(false);
  const [resultDetail, setResultDetail] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      let output = []
      setDisplayMessage(output);

      if (!query) {
        setCancel(false)
        return;
      } else {
        setCancel(true)
      }

      lookup(query).then((data) => {
        if (!data)
          return;
        Object.entries(data.def).forEach(([, value]) => {
          Object.entries(value.tr).forEach(([, tr]) => {
            output.push({
              text: value.text,
              translate: tr.text
            });
          })
        })
        setDisplayMessage(output.slice(0, 4));
      })

    }, 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  const searchCancel = () => {
    setQuery("")
    setDisplayMessage([])
    setCancel(false)
  }

  const searchResultToggle = () => {
    setResultDetail(!resultDetail)
  }
  
  const listResult = displayMessage.map((data, key) => {
    return (
      <li key={key} onClick={() => searchResultToggle()}>
        {data.text}
        <span>{data.translate}</span>
      </li>
    )
  })

  return (
    <>
      <div className={"modal " + (resultDetail ? 'd-none' : '')}>
        <div className="modal-content">
          <div className="modal-header">
            <i className="modal-close" onClick={props.close}></i>
            <h2>Найти слово</h2>
          </div>
          <div className="modal-body">
            <div className="search-input">
                <input
                  type="text"
                  placeholder="Введите слово на русском или английском"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                {cancel && 
                  <i className="si-canсel" onClick={() => searchCancel()}></i>
                }
            </div>
            <ListResult>
              <div className="lr-wrap">
                <ul>{listResult}</ul>
              </div>
            </ListResult>
          </div>
        </div>
      </div>
      {resultDetail && (
        <DictionaryResultModal close={props.close} back={() => searchResultToggle()}/>
      )}
    </>
  );
};

export default DictionarySearchModal;
