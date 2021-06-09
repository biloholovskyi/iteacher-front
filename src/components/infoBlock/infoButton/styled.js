import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  cursor: pointer;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #4F7FFF;

  img {
    width: 24px;
    min-width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    margin-left: 8px;
  }
`

export {
  Wrapper
}