import React from "react";
import MainButton from "../../../components/buttons/mainButton/mainButton";
import ResourcesItem from './resourcesItem';

//styled
import {Caption, SortBlock, ResourcesWrap, Input, DropDown, SearchBlock, ResourcesList} from './Styled';
//icon & images
import sort from "../../../assets/media/icon/sort.svg";
import arrow from "../../../assets/media/icon/arrow.svg";
import plus from "../../../assets/media/icon/plus.svg";
import search from "../../../assets/media/icon/search.svg";


const AdminResources = () => {
  return(
    <ResourcesWrap>
      <div className="container">
        <Caption>
          <h2>Полезное</h2>
          <div className={'wrap'}>
            <SortBlock>
              <img src={sort} alt="icon"/>
              <p>Сортировать по</p>
              <p><b>алфавиту</b></p>
              <img src={arrow} alt="icon"/>
            </SortBlock>
            <MainButton>
              <img src={plus} alt="icon"/>
              Добавить статью
            </MainButton>
          </div>
        </Caption>
        <Caption>
          <SearchBlock>
            <Input>
              <img src={search} alt="icon"/>
              <input type="text" placeholder="Поиск по названию"/>
            </Input>
            <DropDown className={'dropDown'}>
              <p>Дата</p>
              <img src={arrow} alt="icon"/>
            </DropDown>
            <DropDown className={'dropDown'}>
              <p>Раздел</p>
              <img src={arrow} alt="icon"/>
            </DropDown>
            <DropDown className={'dropDown'}>
              <p>Автор</p>
              <img src={arrow} alt="icon"/>
            </DropDown>
          </SearchBlock>
        </Caption>
        <ResourcesList>
          <ResourcesItem/>
        </ResourcesList>
      </div>
    </ResourcesWrap>
  )
}

export default AdminResources;