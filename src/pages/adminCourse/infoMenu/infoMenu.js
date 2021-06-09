import React from 'react';

import InfoCourse from "./infoCourse/infoCourse";
import InfoCover from './infoCover/infoCover';
import InfoLessonList from './infoLesson/infoLesson';

import {
  InfoUl,
  InfoLi,
  PenSvg,
  CrossSvg,
  InfoUlSimple,
  InfoLiEmpty
} from './infoMenuStyled';

const InfoMenu = (props) => {
  // Тип нужен для того что бы отображать разные варианты верстки и функционала
  const _type = props.type || 'simple';

  const iconWrap = (icon) => {
    switch (icon) {
      case 'PenSvg':
        return <PenSvg onClick={props.func}/>;
      case 'CrossSvg':
        return <CrossSvg onClick={props.func}/>;
      default:
        return null;
    }
  };

  return (
    _type !== 'simple'
      ? <InfoUl>
        <InfoLi>
          <span className="info__title">{props.title}</span>
          {iconWrap(props.icon)}
        </InfoLi>
        {/*Не понятно что за типы и к чему они вообще*/}
        {_type === 'info'
          ? <InfoCourse
            dataSection={props.dataSection}
          />

          : _type === 'cover'
            ? <InfoCover
              func={props.func}
              image={props.image}
            />

            : _type === 'section'

            && <InfoLessonList
              lessonID={props.lessonID}
              dataSection={props.dataSection}
            />
        }
      </InfoUl>

      : <InfoUlSimple>

        <span className="info__title_simple">{props.title}</span>

      </InfoUlSimple>

  )

};

export default InfoMenu;

// {
//   props.dataSection.length === 0 && (
//     <InfoLiEmpty>
//       <p>Нет разделов</p>
//       <span>Для редактирования урока вам нужно добавить хотя бы один раздел</span>
//     </InfoLiEmpty>
//   )
// }