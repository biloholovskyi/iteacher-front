import React, {Component} from 'react';
import classnames from 'classnames';
import * as calendar from './date';

import {CalendarWrap} from './CalendarStyled';
import calendarArrow from '../../../assets/media/icon/calendarArrow.svg';
export default class Calendar extends Component {
  static defaultProps = {
    date: new Date(),
    years: [2020, 2021, 2022, 2023, 2024, 2025],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
    onChange: Function.prototype
  };

  state = {
    date: this.props.date,
    currentDate: new Date(),
    selectedDate: null
  };

  get year() {
    return this.state.date.getFullYear();
  }

  get month() {
    return this.state.date.getMonth();
  }

  get day() {
    return this.state.date.getDate();
  }
  // change prev month in calendarSchedule
  handlePrevMonthButtonClick = () => {
    const date = new Date(this.year, this.month - 1);

    this.setState({ date });
  };
// change next month in calendarSchedule
  handleNextMonthButtonClick = () => {
    const date = new Date(this.year, this.month + 1);

    this.setState({ date });
  };

  handleSelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;

    const date = new Date(year, month);

    this.setState({ date });
  };

  handleDayClick = date => {
    this.setState({ selectedDate: date });
    this.props.onChange(date);
  };

  render() {
    const { years, monthNames, weekDayNames, finish } = this.props;
    const { currentDate, selectedDate, date } = this.state;

    const monthData = calendar.getMonthData(this.year, this.month);

    return (
      <CalendarWrap className={'calendar'}>
        <header>
          <div>
            {monthNames[date.getMonth()]},
            {date.getFullYear()}
          </div>
          <div>
            <button onClick={this.handlePrevMonthButtonClick}><img className={'prev'} src={calendarArrow} alt="icon"/></button>
            <button onClick={this.handleNextMonthButtonClick}><img className={'next'} src={calendarArrow} alt="icon"/></button>
          </div>
        </header>

        <table>
          <thead>
          <tr>
            {weekDayNames.map(name =>
              <th key={name}>{name}</th>
            )}
          </tr>
          </thead>

          <tbody>
          {monthData.map((week, index) =>
            <tr key={index} className="week">
              {week.map((date, index) => date ?
                <td
                  key={index}
                  className={classnames('day', {
                    'today': calendar.areEqual(date, currentDate),
                    'selected': calendar.areEqual(date, selectedDate)
                  })}
                  onClick={() => this.handleDayClick(date)}
                ><div
                  className={'tdContainer'}
                  >
                  <div className={'d'}>{date.getDate()}</div>
                </div>
                 </td>
                :
                <td key={index} className={'disable'} />
              )}
            </tr>
          )}
          </tbody>
        </table>
      </CalendarWrap>
    );
  }
}