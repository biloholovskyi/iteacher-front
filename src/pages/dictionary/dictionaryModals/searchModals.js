import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListResult } from "./styled";

const yandexApiUrl = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${process.env.REACT_APP_YANDEX_DICTIONARY_KEY}`;
const apiUrl = `${process.env.REACT_APP_API_URL}api/translate/detect/`;
const languages = ["en", "ru"];

const DictionarySearchModal = (props) => {
  const [query, setQuery] = useState("");
  const [displayMessage, setDisplayMessage] = useState();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      let output = []
      setDisplayMessage(output);
      if (!query)
        return;


      axios
        .post(apiUrl, { text: query })
        .then((result) => {

          const languageCode = result.data.languageCode;
          if (languages.indexOf(languageCode) < 0)
            return;

          let lang = `${languageCode}-${languageCode === "ru" ? "en" : "ru"}`;
          axios
            .get(`${yandexApiUrl}&lang=${lang}&text=${query}`)
            .then((result) => {
              Object.entries(result.data.def).forEach(([key1, value]) => {
                Object.entries(value.tr).forEach(([key2, tr]) => {
                  output.push({
                    text: value.text,
                    translate: tr.text
                  });
                })
              })
              setDisplayMessage(output.slice(0, 4));
            })
            .catch((err) => {
              console.error(err);
            });
        })
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-close" onClick={props.close}></div>
          <h2>Найти слово</h2>
        </div>
        <div className="search-input">
            <input
              type="text"
              placeholder="Введите слово на русском или английском"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
        </div>
        <ListResult>
          <div className="lr-wrap">
            {displayMessage && displayMessage.map((data, key) => {
              return (
                <div className="lr-item" key={key}>
                  {data.text}
                  <span>{data.translate}</span>
                </div>
              )
            })
            }
          </div>
        </ListResult>
      </div>
    </div>
  );
};

export default DictionarySearchModal;
