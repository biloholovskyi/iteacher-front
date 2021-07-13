import React, {useState, useRef, useEffect} from "react";

import {DropLIstItems, Wrapper} from "../mainInput/styled";

const MainDropList = ({
                        name,
                        required,
                        errorText,
                        validation,
                        width,
                        options = [{value: '', name: ''}],
                        onChange = () => null,
                        classes,
                        defaultValue
                      }) => {

  const [showStatus, setShowStatus] = useState(false)

  // ссылка на селект
  const selectEl = useRef(null);
  // ссылка на список селекта
  const selectListEl = useRef(null);
  // ссылка на весь врапер
  const wrapperEl = useRef(null)

  // выводим options
  const optionsList = options.map((item, key) => {
    if(defaultValue && defaultValue === item.value) {
      return <option hidden key={key} value={item.value}>{item.name}</option>
    } else {
      return <option hidden key={key} value={item.value}>{item.name}</option>
    }
  })


  useEffect(() => {
    changeOptions(defaultValue)
  }, [defaultValue]);


  // кастомный дроплист
  const dropdownList = options.map((item, key) => {
    return (
      <li
        className={'listItem'}
        key={key}
        onClick={() => {
          changeOptions(item.value);
        }}
      >
        {item.name}
      </li>
    )
  })

  // открываем/закриваем select
  const showOptions = () => {
    setShowStatus(!showStatus)
  }

  const changeOptions = (value) => {
    // передаем значение в селект
    selectEl.current.value = value
    onChange(selectEl.current);
    setShowStatus(false);
  }

  // закрытие при клике вне списка селекта
  const closeOutsideClick = (e) => {
    // проверяем был ли клик по списку
    if (selectListEl.current && !selectListEl.current.contains(e.target)) {
      // проверяем был ли до клика открыт список и если он открыт то закрываем
      if (selectEl.current && !selectEl.current.contains(e.target)) {
        setShowStatus(false);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => closeOutsideClick(e));
  }, []);


  return (
    <Wrapper
      ref={wrapperEl}
      className={` ${validation && 'valid'} open ${classes}`}
      width={width}
      fakeBg={showStatus}
    >
      <div className="select-arrow"/>

      {
        defaultValue ? (
          <select
            onClick={(e) => {
              showOptions(e)
            }}
            className={'input select'}
            name={name}
            required={required}
            ref={selectEl}
            defaultValue={defaultValue}
          >
            {optionsList}
          </select>
        ) : (
          <select
            onClick={(e) => {
              showOptions(e)
            }}
            className={'input select'}
            name={name}
            required={required}
            ref={selectEl}
          >
            {optionsList}
          </select>
        )
      }

      {
        showStatus && (
          <DropLIstItems
            ref={selectListEl}
            className={'dropListWrap'}
          >
            {dropdownList}
          </DropLIstItems>
        )
      }
      {
        validation
          ? <div className={'errorText'}>{errorText}</div>
          : null
      }
    </Wrapper>
  )
}

export default MainDropList;