import React from 'react';
import HomeWorkItem from './homeWorkItem';

//styled
import {HomeWorkWrap, Title} from './styled';

const HomeWork = () => {
  return (
    <HomeWorkWrap>
      <Title>Домашние задания</Title>
      <div className="workList">
        <HomeWorkItem Start={true}/>
        <HomeWorkItem ends={true}/>
        <HomeWorkItem inProgress={true}/>
      </div>
    </HomeWorkWrap>
  )
}

export default HomeWork;