import React from 'react';

import PlansListItem from "./planListItem/planListItem";

import {monthNames} from "../../../service/monthes";

const PlanList = ({plans, openModal, course}) => {
  const elements = plans.map((lesson, key) => {
    let timeString;
    if(course.schedules) {
      // получаем id урока и проверяем есть ли он в рассписание
      const schedule = course.schedules.find(l => parseInt(l.lesson) === lesson.id);

      if(schedule) {
        const date = `${schedule.date.split('.')[0]} ${monthNames[parseInt(schedule.date.split('.')[1]) - 1]}`;
        timeString = `${date}, ${schedule.time} - ${(parseInt(schedule.time.split(':')[0]) + 1) < 24 ? parseInt(schedule.time.split(':')[0]) + 1 : '00'}:00`;
      } else {
        timeString = '';
      }
    }

    return (
      <PlansListItem
        time={timeString}
        open={openModal}
        key={lesson.id}
        number={key}
        lesson={lesson}
      />
    )
  });

  return (
    <div>
      {elements}
    </div>
  )
}

export default PlanList;
