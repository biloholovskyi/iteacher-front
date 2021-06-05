import React, {useState, useEffect} from "react";
import axios from "axios";

import AddButton from "../../../../buttons/addButton/addButton";

import {SidebarItem} from "../../styled";

import ava from "../../../../../assets/media/icon/avatar.svg";

import ServerSettings from "../../../../../service/serverSettings";

const Student = ({studentID, show}) => {
  // данные студента
  const [student, setStudent] = useState(null)

  const setDataStudent = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();
    await axios.get(`${server.getApi()}api/users/${studentID}/`)
      .then(res => {
        if(typeof res.data === "object") {
          setStudent(res.data)
        }
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    setDataStudent().catch(e => console.error(e));
  }, [studentID])

  return (
    <SidebarItem>
      <div className="title">Ученик</div>
      <div className="info">
        {
          student ? (
            <>
              <div className={student.photo ? 'photo' : 'no-photo'}>
                <img src={student.photo ? student.photo : ava} alt="icon"/>
              </div>
              <div className="name">
                {/*<p className={'student'}>{student.name}</p>*/}
                <p className={'email'}>{student.email}</p>
              </div>
            </>
          ) : <AddButton text={'Добавить ученика'} func={show}/>
        }
      </div>
    </SidebarItem>
  )
}

export default Student;