import React, {useEffect, useState} from 'react'
import {DateTime, Duration} from 'luxon'

import SmallCard from '../smallCard/smallCard';

import {CalendarWrapp, CalendarArrow, CalendarTable} from './CalendarStyled';

import calendarImg from '../../../assets/media/icon/calendar.svg';
import arrow from '../../../assets/media/icon/calendarArrow.svg';

const Calendar = ({courses, schedules, update}) => {

  // дание что б построить сетку по часам
  const startTime = Duration.fromObject({hours: 0})
  const endTime = Duration.fromObject({hours: 24})
  const start = DateTime.local().startOf('day').plus(startTime)
  const end = DateTime.local().startOf('day').plus(endTime)
  const dur = Duration.fromObject({minutes: 60})
  const range = end.diff(start, ['hours']).hours
  const today = DateTime.local()
  //console.log(today.toLocaleString(DateTime.TIME_24_SIMPLE))

  //Получаем активную неделю
  const [activeWeek, setActiveWeek] = useState(today.startOf('week'))
  // Получаем последний день недели
  const [lastWeekDay, setLastWeekDay] = useState(today.endOf('week'))
  // Получаем сегоднешний день
  const [todayDay, setTodayDay] = useState(today.startOf('day'))
  // текущий месяц
  const [month, setMonth] = useState(activeWeek.setLocale('ru').toLocaleString({month: 'long'}))
  // текущий год
  const [year, setYear] = useState(activeWeek.setLocale('ru').toLocaleString({year: 'numeric'}))
  // список событий
  const [scheduleList, setList] = useState([]);
  // ширина экрана
  const [windowWidth, setWidth] = useState(window.innerWidth);

  const handlerResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => handlerResize())
  }, [])

  useEffect(() => {
    setList(schedules)
  }, [schedules]);

  // Получаем и выводим время
  const getTimeSlots = (start, dur, range) => {
    let slotRange = range * 1
    let arr = []
    for (let i = 0; i <= slotRange; i++) {
      arr = [...arr, {
        formatted: start.toLocaleString(DateTime.TIME_24_SIMPLE),
        date: start
      }]
      start = start.plus(dur)
    }
    return arr
  }

  const timeSlots = getTimeSlots(start, dur, range)

  // Получаем дни недели
  const getWeekDays = () => {
    let arr = []
    for (let i = 0; i < 7; i++) {
      let dayOfWeek = activeWeek.plus({days: i})

      let dayDisplayFormat = {
        letters: dayOfWeek.setLocale('ru').toFormat('EEE'),
        number: dayOfWeek.toFormat('dd')
      }
      arr = [...arr, {
        formatted: dayDisplayFormat,
        date: dayOfWeek
      }]
    }
    return arr
  }

  const weekDays = getWeekDays()

  // делаем календарь на день
  const getAllDays = () => {
    let arr = []
    for (let i = 0; i < 1; i++) {
      let dayOfWeek = todayDay.plus({days: i})

      let dayDisplayFormat = {
        letters: dayOfWeek.setLocale('ru').toFormat('EEE'),
        number: dayOfWeek.toFormat('dd')
      }
      arr = [...arr, {
        formatted: dayDisplayFormat,
        date: dayOfWeek
      }]
    }
    return arr
  }

  const allDays = getAllDays()

  // форматируем дату с сервера в нужный формат
  const formatDateSchedule = scheduleList.map(event => {
    const date = event.date.split('.');
    const newDate = `${date[0]}.${date[1]}.${date[2]}T${event.time}`;
    return {...event, sortTime: newDate};
  })

  const calculateSlotDate = (day, time) => {
    const slotDate = day.plus({hours: time.c.hour, minutes: time.c.minute})
    return slotDate
  }

  // Переключения недель
  const handleWeekChange = (action) => {
    // eslint-disable-next-line no-unused-expressions
    action === 'forward'
      ? (
        setActiveWeek(activeWeek.plus({week: 1})),
          setLastWeekDay(lastWeekDay.plus({week: 1})),
          setMonth(lastWeekDay.setLocale('ru').toLocaleString({month: 'long',})),
          setYear(lastWeekDay.setLocale('ru').toLocaleString({year: 'numeric'}))
      ) : (
        setActiveWeek(activeWeek.minus({week: 1})),
          setLastWeekDay(lastWeekDay.minus({week: 1})),
          setMonth(activeWeek.setLocale('ru').toLocaleString({month: 'long',})),
          setYear(activeWeek.setLocale('ru').toLocaleString({year: 'numeric'}))
      )
  }

  // Переключения дней в дневном календаре
  const handleDaysChange = (action) => {
    action === 'forward'
      ? (
        setTodayDay(todayDay.plus({day: 1}))
      ) : (
        setTodayDay(todayDay.minus({day: 1}))
      )
  }

  let changeMonthName = month === 'январь'
    ? 'января'
    : month === 'февраль'
      ? 'февраля'
      : month === 'март'
        ? 'марта'
        : month === 'апрель'
          ? 'апреля'
          : month === 'май'
            ? 'Мая'
            : month === 'июнь'
              ? 'июня'
              : month === 'июль'
                ? 'июля'
                : month === 'август'
                  ? 'августа'
                  : month === 'сентябрь'
                    ? 'сентября'
                    : month === 'октябрь'
                      ? 'октября'
                      : month === 'ноябрь'
                        ? 'ноября'
                        : month === 'декабрь'
                          ? 'декабря'
                          : null

  return (
    <CalendarWrapp>

      {
        windowWidth > 991 ? (
          <>
            {/*недельный календар*/}
           <div className="calendar_caption">
             <CalendarArrow>
               {/*<img src={calendarImg} alt="img" className={'calendarIcon'}/>*/}
               <div className="number">
                 <div className={''}>{activeWeek.c.day}</div>
                 <div>-</div>
                 <div className={''}>{<div>{lastWeekDay.c.day}</div>}</div>
               </div>
               {changeMonthName}, {year}
               <button className={'back'} onClick={() => handleWeekChange('back')}><img src={arrow} alt="icon"/></button>
               <button className={'forward'} onClick={() => handleWeekChange('forward')}><img src={arrow} alt="icon"/>
               </button>
             </CalendarArrow>
             <div className="fakeBlock" />
           </div>

            <CalendarTable>
              <thead>
              <tr>
                <th/>
                {weekDays.map((day) => (
                  <th key={day.date.ts}>
                    {day.formatted.letters}
                    <span className={
                      today.hasSame(day.date, 'day') ?
                        'calendar-today' :
                        'calendar-notToday'
                    }>{day.formatted.number}</span>
                  </th>
                ))}
              </tr>
              </thead>
              <tbody>
              {timeSlots.map((time) => (
                <tr key={time.date.ts}>
                  <td key={`left_${time.date.ts}`} id={time.formatted}>
                    <span className={'time'}>{time.formatted}</span>
                  </td>
                  {weekDays.map((day) => {
                    const slotValue = calculateSlotDate(day.date, time.date)
                    const oldDate = slotValue.toLocaleString();
                    const oldTime = slotValue.toLocaleString(DateTime.TIME_24_SIMPLE);
                    const newTableFormat = `${oldDate}T${oldTime}`

                    return (
                      <td
                        key={newTableFormat}
                        id={newTableFormat}
                      >
                        {
                          formatDateSchedule.map((items) => {
                            const dateFromModal = items.sortTime;
                            const course = courses.find(c => parseInt(c.id) === parseInt(items.course))
                            return (
                              newTableFormat === dateFromModal && (
                                <SmallCard
                                  update={update}
                                  events={items}
                                  key={dateFromModal}
                                  course={course}
                                />
                              )
                            )
                          })
                        }
                      </td>
                    )
                  })}
                </tr>
              ))}
              </tbody>
            </CalendarTable>
          </>
        ) : (
          <>
            {/* календар на день*/}
            <CalendarArrow>
              <img src={calendarImg} alt="img" className={'calendarIcon'}/>
              <div className="number dailyNumber">
                <div className={''}>{todayDay.c.day}</div>
              </div>
              {todayDay.setLocale('ru').toLocaleString({month: 'long'})}, {year}
              <button className={'back'} onClick={() => handleDaysChange('back')}><img src={arrow} alt="icon"/></button>
              <button className={'forward'} onClick={() => handleDaysChange('forward')}><img src={arrow} alt="icon"/>
              </button>
            </CalendarArrow>

            <CalendarTable>
              <thead>
              <tr>
                <th/>
                {allDays.map((day) => (
                  <th key={day.date.ts}>
                    {day.formatted.letters}
                    <span className={
                      today.hasSame(day.date, 'day') ?
                        'calendar-today' :
                        'calendar-notToday'
                    }>{day.formatted.number}</span>
                  </th>
                ))}
              </tr>
              </thead>
              <tbody>
              {timeSlots.map((time) => (
                <tr key={time.date.ts}>
                  <td key={`left_${time.date.ts}`} id={time.formatted}>
                    <span className={'time'}>{time.formatted}</span>
                  </td>
                  {allDays.map((day) => {
                    const slotValue = calculateSlotDate(day.date, time.date)
                    const oldDate = slotValue.toLocaleString();
                    const oldTime = slotValue.toLocaleString(DateTime.TIME_24_SIMPLE);
                    const newTableFormat = `${oldDate}T${oldTime}`

                    return (
                      <td
                        key={newTableFormat}
                        id={newTableFormat}
                      >
                        {
                          formatDateSchedule.map((items) => {
                            const dateFromModal = items.sortTime;
                            const course = courses.find(c => parseInt(c.id) === parseInt(items.course))
                            return (
                              newTableFormat === dateFromModal && (
                                <SmallCard
                                  events={items}
                                  key={dateFromModal}
                                  course={course}
                                />
                              )
                            )
                          })
                        }
                      </td>
                    )
                  })}
                </tr>
              ))}
              </tbody>
            </CalendarTable>
          </>
        )
      }

    </CalendarWrapp>
  )
}

export default Calendar