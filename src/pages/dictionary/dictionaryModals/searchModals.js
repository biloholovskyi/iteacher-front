import React, { useState, useEffect } from "react";
import axios from "axios";

import { Modal, ModalContent, ModalClose, SearchBlock, Input } from "./styled";
import search from "../../../assets/media/icon/search.svg";

const apiUrl = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${process.env.REACT_APP_YANDEX_DICTIONARY_KEY}`;

const DictionarySearchModal = (props) => {
  const [query, setQuery] = useState("");
  const [displayMessage, setDisplayMessage] = useState();


  useEffect(() => {
    const timeOutId = setTimeout(() => {

      if (!query)
        return;

      axios
        .get(apiUrl + "&lang=en-ru&text=" + query)
        .then((result) => {

          let output = []

          Object.entries(result.data.def).map(([key1, value]) => {
            Object.entries(value.tr).map(([key2, tr]) => {
              let pair = {};
              pair[value.text] = tr.text;
              output.push(pair);
            })
          })
          setDisplayMessage(output);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  return (
    <Modal>
      <ModalContent>
        <ModalClose onClick={props.close} />
        <h2>Найти слово</h2>
        <SearchBlock>
          <Input>
            <img src={search} alt="icon" />
            <input
              type="text"
              placeholder="Введите слово на русском или английском"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </Input>
        </SearchBlock>
        <div>
          <br />
          {JSON.stringify(displayMessage)}
        </div>
      </ModalContent>
    </Modal>
  );
};

export default DictionarySearchModal;
