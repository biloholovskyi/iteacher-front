import React, {useState} from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'

import Popup from '../popupContainer/popupContainer';
import Button from "../../buttons/button/button";

import {setTemplate, getAllTemplates} from "../../../actions";

import {PopupTitle} from '../popupContainer/popupStyled';
import {CoverWrap} from './popupChangeCoverStyled';
import axios from "axios";
import ServerSettings from "../../../service/serverSettings";

const PopupChangeCover = (props) => {
  // список градиентов
  const gradient = [
    "linear-gradient(60.64deg, #0093E9 0%, #80D0C7 100%)",
    "linear-gradient(240.64deg, #FFCC70 0%, #C850C0 53.65%, #4158D0 100%)",
    "linear-gradient(240.64deg, #E0C3FC 0%, #80D0C7 100%)",
    "linear-gradient(240.64deg, #F7CE68 0%, #FBAB7E 100%)",
    "linear-gradient(240.64deg, #00DBDE 0%, #FC00FF 100%)",
    "linear-gradient(240.64deg, #FFE53B 0%, #FF2525 100%)",
    "linear-gradient(240.64deg, #8BC6EC 0%, #9599E2 100%)",
    "linear-gradient(240.64deg, #2AF598 0%, #08AEEA 100%)",
    "linear-gradient(60.64deg, #0093E9 0%, #80D0C7 100%)",
    "linear-gradient(240.64deg, #FFCC70 0%, #C850C0 53.65%, #4158D0 100%)",
    "linear-gradient(240.64deg, #E0C3FC 0%, #80D0C7 100%)",
    "linear-gradient(240.64deg, #F7CE68 0%, #FBAB7E 100%)",
    "linear-gradient(60.64deg, #396AFC 0%, #2948FF 100%)",
    "linear-gradient(240.64deg, #6190E8 0%, #A7BFE8 100%)",
    "linear-gradient(240.64deg, #9CECFB 0%, #65C7F7 48.44%, #0052D4 100%)",
    "linear-gradient(240.64deg, #EE0979 0%, #FF6A00 100%)",
  ];

  // для переключения табов
  const [isFirstTab, setIsFirstTab] = useState(true);

  // загрузка изображения, пока не ясно какого
  function uploadImage(file) {
    console.log(`Загружено изображение ${file.name}:`, file);
    //TODO UPLOAD TO SERVER, get URL, and:
    // changeCover(`background-image(${url})`)
    // props.close();
  }

   const changeBackground = async (background) => {
     // заменить данные в текущем шаблоне
     const newTemplate = {
       ...props.selectTemplate,
       background
     }

     props.setTemplate(newTemplate)

     // заменить данные в списке всех курсов
     // получаем index текущего шаблона
     const index = props.allTemplates.findIndex(template => parseInt(template.id) === parseInt(newTemplate.id));
     // отредактированный массив
     const newTemplatesList = [...props.allTemplates.slice(0, index), newTemplate, ...props.allTemplates.slice(index + 1)];

     props.getAllTemplates(newTemplatesList);

     // нужно заменить данные на сервере
     axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
     axios.defaults.xsrfCookieName = 'csrftoken';

     const serverSettings = new ServerSettings();

     await axios.put(`${serverSettings.getApi()}api/template/${newTemplate.id}/update/`, newTemplate)
       .then(res => {
         console.log(res);
         props.close();
       }).catch(error => console.error(error));
   }

  return (
    <Popup onClose={props.close}>
      <PopupTitle>Изменить обложку</PopupTitle>
      <CoverWrap>
        <div className="cover__row cover__row_1">
          <div
            // для переключения табов
            className={`cover__gradient ${isFirstTab ? 'cover__gradient_active' : ''}`}
            tabIndex="-1"
            // для переключения табов
            onClick={() => setIsFirstTab(true)}
          >
            Градиент
          </div>
          <div
            className={`cover__image ${!isFirstTab ? 'cover__image_active' : ''}`}
            tabIndex="-1"
            onClick={() => setIsFirstTab(false)}
          >
            Изображение
          </div>
        </div>

        {isFirstTab
          ? <div className={`cover__row cover__row_2`}>
            {/*выводим все градиенты*/}
            {gradient.map((item, key) => (
              <div
                key={key}
                className="cover__gradient-item"
                style={{background: item}}
                onClick={() => changeBackground(item)}
              />

            ))}
          </div>

          // это экран изображения нам он пока что не нужен
          : <Dropzone onDrop={acceptedFile => uploadImage(acceptedFile)}>

            {({getRootProps, getInputProps, isDragActive}) => (

              <div {...getRootProps()} className={`cover__row cover__row_3`}>

                {isDragActive

                  ? <span className="cover__title">Загрузить!</span>

                  : <>

                    <span className="cover__title">Перетащите файл сюда</span>

                    <span className="cover__subtitle">или</span>

                    <Button
                      text="Выбрать файл на устройстве"
                      type="cover"
                    />

                  </>}

                <input {...getInputProps()} />

              </div>

            )}
          </Dropzone>}
      </CoverWrap>
    </Popup>

  );

}

const mapStateToProps = (state) => {
  return {
    selectTemplate: state.selectTemplate,
    allTemplates: state.templates,
  }
};

const mapDispatchToProps = {
  setTemplate,
  getAllTemplates
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupChangeCover);