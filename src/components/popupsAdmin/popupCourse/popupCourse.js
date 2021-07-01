import React, {useState} from 'react';

import Popup from '../popupContainer/popupContainer';
import Button from "../../buttons/button/button";
import InputPrice from "../../inputs/inputsAdmin/inputPrice/inputPrice"; //need to compare with v
import InputText from "../../inputs/inputsAdmin/inputText/inputText"; //correct
import SelectList from "../../../pages/adminCoursesList/selectList/SelectList";

import {PopupTitle} from '../popupContainer/popupStyled';

const PopupCourse = (props) => {
  const type = props.type || "";

  const levelVariables = [
    ['A1', 'A1 - Beginner'],
    ['A2', 'A2 - Elementary'],
    ['B1', 'B1 - Pre-intermediate'],
    ['B2', 'B2 - Intermediate'],
    ['C1', 'C1 - Advanced'],
    ['C2', 'C2 - Proficiency'],
  ];

  const [name, setName] = useState(props.template.name || "");
  const [level, setLevel] = useState(props.template.level || "");
  const [price, setPrice] = useState(props.template.price || "");

  function sendData() {

    const data = {
      name: name,
      level: level,
      price: price
    }

    props.func(data);

  }

  return (
    <Popup onClose={props.close}>
      <PopupTitle>

        {`${type === 1

          ? 'Создать'
          : 'Редактировать'

        } курс`}

      </PopupTitle>

      <InputText
        placeholder="Название курса"
        value={name}
        set={setName}
      />

      <SelectList
        name="Уровень"
        list={levelVariables}
        selected={level || ""}
        set={setLevel}
      />

      <InputPrice
        type="price"
        value={price}
        set={setPrice}
        placeholder="0.00"
      />

      <Button
        type="add-popup"
        text={`${type === 1 ? 'Создать' : 'Редактировать'} курс`}
        func={sendData}
      />
    </Popup>
  );
}

export default PopupCourse;