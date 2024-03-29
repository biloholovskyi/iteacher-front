import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import AddButton from "../../../../components/buttons/addButton/addButton";

import {SidebarItem} from "../../styled";

import ava from "../../../../assets/media/icon/avatar.svg";

import axiosInstance from "../../../../service/iTeacherApi";


const Student = ({show, course, user}) => {
  // данные студента/преподавателя
  const [data, setData] = useState(null)

  const setDataStudent = async () => {
    // проверяем преподаватель или студент залогинен
    const id = user.type === 'teacher' ? course.student : course.teacher;

    await axiosInstance.get(`/users/${id}/`)
      .then(res => {
        if(typeof res.data === "object") {
          setData(res.data)
        }
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    setDataStudent().catch(e => console.error(e));
  }, [course])

  return (
    <SidebarItem>
      <div className="title">{user.type === 'teacher' ? 'Ученик' : 'Преподаватель'}</div>
      <div className="info">
        {
          data ? (
            <>
              <div className={data.photo ? 'photo' : 'no-photo'}>
                <img src={data.photo ? data.photo : ava} alt="icon"/>
              </div>
              <div className="name">
                <p className={'email'}>{data ? data.username ? data.username : data.email : null}</p>
              </div>
            </>
          ) : <AddButton text={'Добавить ученика'} func={show}/>
        }
      </div>
    </SidebarItem>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Student);