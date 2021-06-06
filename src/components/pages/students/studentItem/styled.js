import styled from "styled-components";

const CoursesItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 19px 24px;
  background-color: #fff;
  cursor: pointer;
  position: relative;

  .right {
    background-color: #fff;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    cursor: pointer;

    .right__name {
      display: flex;
      align-items: center;
      background-color: #fff;
      justify-content: flex-start;
      border: none;
      //width: 100%;
      cursor: pointer;
      min-width: 450px;

      @media (max-width: 1099px) {
        min-width: 300px;
      }

      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        margin-right: 16px;
      }

      h3 {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #111111;
        background-color: #fff;
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: #697077;
        background-color: #fff;
      }

      .names {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        background-color: #fff;
        cursor: pointer;
      }

      @media (max-width: 991px) {
        min-width: 240px;
      }

    }

    .more {
      background-color: #fff;
      border: none;
      cursor: pointer;

      img {
        background-color: #fff;
        width: 24px;
        height: 24px;
        object-fit: contain;
        object-position: center;
      }

      @media (max-width: 767px)
      {
        display: none;
      }
      
    }

    .images {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: #fff;
      position: relative;

      img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        object-position: center;
        margin-right: 16px;
        border: 4px solid #fff;
        border-radius: 50%;
      }

      & img:nth-child(2) {
        left: calc(100% - 40px / 2 - 16px);
        position: absolute;
      }

      & img:nth-child(3) {
        position: absolute;
        left: calc(100% - 40px / 2 - -4px);
      }

      .all {
        width: 40px;
        height: 40px;
        border: 4px solid #fff;
        border-radius: 50%;
        background-color: #000;
        position: absolute;
        left: calc(100% - 40px / 2 - -24px);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        cursor: pointer;
      }
    }

    .navSection {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: #fff;

      .lesson {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-right: 24px;
        margin-right: 24px;
        border-right: 1px solid #DDE1E6;
        background-color: #fff;

        @media (max-width: 991px) {
          margin-right: 10px;
          padding-right: 10px;
        }
        @media (max-width: 767px) {
          display: none;
        }

        img {
          width: 24px;
          height: 24px;
          object-fit: contain;
          object-position: center;
          margin-right: 16px;
        }

        .number {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: -0.01em;
          color: #697077;
          width: 20px;
          background-color: #fff;
        }
      }
    }

    .active_item {
      position: relative;

      &:after {
        content: '';
        width: 12px;
        height: 12px;
        background-color: #fff;
        position: absolute;
        right: -30px;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      }
    }
  }

  @media (max-width: 991px) {
    padding: 16px;
  }
`

const Lesson = styled.div`
  background-color: transparent;
  min-width: 115px;

  .small-title {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #697077;
    background-color: transparent;
  }

  .small-desc {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
    background-color: transparent;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

const Course = styled.div`
  background-color: transparent;
  min-width: 172px;

  @media (max-width: 991px) { 
    min-width: 140px;
  }

  @media (max-width: 767px) {
    display: none;
  }

  .small-title {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #697077;
    background-color: transparent;
  }

  .small-desc {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #111111;
    background-color: transparent;
  }
`

export {
  CoursesItem,
  Lesson,
  Course
}