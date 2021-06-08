import React from "react";

import StudentLIstItemWrap from "../StudentLIstItemWrap";

import {StudentListBody, StudentListModal} from "../usersStyled";

import closeImg from "../../../../assets/media/icon/close.svg";
import arrows from "../../../../assets/media/icon/arrow-left.svg";

const StudentsList = ({close, back, students}) => {
  return (
    <StudentListModal>
      <img onClick={close} src={closeImg} alt="icon" className={'closed'}/>
      <div onClick={back} className="caption">
        <img src={arrows} alt="icons"/>
        <p>Ученики</p>
      </div>
      <StudentListBody>
        {students.map(student => {
          return <StudentLIstItemWrap key={student.id} student={student}/>
        })}
      </StudentListBody>
    </StudentListModal>
  )
}

export default StudentsList;