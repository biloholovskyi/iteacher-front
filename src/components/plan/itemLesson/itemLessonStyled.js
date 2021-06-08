import styled from 'styled-components';
import {NavLink} from "react-router-dom";

import icon_move from '../../../assets/media/icon/6_dot.svg';
import icon_more from '../../../assets/media/icon/more.svg';
import icon_delete from '../../../assets/media/icon/trash_basket.svg';
import icon_pen_grey from '../../../assets/media/icon/pen_grey.svg';

const ItemLessonWrap = styled(NavLink)`
  text-decoration: none;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 29px;
  padding-bottom: 29px;
  border-bottom: 1px solid #DDE1E6;
  user-select: none;
  color: #111;
  width: 100%;
  
  &:hover {

    cursor: pointer;

    .item-lesson__more {

      display: none;

    }

    .item-lesson__delete, .item-lesson__edit {

      display: block;

    }

  }

  .item-lesson {

    &__move {

      width: 10px;
      height: 16px;
      background: url(${icon_move}) center center/cover no-repeat;
      margin-left: 7px;
      margin-right: 23px;

      cursor: n-resize;

    }

    &__count {

      margin-right: 5px;

    }

    &__name {

      margin-right: auto;

    }

    &__more {

      width: 17px;
      height: 4px;
      background: url(${icon_more}) center center/cover no-repeat;
      margin-right: 4px;

    }

    &__delete {

      display: none;
      width: 18px;
      height: 20px;
      background: url(${icon_delete}) center center/cover no-repeat;
      margin-right: 30px;

    }

    &__edit {

      display: none;
      width: 17px;
      height: 17px;
      background: url(${icon_pen_grey}) center center/cover no-repeat;
      margin-right: 4px;

    }

  }

`;

export { ItemLessonWrap };