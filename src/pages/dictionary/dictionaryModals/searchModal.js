import React, { useState, useEffect } from "react";
import { lookup } from "../../../service/yandexApi";
import { ListResult } from "./styled";
import DictionaryResultModal from './resultModal'


const DictionarySearchModal = (props) => {
  const [query, setQuery] = useState("");
  const [displayMessage, setDisplayMessage] = useState([]);
  const [translateOptions, setTranslateOptions] = useState([]);
  const [examples, setExamples] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [cancel, setCancel] = useState(false);
  const [resultDetail, setResultDetail] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      let output = [];
      let translateOptions = [];
      let examples = [];
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

        Object.entries(data.data.def).forEach(([, value]) => {
          Object.entries(value.tr).forEach(([, tr]) => {
            output.push({
              input: {
                text: value.text,
                lang: data.input_lang,
                ts: value.ts //Yandex не возвращает транскрипцию русского
              },

              translate: {
                text: tr.text,
                lang: data.translate_lang,
                ts: value.ts //Yandex не возвращает транскрипцию перевода
              }
            });

            let means = "";
            if (tr.mean)
              Object.entries(tr.mean).forEach(([, mean]) => {
                means += mean.text + ", ";
              })

            let syns = "";
            if (tr.syn)
              Object.entries(tr.syn).forEach(([, syn]) => {
                  syns += syn.text + ", ";
              })

            syns = syns.slice(0,-2)
            if (!syns)
              syns = tr.text;

            if (means)
              translateOptions.push({ input: means.slice(0,-2), translate: syns });


            if (tr.ex)
              Object.entries(tr.ex).forEach(([, ex]) => {
                examples.push({ input: ex.text, translate: ex.tr[0].text });
              })

          })
        })
        setDisplayMessage(output.slice(0, 4));
        setTranslateOptions(translateOptions);
        setExamples(examples);
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
      <li key={key} onClick={() => {
        setResultDetail(true);
        setSelectedWord(data);
      }}>
        {data.input.text}
        <span>{data.translate.text}</span>
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
        <DictionaryResultModal 
        translateOptions={translateOptions} 
        selectedWord={selectedWord} 
        examples={examples}
        close={props.close} 
        back={() => searchResultToggle()} />
      )}
    </>
  );
};

export default DictionarySearchModal;
