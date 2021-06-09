import styled from 'styled-components';

import icon_move          from '../../../../assets/media/icon/6_dot.svg';
import icon_move_blue     from '../../../../assets/media/icon/6_dot_blue.svg';
import icon_delete        from '../../../../assets/media/icon/trash_basket.svg'
import icon_delete_blue   from '../../../../assets/media/icon/trash_basket_blue.svg'

const LessonWrap = styled.div`

  width: 318px;
  min-height: 635px;
  margin-left: -16px;
  margin-bottom: auto;
  user-select: none;

`;

const LessonLi = styled.li`

  width: 100%;
  height: 48px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;
  outline: transparent;
  padding-left: 16px;
  padding-right: 16px;
  overflow: hidden;

  .topic_input {

    font-family: 'Inter';
    font-style: normal;
    font-size: 16px;
    line-height: 22px;
    margin-left: 23px;
    margin-right: auto;
    border: none;
    outline: transparent;

  }

  .topic_dots {

    margin-left: 5px;
    display: block;
    width: 10px;
    height: 16px;
    background: url(${icon_move}) center center/cover no-repeat;

  }

  .topic_delete {

    display: none;
    width: 18px;
    height: 19px;
    margin-right: 3px;
    background: url(${icon_delete}) center center/cover no-repeat;

  }


  &:hover {

    background: #f4f5f7;
    cursor: pointer;

    .topic_input {

      background: #f4f5f7;
      cursor: pointer;

    }

    .topic_delete {

      display: block;

    }

  }

  &.active {

    background: #edf2ff;

    &::before {

      content: "";
      display: block;
      width: 2px;
      height: 56px;
      position: absolute;
      top: 0;
      left: 0;
      background: #4F7FFF;

      }

    .topic_input {

      color: #4F7FFF;
      background: #edf2ff;
      cursor: pointer;

    }

    .topic_dots {

      background: url(${icon_move_blue}) center center/cover no-repeat;

    }

  }

  &:focus:hover, &:focus-within:hover {

    .topic_delete {

      display: block;
      background: url(${icon_delete_blue}) center center/cover no-repeat;

    }

  }


`;

export { LessonWrap, LessonLi };