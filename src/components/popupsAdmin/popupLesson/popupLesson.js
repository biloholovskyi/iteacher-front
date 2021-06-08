import React, { useState, useEffect } from 'react';

import Popup from '../popupContainer/popupContainer';
import Button from "../../buttons/button/button";
import InputText from "../../inputs/inputsAdmin/inputText/inputText";

import { PopupTitle } from '../popupContainer/popupStyled';
import { PopupCourseWrap } from './popupLessonStyled';

const PopupLesson = (props) => {
  // тип нужен для разного вывода текста
  const type = props.type || "";

  // задаем имя урока
  const [ name, setName ] = useState( props.name || "" );
  // нумерация урока, пока не нужно
  //const [ num, setNum ] = useState( props.num || "" );
  // количество всех уроков, нужно для нумерации
  const [ countLessons, setCountLessons ] = useState([])

  // это похоже для нумерации
  // useEffect(() => {
  //   let counter = props.countLessons;
  //   const nums = [1];
  //
  //   if (parseInt(counter) > 1) {
  //
  //     while (counter > 1) {
  //
  //       nums.push(nums[nums.length - 1] + 1)
  //       counter--;
  //
  //     }
  //
  //   }
  //
  //   setCountLessons(nums);
  //
  // }, [ props.countLessons ])

  // не понятно для чего
  // function sendData() {
  //
  //   const data = {
  //
  //     name: name,
  //     num: num
  //
  //   }
  //
  //   props.func(data);
  //
  // }

  return (
    <Popup onClose={props.close}>
      <PopupTitle>
        {`${type === 1
            ? 'Создать' 
            : 'Редактировать'
          } урок`}

      </PopupTitle>

      <InputText
        placeholder = "Название урока"
        value = { name }
        set = { setName }
      />

      {/*<PopupCourseWrap>*/}
      {/*  <span className="popup-course__title">Номер урока:</span>*/}
      {/*  <div className="popup-course__wrapp">*/}
      {/*    <select */}
      {/*      className="popup-course__select" */}
      {/*      value = { num }*/}
      {/*      onChange = { (e) => setNum( e.target.value ) }*/}
      {/*    >*/}
      {/*      { countLessons.map((num, k) => {*/}
      {/*        return <option key = { k } value = { num }>{ num }</option>*/}
      {/*      })}*/}
      {/*    </select>*/}
      {/*    <span className="popup-course__down"/>*/}
      {/*  </div>*/}
      {/*</PopupCourseWrap>*/}

      <Button
        type="add-popup"
        text={`${type === 1 ? 'Создать' : 'Редактировать'} урок`}
        func={() => props.func(name)}
      />

    </Popup>

  );

}

export default PopupLesson;