import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";

import HeaderMain from './headerMain/headerMain';
import HeaderCreate from './headerCreate/headerCreate';

import {HeaderWrap} from './adminHeaderStyled';

const AdminHeader = (props) => {
  // замена имени в шапке
  const [name, setName] = useState("");
  // задаем тип шапки
  const [type, setType] = useState("default");

  // меняем тип шапки и остальные данные
  useEffect(() => {
    const {header: {type, name}} = props.headSettings;
    setType(type);
    setName(name);
  })

  return (
    <HeaderWrap>
      {
        type === 'default' ? <HeaderMain user={props.user}/>
          : type === 'course' ? <HeaderCreate type={type} name={name}/>
          : type === 'lesson' ? <HeaderCreate type={type} name={name}/> : null
      }
    </HeaderWrap>

  );

};


const mapStateToProps = (state) => {
  return {
    headSettings: state.adminPanelSettings,
    user: state.user
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);