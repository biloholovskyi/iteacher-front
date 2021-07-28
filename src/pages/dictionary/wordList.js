import React from "react";
import axios from "axios";
import YandexApi from "../../service/yandexApi";
import { WordList } from "./styled";

const apiUrl = process.env.REACT_APP_API_URL;

const WordTable = ({dictionary}) => {

  const deleteWord = (word) => {
    const url = `${apiUrl}api/translate/dictionary/${word.id}/`

    axios.delete(url).then((res) => {
      
    });
    
  };

  const play = (text, language) => {
    YandexApi.synthesize(text, language).then((result) => {
      const audio = new Audio(result);
      audio.play();
    });
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
                    {word.text}
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
    </WordList>
  );
};

export default WordTable;
