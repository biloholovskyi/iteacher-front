import React from "react";
import { DetailResult } from "./styled";
import { synthesize } from "../../../service/yandexApi";

const DictionaryResultModal = (props) => {
  const play = (text, language) => {
    synthesize(text, language).then((result) => {
      const audio = new Audio(result);
      audio.play();
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <i className="modal-close" onClick={props.close}></i>
          <i className="modal-back" onClick={props.back}></i>
        </div>
        <div>
          <DetailResult>
            <div className="dr-main">
              <div className="dr-col">
                <div>
                  <strong>{props.selectedWord.input.text}</strong>
                  <span className="text-muted">
                    {props.selectedWord.input.ts}
                  </span>
                </div>
                <i
                  className="icon-sound"
                  onClick={() =>
                    play(
                      props.selectedWord.input.text,
                      props.lookupResult.input_lang
                    )
                  }
                ></i>
              </div>
              <div className="dr-col">
                <div>
                  <strong>{props.selectedWord.translate.text}</strong>
                  {/* <span className="text-muted">&nbsp;</span> */}
                </div>
                <i
                  className="icon-sound"
                  onClick={() =>
                    play(
                      props.selectedWord.translate.text,
                      props.lookupResult.translate_lang
                    )
                  }
                ></i>
              </div>
            </div>
            <div className="modal-body">
              <div className="dr-other">
                <h4>Другие варианты перевода</h4>
                <ul>
                  {props.lookupResult.translateOptions.slice(0, 3).map((data, key) => {
                    return (
                      <li key={key}>
                        <span>{data.translate}</span>
                        <span className="text-muted">{data.input}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="dr-example">
                <h4>Примеры использования</h4>
                <ul>
                  {props.lookupResult.examples.slice(0, 2).map((data, key) => {
                    return (
                      <li key={key}>
                        <span>{data.input}</span>
                        <span className="text-muted">{data.translate}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </DetailResult>
        </div>
      </div>
    </div>
  );
};

export default DictionaryResultModal;
