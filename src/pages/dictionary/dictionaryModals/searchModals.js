import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListResult } from "./styled";

const yandexApiUrl = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${process.env.REACT_APP_YANDEX_DICTIONARY_KEY}`;
const apiUrl = `${process.env.REACT_APP_API_URL}api/translate/detect/`;
const languages = {
  "en": "en-ru",
  "ru": "ru-en"
}

const DictionarySearchModal = (props) => {
  const [query, setQuery] = useState("");
  const [displayMessage, setDisplayMessage] = useState([]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      let output = []
      setDisplayMessage(output);
      if (!query)
        return;

      axios
        .post(apiUrl, { text: query })
        .then((result) => {
          const lang = languages[result.data.languageCode];
          if (!lang)
            return;
          
          axios
            .get(`${yandexApiUrl}&lang=${lang}&text=${query}`)
            .then((result) => {
              Object.entries(result.data.def).forEach(([, value]) => {
                Object.entries(value.tr).forEach(([, tr]) => {
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

  const listResult = displayMessage.map((data, key) => {
    return (
      <li key={key}>
        {data.text}
        <span>{data.translate}</span>
      </li>
    )
  })

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
            <i className="si-canсel" onClick={() => setQuery("")}></i>
        </div>
        <ListResult>
          <div className="lr-wrap">
            <ul>{listResult}</ul>
          </div>
        </ListResult>
      </div>
    </div>
  );
};

export default DictionarySearchModal;
