import React, { useState, useEffect } from "react";
import {lookup} from "../../../service/yandexApi";

import { Modal, ModalContent, ModalClose, SearchBlock, Input, ListResult } from "./styled";
import search from "../../../assets/media/icon/search.svg";


const DictionarySearchModal = (props) => {
  const [query, setQuery] = useState("");
  const [displayMessage, setDisplayMessage] = useState();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      let output = []
      setDisplayMessage(output);
      if (!query)
        return;

      lookup(query).then((data) => {
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
      </ModalContent>
    </Modal>
  );
};

export default DictionarySearchModal;
