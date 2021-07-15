import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {NonoCoursesWrap, AddCourse} from './styled';

import square from '../../../assets/media/image/course_empty.svg'
import library from '../../../assets/media/icon/library.svg';

const NoneCourses = ({user}) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setUserData(user);
  }, [user]);


  return (
    <NonoCoursesWrap>

      <div className="caption">
        <div className="BigTitle">Курсы</div>

        {/*кнопку покупки курсов показываем только преподавателю*/}
        {
          user && user.type === 'teacher' && (
            <AddCourse>
              <Link to='/courses-library'>Библиотека курсов
                <img src={library} alt="icon"/>
              </Link>
            </AddCourse>
          )
        }

      </div>

      <img src={square} alt="image"/>
      <p>У вас еще нет курсов</p>

      {/*выбрать еще курсы может только преподаватель*/}

      {
        user && user.type === 'teacher' && <div className="small_title">Выберите необходимый курс в библиотеке</div>
      }

    </NonoCoursesWrap>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NoneCourses);
