import styled from "styled-components";

const HomeWorkItemWrap = styled.tr`
  width: 100%;
  box-shadow: 0 0 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;

  td {
    background: #FFFFFF;

    .td-wrapper {
      display: flex;
      align-items: center;
      padding: 16px;

      .alert-text {
        margin-right: 24px;
        font-family: Inter, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #4F7FFF;

        @media (max-width: 600px) {
          display: none;
        }
      }

      &--no-flex {
        display: block;
      }

      &--no-padding {
        padding: 0;
      }

      &--end {
        justify-content: flex-end;
      }
    }
  }

  .right {
    .attentionBlock {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
        margin-right: 16px;
        background-color: transparent;

        @media (max-width: 1099px) {
          margin-right: 0;
        }

      }

      @media (max-width: 1099px) {
        margin-right: 0;
        min-width: unset;
      }
    }

    .DoneBlock {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: transparent;
      margin-right: 32px;
      min-width: 272px;

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
        margin-right: 16px;
        background-color: transparent;

        @media (max-width: 1099px) {
          margin-right: 0;
        }

      }

      .done {
        color: #24A148;

        @media (max-width: 1099px) {
          display: none;
        }
      }

      @media (max-width: 1099px) {
        margin-right: 0;
        min-width: unset;
      }
    }

    .StartBlock {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: transparent;
      flex-direction: row;

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #4F7FFF;
        margin-right: 24px;

        @media (max-width: 767px) {
          display: none;
        }

      }

      button {
        @media (max-width: 575px) {
          font-size: 14px;
          line-height: 20px;
          padding: 8px 16px;
        }
      }

    }

    .schedule-buttons {
      @media (max-width: 500px) {
        display: none;
      }
    }
  }

  .right_new--lesson {
    justify-content: flex-start;
    flex: 1;
    
    @media (max-width: 500px) {
      display: none;
    }

    .StartBlock {
      background: #DA1E28;
      border-radius: 100px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #FFFFFF;
      max-height: 36px;
      padding: 14px 20px;

      @media (max-width: 575px) {
        padding: 8px 15px;
        white-space: nowrap;
        font-size: 12px;
        line-height: 12px;
      }
    }
  }
`

const LeftTimes = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #DA1E28;
  background-color: transparent;

  @media (max-width: 1099px) {
    display: none;
  }
`

const NameCourse = styled.td`
  .label {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #697077;
  }

  .name {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export {
  HomeWorkItemWrap,
  LeftTimes,
  NameCourse
}