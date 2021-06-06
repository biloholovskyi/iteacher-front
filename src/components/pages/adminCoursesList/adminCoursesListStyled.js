import styled from 'styled-components';

import icon_arrow_down from '../../../assets/media/icon/arrow_down.svg';
import icon_sort from '../../../assets/media/icon/sort.svg';

const CoursesListStyleWrap = styled.div`

  background-color: #f8f9fb;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

`;

const Row = styled.div`

  background-color: #f8f9fb;
  padding-left: 36px;
  padding-right: 36px;

`;

const Row1 = styled(Row)`

  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  padding-top: 122px;
  padding-bottom: 24px;
  
`;

const Row2 = styled(Row)`

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding-bottom: 14px;
  padding-right: calc(36px - 1%);
  margin-left: -2.8%;

`;

const TitleWrap = styled.div`

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

`;

const Title = styled.h2`

  font-weight: 700;
  font-size: 28px;
  line-height: 36px;

`;

const ArrowDown = styled.span`

  width: 10px;
  height: 5px;
  
  margin-left: 15px;
  background: url(${icon_arrow_down}) center center/cover no-repeat;

`;

const SortWrap = styled.div`

  margin-left: auto;
  margin-right: 31px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  &:after {

    content: "";
    display: inline-block;
    width: 10px;
    height: 5px;
    position: absolute;
    top: 9px;
    right: 0;
    
    fill: #697077;
    cursor: pointer;
    z-index: 1;
    background: url(${icon_arrow_down}) center center/cover no-repeat;

  }

`; 

const SortTitle = styled.span`

  color: #697077;
  position: relative;

  &:before {

    content: "";
    position: absolute;
    display: block;
    top: 3px;
    left: -29px;
    width: 18px;
    height: 12px;
    
    background: url(${icon_sort}) center center/cover no-repeat;

  }

`; 

const SortSelect = styled.select`

  border: none;
  outline: transparent;
  margin-left: 8px;
  padding-right: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  z-index: 2;
  font-family: 'Inter', 'Roboto', sans-serif;
  letter-spacing: -0.01em;

`;

export {

  CoursesListStyleWrap,
  Row1,
  Row2,
  TitleWrap,
  Title,
  ArrowDown,
  SortWrap,
  SortTitle,
  SortSelect,
  
};