import React from "react";


const DictionaryResultModal = (props) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-close" onClick={props.close}></div>
          <div className="modal-back" onClick={props.back}></div>
        </div>
        <div>
        {JSON.stringify(props.selectedWord)}<br/><br/><br/>
        {JSON.stringify(props.dictionary)}
          
        </div>
      </div>
    </div>
  );
};

export default DictionaryResultModal;
