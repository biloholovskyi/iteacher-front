import React from "react";
import {DetailResult} from "./styled";

const DictionaryResultModal = (props) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <i className="modal-close" onClick={props.close}></i>
          <i className="modal-back" onClick={props.back}></i>
        </div>
        <div>
        {/* {JSON.stringify(props.selectedWord)}<br/>
        {JSON.stringify(props.dictionary)} */}
        
        <DetailResult>
          <div className="dr-main">
            <div className="dr-col">
              <div>
                <strong>fish</strong>
                <span className="text-muted">fis</span>
              </div>
              <i className="icon-sound"></i>
            </div>
            <div className="dr-col">
              <div>
                <strong>рыбы</strong>
                <span className="text-muted">ryby</span>
              </div>
              <i className="icon-sound"></i>
            </div>
          </div>
          <div className="modal-body">
            <div className="dr-other">
              <h4>Другие варианты перевода</h4>
              <ul>
                <li>
                  <span>рыбная ловля</span>
                  <span className="text-muted">fishing, fish, sport</span>
                </li>
                <li>
                  <span>торпеда</span>
                  <span className="text-muted">torpedo, fish, tin-fish</span>
                </li>
                <li>
                  <span>фишка</span>
                  <span className="text-muted">chip, counter, shtick, fish</span>
                </li>
              </ul>
            </div>
            <div className="dr-example">
              <h4>Примеры использования</h4>
              <ul>
                <li>
                  <span>He is generally thought to be a bit of a cold fish</span>
                  <span className="text-muted">Его обычно считают немного холодной рыбой</span>
                </li>
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
