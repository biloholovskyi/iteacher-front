import React, {useState, useEffect} from "react";

import ListLessonDone from "./ListLessonDone";

import {ListLessonWrap} from './leftSideBarStyled';

const ListLesson = ({data, activeSection}) => {
  const [list, setList] = useState([])

  useEffect(() => {
    const sectionsList = JSON.parse(data).sections.map((section, key) => {
      if(key === activeSection) {
        return {...section, active: true}
      } else {
        return {...section, active: false}
      }
    })
    setList(sectionsList);
  }, [data, activeSection]);

  const sections = list.map((section, key)=> {
    return <ListLessonDone key={key} data={section}/>
  })

  return (
    <ListLessonWrap>
      {sections}
    </ListLessonWrap>
  )
}

export default ListLesson;