import React, {useState, useEffect} from "react";

import AddButton from "../../../../buttons/addButton/addButton";

import {SidebarItem} from "../../styled";

const NextLesson = ({data, show}) => {
  // следующий урока
  const [event, setEvent] = useState(null)

  // задаем близжайший урок
  useEffect(() => {
    if(!data || data.length < 1) {return}

    // меняем формат даты для сортировки
    const sortList = data.map(event => {
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

    // получаем время проведения урока
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'иля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря'
    ]


    const date = `${sortList[0].date.split('.')[0]} ${months[parseInt(sortList[0].date.split('.')[1]) - 1]}, ${sortList[0].time}`;

    setEvent(date);
  }, [data]);

  return (
    <SidebarItem>
      <div className="title">Следующее занятие</div>
      <div className="info">
        {
          event ? (
            <p className="date">{event}</p>
          ) : <AddButton text={'Названчить занятие'} func={show}/>
        }
      </div>
    </SidebarItem>
  )
}

export default NextLesson;