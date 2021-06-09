import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";

import {getAllTemplates} from "../../actions";

import CourseTabs from "./courseTabs/courseTabs";

import * as Style from './styled'

import close from "../../assets/media/icon/close.svg";
import plus from '../../assets/media/icon/plus.svg';

import ServerSettings from "../../service/serverSettings";

const server = new ServerSettings();

const NewCourse = ({getAllTemplates}) => {
  // получаем все шаблоны
  useEffect(() => {
   getTemplates().catch(error => console.error(error));
  }, [])

  const getTemplates = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    await axios.get(`${server.getApi()}api/template/`)
      .then(res => {
        getAllTemplates(res.data);
      }).catch(error => console.log(error));
  }

  return (
    <Style.WithOutHeaderContainer>
      <Link to='/Courses' className='close'>
        <img src={close} alt="icon"/>
      </Link>
      <div className='container'>
        <Style.AddCoursesWrap>
          <Style.TitleSection>
            <h1>Выберите курс</h1>
            <Style.AddCourse>
              <Link to='/addCourses'>Создать курс
                <img src={plus} alt="icon"/>
              </Link>
            </Style.AddCourse>
          </Style.TitleSection>
          {/*add tabs */}
          <CourseTabs />
        </Style.AddCoursesWrap>
      </div>
    </Style.WithOutHeaderContainer>
  )
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = {
  getAllTemplates
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCourse);