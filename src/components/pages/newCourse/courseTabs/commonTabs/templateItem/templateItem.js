import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {BgWrap, TemplateItemWrap} from "./styled";

export default class TemplateItem extends Component {

  render() {
    const {course} = this.props;
    return (
      <TemplateItemWrap>
        <Link to={`/single-course/${course.id}`}>
          <BgWrap bg={course.background}>
            <div className="firstLeter">{course.name.substr(0, 1)}</div>
            <h3 className={'first'}>{course.name}</h3>
          </BgWrap>
          <h4 className='title'>{course.name}</h4>
          <p className='desc'>{course.small_desc}</p>
          <div className="price">{course.price} ₽</div>
        </Link>
      </TemplateItemWrap>
    )
  }
}
