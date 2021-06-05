import styled from 'styled-components';

//ЭТО ЗАГОТОВКА
const SpanText = styled.div`

  font-size: 14px;
  line-height: 20px;
  //padding: 0 25px;
  figure {
    margin-bottom: 10px;

    img {
      max-width: 737px;
      height: auto;
      object-fit: cover;
      width: 100%;
      border-radius: 4px;
    }
  }

  p {
    word-break: break-all;
    margin-bottom: 8px;
  }

  ul {
    padding: 0 16px;

    li {
      list-style-type: none;
      margin-bottom: 6px;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        background-color: #4F7FFF;
        border-radius: 50%;
        left: -17px;
        top: 50%;
        margin-top: -3px;
      }
    }
  }

  ol {
    padding: 0 16px;

    li {
      margin-bottom: 6px;
    }
  }
`;

export {SpanText}