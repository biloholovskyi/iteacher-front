import React from 'react';

import {sortableHandle} from "react-sortable-hoc";
import MediaModals from "../../mediaModals/mediaModals";

import {SelectionWrap} from './itemSectionStyled';

const ItemSection = ({type, data, onDelete, onEdit}) => {
  const textData = data.desc;

  const DragHandle = sortableHandle(() => (

    <span className="item-lesson__move"/>

  ));

  return (
    <SelectionWrap>
      <DragHandle/>
      <div className="section__row section__row-1">
        <span className="section__move"/>

        <span className="section__title">
          {data.title}
        </span>

        <span className="section__delete" onClick={(e) => onDelete(e, data.id)}/>
        <span className="section__edit" onClick={(e) => onEdit(e, data.id, type)}/>

      </div>

      <div className="section__row section__row-2">

        {
          (type === 'TEXT' || type === 'NOTE')
            ? <MediaModals type={type} data={textData}/>
            : <MediaModals type={type} data={data}/>
        }

      </div>
    </SelectionWrap>
  )
};

export default ItemSection;