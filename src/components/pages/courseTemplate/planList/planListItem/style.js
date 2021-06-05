import styled from "styled-components";

const PlanListItemWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #fff;
  padding: 15px 0;
  border-bottom: 1px solid #DDE1E6;
  text-decoration: none;
  cursor: pointer;
  
  .nameBlock {
    flex-direction: column;
    width: 100%;
    .top {
      display: flex;

      .name,
      .number {
        background-color: #fff;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #111111;
      }

      .number {
        margin-right: 5px;
      }
    }

    .bottom {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #4F7FFF;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`

export {PlanListItemWrap}