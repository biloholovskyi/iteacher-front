import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";

import PopupCourse from '../popupCourse';
import axiosInstance from "../../../../service/iTeacherApi";

import {getAllTemplates} from "../../../../actions";

const PopupAddCourse = ({close, templates, getAllTemplates}) => {
  const [templatesList, setTemplatesList] = useState([]);

  useEffect(() => {
  	setTemplatesList(templates);
  }, [templates])

  const history = useHistory();

  // создание нового курса
  const addCourse = async (data) => {
    // объект нового курса
    let newCourse = {
      ...data,
    }

    await axiosInstance.post(`/template/`, {
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
        if(!templatesList || templatesList.length < 1) {
          const resData = res.data;
          axiosInstance.get(`/template/`)
            .then(res => {
              getAllTemplates(res.data);
              // перенаправляем на страницу курса
              history.push(`/admin-panel/templates/${resData.id}`);
            })
            .catch(error => console.error(error))
        } else {
          const newTemplatesList = [...templatesList, res.data];
          getAllTemplates(newTemplatesList);
          // перенаправляем на страницу курса
          history.push(`/admin-panel/templates/${res.data.id}`);
        }
      }).catch(error => console.log(error));
    close()
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
      close={close}

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