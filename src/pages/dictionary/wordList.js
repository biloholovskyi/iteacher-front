import React, {useState, useRef} from "react";
import YandexApi from "../../service/yandexApi";
import DictionaryResultModal from '../dictionary/dictionaryModals/resultModal'
import { WordList } from "./styled";


const WordTable = ({dictionary, deleteWord}) => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [lookupResult, setLookupResult] = useState(null);
  const [resultDetail, setResultDetail] = useState(false);
  const [synthesizeWords, setSynthesizeWords] = useState({});
  const playsRef = useRef([]);

  const play = async (text, language, playRef) => {
    let synthesize = synthesizeWords[text];
    
    if (!synthesize)
    {
      synthesize = await YandexApi.synthesize(text, language);
      synthesizeWords[text] = synthesize;
      setSynthesizeWords(synthesizeWords);
    }
    const audio = new Audio(synthesize)
    audio.addEventListener('ended', () => playRef.classList.remove('disabled'));
    await audio.play();
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
                      ref={el => playsRef.current[key] = el} 
                      onClick={() => {
                        playsRef.current[key].classList.add('disabled')
                        play(
                          word.text,
                          word.language,
                          playsRef.current[key]
                        )
                      }}
                    ></i>
                    <div onClick={() => {
                      setResultDetail(true)
                      setSelectedWord({
                        input: {
                          text: word.text,
                          transcription: word.transcription
                        },
                        translate: {
                          text: word.translate,
                          transcription: word.translate_transcription
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
