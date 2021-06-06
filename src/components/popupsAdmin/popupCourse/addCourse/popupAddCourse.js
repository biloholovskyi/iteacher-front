import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";
import PopupCourse from '../popupCourse';
import ServerSettings from "../../../../service/serverSettings";

import axios from "axios";

import {getAllTemplates} from "../../../../actions";

export const PopupAddCourse = (props) => {

  const history = useHistory();

  // создание нового курса
  const addCourse = async (data) => {
    // объект нового курса
    let newCourse = {
      ...data,
    }

    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const serverSettings = new ServerSettings();
    await axios.post(`${serverSettings.getApi()}api/template/`, {
      name: newCourse.name,
      count_lessons: 0,
      average_lessons_time: parseFloat(newCourse.average_lessons_time),
      description: "description",
      level: newCourse.level,
      complexity: newCourse.complexity,
      price: newCourse.price,
      small_desc: "some topic",
      lessons: []
    })
      .then(res => {
        // нужно обновить весь список шаблонов
        const newTemplatesList = [...props.templates, res.data];
        props.getAllTemplates(newTemplatesList);
        // перенаправляем на страницу курса
        history.push(`/admin/courses/${res.data.id}`);
      }).catch(error => console.log(error));
    props.close()
  }

  const template = {
    name: '',
    average_lessons_time: "",
    level: "",
    complexity: "",
    price: ""
  }

  return (
    <PopupCourse
      type={1}
      func={addCourse}
      close={props.close}

      template={template}
      name=""
      average_lessons_time=""
      level=""
      complexity=""
      price=""
    />
  );
}

const mapStateToProps = (state) => {
  return {
    templates: state.templates
  }
};

const mapDispatchToProps = {
  getAllTemplates
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupAddCourse);