import React from 'react';
import TemplateItem from "./TemplateItem";
// styled
import {CommonWrap} from "./addCoursesStyle";

const MyTemplates = ({ courses}) => {

  const elements = courses.map(item => {
    const {id,...itemProps} = item;
    return(
      <TemplateItem
        key={id}
        title={itemProps.name}
      />
    )
  })

  return (
    <CommonWrap>
      {elements}
    </CommonWrap>
  )
}

export default MyTemplates;