import React, {Component} from "react";

import ListItem from './ListItem';

import {ChooseTemplateModalBody, ChooseTemplateModalOverlay, ListBody} from './styled';

import closed from '../../../assets/media/icon/close.svg';
import photoText from '../../../assets/media/image/tasks/text.png'
import photoVideo from '../../../assets/media/image/tasks/video.png'
import photoImage from '../../../assets/media/image/tasks/image.png'
import photoWordCol from '../../../assets/media/image/tasks/wordcol.png'
import photoDocument from '../../../assets/media/image/tasks/document.png'
import photoTF from '../../../assets/media/image/tasks/tf.png'
import photoConnect from '../../../assets/media/image/tasks/connect.png'
import photoSentence from '../../../assets/media/image/tasks/sentence.png'
import photoTransfer from '../../../assets/media/image/tasks/transfer.png'
import photoWrite from '../../../assets/media/image/tasks/write.png'
import photoTest from '../../../assets/media/image/tasks/test.png'



export default class AdminChooseTemplateModal extends Component {

  render() {

    const {close, showModal} = this.props;

    return(
      <>
        <ChooseTemplateModalOverlay>

          <ChooseTemplateModalBody>

            <img onClick={close} className={'closed'} src={closed} alt="icon"/>

            <h2 className={'title'}>Выберите шаблон</h2>

            <ListBody>
              <ListItem photo={photoText} text={'Текст'} action={() => showModal('textModal')} />
              <ListItem photo={photoVideo} text={'Видео'} action={() => showModal('videoModal')}/>
              <ListItem photo={photoImage} text={'Изображения'} action={() => showModal('addImage')}/>
              <ListItem photo={photoWordCol} text={'Слова по колонкам'} action={() => showModal('wordColl')}/>
              <ListItem photo={photoDocument} text={'Документ'} action={() => showModal('addDocument')}/>
              <ListItem photo={photoTF} text={'True or false'} action={() => showModal('tf')}/>
              <ListItem photo={photoConnect} text={'Связи'} action={() => showModal('connect')}/>
              <ListItem photo={photoSentence} text={'Составить предложение'} action={() => showModal('sentence')}/>
              <ListItem photo={photoTransfer} text={'Перенести слова'} action={() => showModal('transfer')}/>
              <ListItem photo={photoWrite} text={'Заполнить пропуски'} action={() => showModal('write')}/>
              <ListItem photo={photoTest} text={'Тест'} action={() => showModal('test')}/>
            </ListBody>

          </ChooseTemplateModalBody>

        </ChooseTemplateModalOverlay>
      </>
    )
  }
}
