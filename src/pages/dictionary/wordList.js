import React from "react";

import { WordList } from "./styled";

const WordTable = ({dictionary, play}) => {
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
                    <i className="icon-delete"></i>
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
