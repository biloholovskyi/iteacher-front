import React from "react";

import {Modal, ModalContent, ModalClose, SearchBlock, Input} from './styled'
import search from "../../../assets/media/icon/search.svg";

const DictionarySearchModal = (props) => {
  return (
    <Modal>
      <ModalContent>
        <ModalClose onClick={props.close}/>
        <h2>Найти слово</h2>
        <SearchBlock>
          <Input>
            <img src={search} alt="icon"/>
            <input type="text" placeholder="Введите слово на русском или английском"/>
          </Input>
        </SearchBlock>
        <div>
          <br/>
          Lorem ipsum dolor sit amet
        </div>
      </ModalContent>
    </Modal>
  )
}

export default DictionarySearchModal;