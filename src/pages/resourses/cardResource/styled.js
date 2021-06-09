import styled from "styled-components";

const CardResourceWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(100% / 3 - 16px);
  margin: 0 24px 24px 0;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  position: relative;

  .img {
    width: 100%;
    height: 100%;
    max-height: 324px;
    object-fit: cover;
    object-position: center;
  }

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 16px;
    background-color: transparent;

    .text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
      background-color: transparent;
      margin-bottom: 16px;

      @media (max-width: 991px) {
        font-size: 14px;
      }

    }

    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: transparent;

      .like {
        display: flex;
        align-items: center;
        background-color: transparent;

        img {
          width: 24px;
          height: 24px;
          margin-right: 8px;
          cursor: pointer;
          background-color: transparent;
        }

        .count {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: -0.01em;
          color: #697077;
          background-color: transparent;
        }
      }

      .date {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #697077;
        background-color: transparent;
      }
    }
  }

  a {
    text-decoration: none;
    text-transform: none;
  }

  @media (max-width: 767px) {
    max-width: calc(100% / 2 - 24px);

    &:nth-child(3n) {
      margin-right: 24px !important;
    }

    &:nth-child(2n) {
      margin-right: 0px !important;
    }
  }

  @media (max-width: 575px) {
    max-width: 100%;
    margin-right: 0 !important;

    &:nth-child(3n) {
      margin-right: 0px !important;
    }
  }
`

export {CardResourceWrap}