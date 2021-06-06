import React from 'react';
import { connect } from "react-redux";
import PopupCourse from '../popupCourse';

import {setTemplate, getAllTemplates} from "../../../../../actions";
import axios from "axios";
import ServerSettings from "../../../../../service/serverSettings";
const serverSettings = new ServerSettings();

const PopupEditCourse = (props) => {
  // не совсем понятноз почему нельзя было сразу из props прокинуть данные на модалку
  const previous = {
    name: props.previous.name,
    duration: props.previous.duration,
    level: props.previous.level,
    complexity: props.previous.complexity,
    price: props.previous.price
  }

  // обновляем данные курса
  async function editCourse (data) {
    const template = props.templates.find(t => t.id.toString() === props.id.toString());

    const _data = {
      ...template,
      ...data
    }

    await axios.put(`${serverSettings.getApi()}api/template/${props.id}/update/`, _data)
      .then(res => {
        // обновляем данные на сервере
        console.log(props);
        // обновляем все шаблоны
        // получаем нужным нам шаблон
        const currentTemplateIndex = props.templates.findIndex(t => t.id.toString() === props.id.toString());
        const newArrayTemplates = [...props.templates.slice(0, currentTemplateIndex), _data, ...props.templates.slice(currentTemplateIndex + 1)];
        props.getAllTemplates(newArrayTemplates);
        // обновляем выбраный шаблон
        props.setTemplate(_data);

      }).catch(error => console.log(error))
    props.close();
  }

  return (

    <PopupCourse

      type={2}
      func={editCourse}
      close={props.close}
      template={props.previous}
      name = {previous.name}
      duration = {previous.duration}
      level = {previous.level}
      complexity = {previous.complexity}
      price = {previous.price}

    />

  );

}


const mapStateToProps = (state) => {

  return {
    templates: state.templates,
    selectTemplate: state.selectTemplate
  }

};

const mapDispatchToProps = {
  setTemplate,
  getAllTemplates
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupEditCourse);