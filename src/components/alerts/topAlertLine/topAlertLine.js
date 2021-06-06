import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import {setTopAlertText} from "../../../actions";

import * as Style from './styled'

import icon from '../../../assets/media/icon/warning.svg'

const TopAlertLine = ({text}) => {
  // получаем высоту шапки что бы нормально вывести сообщение
  const [top, setTop] = useState(0);
  useEffect(() => {
    // получаем шапку
    const header = document.getElementsByTagName('header');
    setTop(header[0].offsetHeight)
  }, [text])

  return (
    <>
      <Style.Fake/>
      <Style.AlertLine top={top}>
        <img src={icon} alt="warning"/>
        {text}
      </Style.AlertLine>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.topAlert
  }
};

const mapDispatchToProps = {
  setTopAlertText
};

export default connect(mapStateToProps, mapDispatchToProps)(TopAlertLine);