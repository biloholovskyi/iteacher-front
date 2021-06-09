import React from 'react';

import {CourseLi, Dot} from './infoCourseStyled';

const InfoCourse = ({dataSection}) => {
  const countDots = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      {dataSection.map((item, k) => (
        <CourseLi key={k}>
          <span className="info__subtitle">{item[0]}</span>
          <span className="info__descr">
            {item[0] !== 'Сложность'
              ? item[1]
              : <Dot>
                {countDots.map((dot, key) => (
                  <span
                    key={key}
                    className={
                      item[1] >= dot
                        ? 'dot_active'
                        : 'dot'
                    }
                  />
                ))}
              </Dot>
            }
          </span>
        </CourseLi>
      ))}
    </>
  )
};

export default InfoCourse;
