import styled from 'styled-components';

const CoverLi = styled.li`

  height: 238px;
  position: relative;
  background: ${(props) => props.image};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  margin: 16px -16px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  .cover__world {

    position: absolute;
    bottom: -30px;
    left: -12px;
    font-weight: 800;
    font-size: 220px;
    line-height: 100%;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.1);
    user-select: none;

  }

  .cover__wrap {

    display: none;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: rgba(17, 17, 17, 0.35);
    cursor: pointer;
    z-index: 50;

  }
  .cover__btn {

    padding: 14px 28px;
    font-size: 16px;
    line-height: 20px;
    border: 1px solid #DDE1E6;
    box-sizing: border-box;
    border-radius: 6px;
    color: #FFFFFF;
    background: rgba(0,0,0,0.2); //иначе если фон - картинка, текст теряется

  }

  &:hover {

    .cover__wrap {

      display: flex;

    }

    .cover__world {

      cursor: pointer;

    }

  }

`;

export { CoverLi };