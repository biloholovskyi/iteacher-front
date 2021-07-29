import React, {useState} from "react";
import { connect } from "react-redux";
import { DetailResult } from "./styled";
import YandexApi from "../../../service/yandexApi";

const DictionaryResultModal = ({user, close, back, lookupResult, selectedWord}) => {
  const [showMoreTranslateOptions, setShowMoreTranslateOptions] = useState(false);
  const [showMoreExamples, setShowMoreExamples] = useState(false);
  const [synthesizeWords, setSynthesizeWords] = useState({});

  const play = async (text, language) => {
    let synthesize = synthesizeWords[text];
    if (!synthesize)
    {
      synthesize = await YandexApi.synthesize(text, language);
      synthesizeWords[text] = synthesize;
      setSynthesizeWords(synthesizeWords);
    }
    await new Audio(synthesize).play();
  };
  
  const getTranslateOptions = () => {
    setShowMoreTranslateOptions(!showMoreTranslateOptions)
  }
  const numberOfTranslateOptions = showMoreTranslateOptions ? lookupResult.translateOptions.length : 3

  const getExamples = () => {
    setShowMoreExamples(!showMoreExamples)
  }
  const numberOfExamples = showMoreExamples ? lookupResult.examples.length : 1

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <i className="modal-close" onClick={close}></i>
          {user.type === "teacher" &&
            <i className="modal-back" onClick={back}></i>
          }
        </div>
        <div>
          <DetailResult>
            <div className="dr-main">
              <div className="dr-col">
                <div>
                  <strong>{selectedWord.input.text}</strong>
                  <span className="text-muted">
                    {selectedWord.input.transcription}
                  </span>
                </div>
                <i
                  className="icon-sound"
                  onClick={() =>
                    play(
                      selectedWord.input.text,
                      lookupResult.language
                    )
                  }
                ></i>
              </div>
              <div className="dr-col">
                <div>
                  <strong>{selectedWord.translate.text}</strong>
                  {/* <span className="text-muted">&nbsp;</span> */}
                </div>
                <i
                  className="icon-sound"
                  onClick={() =>
                    play(
                      selectedWord.translate.text,
                      lookupResult.translate_language
                    )
                  }
                ></i>
              </div>
            </div>
            <div className="modal-body">
              {lookupResult.translateOptions.length > 0 &&
                <div className="dr-other">
                  <h4>Другие варианты перевода</h4>
                  <ul>
                    {lookupResult.translateOptions.slice(0, numberOfTranslateOptions).map((data, key) => {
                      return (
                        <li key={key}>
                          <span>{data.translate}</span>
                          <span className="text-muted">{data.input}</span>
                        </li>
                      );
                    })}
                  </ul>
                  {lookupResult.translateOptions.length > 3 &&
                    <div className="dr-link" onClick={() => getTranslateOptions()}>
                      {showMoreTranslateOptions ? "Свернуть" : "Показать больше вариантов"}
                    </div>
                  }
                </div>
              }
              {lookupResult.examples.length > 0 &&
                <div className="dr-example">
                  <h4>Примеры использования</h4>
                  <ul>
                    {lookupResult.examples.slice(0, numberOfExamples).map((data, key) => {
                      return (
                        <li key={key}>
                          <span>{data.input}</span>
                          <span className="text-muted">{data.translate}</span>
                        </li>
                      );
                    })}
                  </ul>
                  {lookupResult.examples.length > 1 &&
                    <div className="dr-link" onClick={() => getExamples()}>
                      {showMoreExamples ? "Свернуть" : "Показать больше вариантов"}
                    </div>
                  }
                </div>
              }
            </div>
          </DetailResult>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(DictionaryResultModal);
