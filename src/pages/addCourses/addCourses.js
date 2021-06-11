import React from 'react';
import CourseTabs from './courseTabs';
import {Link} from "react-router-dom";

// add icon/image
import close from "../../assets/media/icon/close.svg";
import plus from '../../assets/media/icon/plus.svg';

// style
import {AddCoursesWrap, TitleSection, AddCourse} from "./addCoursesStyle";
import {WithOutHeaderContainer} from "../singleCourse/styled";


const AddCourses = () => {
  return (
    <WithOutHeaderContainer>
      <Link to='/Courses' className='close'>
        <img src={close} alt="icon"/>
      </Link>
      <div className='container'>
        <AddCoursesWrap>
          <TitleSection>
            <h1>Выберите курс</h1>
            <AddCourse>
              <Link to='/addCourses'>Создать курс
                <img src={plus} alt="icon"/>
              </Link>
            </AddCourse>
          </TitleSection>
          {/*add tabs */}
          <CourseTabs />
        </AddCoursesWrap>
      </div>
    </WithOutHeaderContainer>
  )
}

export default AddCourses;

