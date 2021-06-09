import React, {useState, useEffect} from 'react';

import {StudentListItem} from './usersStyled';

import ava from "../../assets/media/icon/avatar.svg";

const StudentLIstItemWrap = ({student}) => {
  //получаем фото студента
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if(student.photo) {
      setPhoto(student.photo)
    }
  }, [student])

  return (
    <>
      <StudentListItem>
        {/* Блок с фото */}
        {
          photo
            ? <img src={photo} alt="icon" className={'ava'}/>
            : <img src={ava} alt="icon" className={'ava'}/>
        }

        {/* Блок с именем */}
        <div className="title">{student.name ? student.name : student.email}</div>
      </StudentListItem>
    </>
  )
}

export default StudentLIstItemWrap;