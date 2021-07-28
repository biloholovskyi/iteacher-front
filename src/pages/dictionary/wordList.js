import React, {useState} from "react";
import YandexApi from "../../service/yandexApi";
import DictionaryResultModal from '../dictionary/dictionaryModals/resultModal'
import { WordList } from "./styled";


const WordTable = ({dictionary, deleteWord}) => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [lookupResult, setLookupResult] = useState(null);
  const [resultDetail, setResultDetail] = useState(false);
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

  return (
    <WordList>
      <table>
        <thead>
          <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr-empty">
            <td colSpan="4"></td>
          </tr>
          {dictionary.map((word, key) => {
              return (
                <tr key={key}>
                  <td>
                    <i 
                      className="icon-sound"
                      onClick={() =>
                        play(
                          word.text,
                          word.language
                        )
                      }
                    ></i>
                    <div onClick={() => {
                      setResultDetail(true)
                      setSelectedWord({
                        input: {
                          text: word.text,
                          ts: word.transcription
                        },
                        translate: {
                          text: word.translate,
                          ts: word.translate_transcription
                        }
                      })
                      setLookupResult(word.data)
                    }}>{word.text}</div>
                  </td>
                  <td>{word.transcription}</td>
                  <td>{word.translate}</td>
                  <td>
                    <i className="icon-delete" onClick={() => deleteWord(word)}></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {resultDetail && (
        <DictionaryResultModal
          lookupResult={lookupResult}
          selectedWord={selectedWord}
          close={() => setResultDetail(false)}/>
      )}
    </WordList>
  );
};

export default WordTable;
