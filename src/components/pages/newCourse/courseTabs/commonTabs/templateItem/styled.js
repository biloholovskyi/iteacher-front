import styled from "styled-components";

const BgWrap = styled.div`
    position: relative;
    width: 204px;
    height: 204px;
    background: ${props => props.bg};
    border-radius: 8px;
    padding: 15px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 16px;
    
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 32px;
      letter-spacing: -0.01em;
      color: #fff;
      background-color: transparent;
    }
    .firstLeter {
        font-style: normal;
        font-weight: 800;
        font-size: 220px;
        line-height: 100%;
        background: transparent;
        position: absolute;
        bottom: -38px;
        left: -7px;
        letter-spacing: -0.01em;
        color: rgba(255,255,255,.1);
    }
`

const TemplateItemWrap = styled.div`
  width: 100%;
  max-width: calc(100% / 4);
  height: 100%;
  // margin-right: 24px;
  margin-bottom: 24px;
  a {
    display: block;
    text-decoration: none;
  }
  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #111111;
  }
  .desc {
    color: #697077;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
  }
  .price {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.01em;
    color: #111111;
  }
`

export {
  TemplateItemWrap,
  BgWrap
}