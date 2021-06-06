import React, {useState} from "react";

import {StartTask, Times} from "../../styled";

import clock from "../../../../../assets/media/icon/clock.svg";

const Timer = ({event, type}) => {
  const [time, setTime] = useState(null);
  // добавляем 0
  const addZero = (number) => {
    return parseInt(number) < 10 ? `0${number}` : number;
  }
  // запускаем таймер
  setInterval(() => {
    // получаем текущее время по москве
    const getCurrentTime = () => {
      const time = new Date(Date.now());
      const year = time.getUTCFullYear();
      const month = time.getUTCMonth();
      const day = time.getUTCDate();
      const second = time.getUTCSeconds();
      const hour = time.getUTCHours();
      const minute = time.getUTCMinutes();

      const needTime = new Date(Date.UTC(year, month, day, hour, minute, second));
      return needTime.getTime();
    }

    const currentTime = getCurrentTime();

    // получаем время начала урока
    const getStartTime = () => {
      const stringDate = `${event.date.split('.')[2]}-${event.date.split('.')[1]}-${event.date.split('.')[0]} ${event.time}:00`
      const time = new Date(stringDate);
      return time.getTime();
    }

    const startTime = getStartTime();

    // получаем разницу во времени
    const timeToStart = startTime - currentTime;

    // переводим в читабельную строку
    let hour = timeToStart / 3600000;
    hour = hour.toString().split('.')[0];

    let minute = timeToStart / 60000;
    // отнимаем часы из минут
    minute = minute - (parseInt(hour) * 60)
    minute = minute.toString().split('.')[0];

    let second = timeToStart / 1000;
    // отинмаем минуты из секунд
    second = second - (parseInt(timeToStart / 60000) * 60);
    second = second.toString().split('.')[0];

    let timeString = `Начнется через ${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
    if (timeToStart < 0) {
      timeString = 'Скоро начнется';
    }
    setTime(timeString)
  }, 1000)
  return (
    <td className="right">
      <div className="td-wrapper td-wrapper--end">
        <StartTask className="startTask" type={type}>
          <img src={clock} alt="icon"/>
          <Times>{time}</Times>
        </StartTask>
      </div>
    </td>
  )
}

export default Timer;