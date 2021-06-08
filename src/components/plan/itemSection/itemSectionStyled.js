import styled from 'styled-components';

import icon_move from '../../../assets/media/icon/6_dot.svg';
import icom_delete from '../../../assets/media/icon/trash_basket.svg';
import icon_edit from '../../../assets/media/icon/edit.svg';

const SelectionWrap = styled.div`
  width: 100%;
  padding: 17px 16px 16px 23px;
  background: #FFFFFF;
  border: 1px solid #DDE1E6;
  box-sizing: border-box;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06),
              0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  margin-bottom: 16px;
  
  &:first-child {
    margin-top: 32px;
  }

  .section {
    
    &__row {

      width: 100%;

      &-1 {

        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;

      }

      &-2 {

        //padding-left: 26px;

      }

    }

    &__move {

      display: block;
      width: 10px;
      height: 16px;
      background: url(${icon_move}) center center/cover no-repeat;
      margin-right: 15px;
      cursor: pointer;

    }

    &__title {

      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      margin-right: auto;

    }

    &__delete {

      width: 17px;
      height: 20px;
      background: url(${icom_delete}) center center/cover no-repeat;
      cursor: pointer;
      margin-right: 24px;
      
    }
    
    &__edit {
    
      width: 24px;
      height: 24px;
      background: url(${icon_edit}) center center/cover no-repeat;
      cursor: pointer;
    }

  }

`;

export { SelectionWrap };