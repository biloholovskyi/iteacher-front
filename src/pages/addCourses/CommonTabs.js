import React from 'react';
import TemplateItem from "./TemplateItem";
// styled
import {CommonWrap} from './addCoursesStyle';

const CommonTabs = ({courses}) => {

  const elements = courses.map(c => {
    return(
      <TemplateItem
        key={c.id}
        course={c}
      />
    )
  })

  return (
    <CommonWrap>
      {elements}
    </CommonWrap>
  )
}

export default CommonTabs;