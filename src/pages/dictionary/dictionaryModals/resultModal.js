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
          Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  );
};

export default DictionaryResultModal;
