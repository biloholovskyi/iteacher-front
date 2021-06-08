import styled from 'styled-components';

const LessonWrap = styled.div`

  height: 100vh;
  background-color: #f8f9fb;

  .container {

    position: relative;
    background-color: #f8f9fb;
    padding-bottom: 24px;

  }

  .lesson__wrap {

    background-color: #f8f9fb;
    padding: 112px 48px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;

  }

  .lesson__col {

    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;

  }

`;


const CleanPlan = styled.div`

  background: #fff;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  padding-bottom: 182px;

`;

export { LessonWrap, CleanPlan };