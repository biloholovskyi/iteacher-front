import React from 'react';

import PlansListItem from "./planListItem/planListItem";

const PlanList = ({plans, openModal}) => {
  const elements = plans.map((lesson, key) => {
    return (
      <PlansListItem
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
