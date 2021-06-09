import React, {useState, useEffect} from "react";

import ScheduleItem from "./scheduleItem/scheduleItem";

import * as Style from './style'

const List = ({courses, schedules, type, studentCourses}) => {
  // список событий
  const [scheduleList, setList] = useState([]);

  useEffect(() => {
    setList(schedules)
  }, [schedules]);


  // меняем формат даты для сортировки
  const sortList = scheduleList.map(event => {
    const date = event.date.split('.')
    const newDate = `${date[2]}-${date[1]}-${date[0]} ${event.time}:00`;
    return {...event, sortTime: newDate};
  })
  // соритруем по дате
  sortList.sort((a, b) => {
    const dateA = new Date(a.sortTime).getTime();
    const dateB = new Date(b.sortTime).getTime();
    return dateA - dateB
  })

  // render список событий
  const renderList = sortList.map(event => {
    // получаем нужный курс
    // если это преподаватель
    if(type === 'teacher') {
      const course = courses.find(c => parseInt(c.id) === parseInt(event.course))
      return <ScheduleItem key={event.id} type={type} event={event} course={course}/>
    } else {
      // если это студент
      const course = studentCourses.find(c => parseInt(c.id) === parseInt(event.course))
      return <ScheduleItem key={event.id} type={type} event={event} course={course}/>
    }
  })

  return (
    <Style.TableWrapper>
      <tbody>
      {renderList}
      </tbody>
    </Style.TableWrapper>
  )
}

export default List;