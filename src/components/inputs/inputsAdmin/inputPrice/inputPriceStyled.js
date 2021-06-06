import styled from 'styled-components';

const LabelWrap = styled.label`

  width: 100%;
  height: 56px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  border: none;
  border-radius: 8px;
  padding: 10px 16px 9px;
  background: #DDE1E6;

  font-size: 12px;
  line-height: 18px;
  color: #697077;

  margin-bottom: 24px;
  cursor: pointer;

  input {
    width: 100%;
    border: none;
    background: #DDE1E6;
    font-size: 14px;
    color: #111111;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.01em;

    cursor: pointer;

    &:focus {
      outline: transparent;
    }

  }

  .span__price {

    position: absolute;    
    font-size: 14px;
    top: 28px;
    user-select: none;

  }

`;

export { LabelWrap };