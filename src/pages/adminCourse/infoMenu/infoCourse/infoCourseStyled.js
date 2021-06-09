import styled from 'styled-components';

const CourseLi = styled.li`

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 16px 0;
  box-sizing: border-box;

  &:after {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    border-bottom: 1px solid #DDE1E6;
  }

  &:nth-last-child(1) {
    margin-bottom: 0px;
    &::after {
      display: none;
    }
  }

  .info__subtitle {
    font-size: 16px;
    line-height: 22px;
    color: #697077;
  }

  .info__descr {
    font-size: 16px;
    line-height: 22px;
  }

`;

const Dot = styled.div`

  width: 112px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  .dot, .dot_active {

    display: block;
    width: 8px;
    height: 8px;
    background: #DDE1E6;
    border-radius: 100%;
    border: none;
    margin: 0 4px 0;

  }

  .dot_active {

    background: #FF832B;

  }

`;

export { CourseLi, Dot };