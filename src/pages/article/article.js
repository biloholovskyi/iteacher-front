import React from "react";
import {Link} from "react-router-dom";

import CardResource from "../resourses/cardResource/cardResource";

import {ArticleWrap, MainPhoto, Title, Date, Like, Description, ArticleButton, Section, Promocod } from './styled';

import photo from '../../assets/media/image/respurse.png';
import close from "../../assets/media/icon/close.svg";
import edit from '../../assets/media/icon/edit.svg';
import like from '../../assets/media/icon/like.svg';

const Article = () => {
  return(
    <ArticleWrap>
      <div className="smallContainer">
        <button
          className={'edit'}
        >
          <img src={edit} alt="icon"/>
        </button>
        <Link to='/resources' className='close'>
          <img src={close} alt="icon"/>
        </Link>
        <MainPhoto src={photo} alt="image"/>
        <Title>Инструкция к I-teacher для учеников</Title>
        <div className="infoBLock">
          <Date className="Date">Вчера, 21:01</Date>
          <div className="border" />
          <div className="likeBlock">
            <img className={'like'} src={like} alt="icon"/>
            <Like>2</Like>
          </div>
        </div>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante neque, convallis id cursus nec, sagittis at nulla. Aliquam ut nunc et odio aliquet bibendum. Sed at sagittis urna. Duis vitae odio pretium, egestas justo ut, consequat enim. Fusce sagittis aliquet orci in accumsan. In est nunc, lacinia id nisi eget, mollis posuere nunc. Aenean venenatis, turpis et fringilla ullamcorper, turpis turpis placerat nulla, quis blandit sapien dolor ac ex.
        </Description>
        <Description>
          In hendrerit interdum elit eget dapibus. Suspendisse vitae ex lorem. Vestibulum tortor ligula, efficitur tristique porttitor nec, lobortis a ligula. Nunc consectetur sapien in ornare posuere. Nullam dictum nisl eget est ultricies, vel efficitur justo blandit. Nullam semper, nisi non congue tincidunt, tellus sem aliquam nibh, eget posuere augue augue sed nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id nibh purus. Aliquam at porttitor elit. Donec commodo turpis ac velit iaculis, congue fringilla erat finibus. Morbi nec vestibulum neque. Phasellus ultrices ante nec sem ullamcorper, vel ultricies quam ullamcorper. Sed maximus massa velit. Pellentesque tincidunt urna non mauris pretium, id maximus ex vehicula.
        </Description>
        <ArticleButton>Кнопка</ArticleButton>
        <Section>
          <h3>Блок с кнопкой</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero orci, auctor non imperdiet ac, vehicula vel libero. Donec dignissim tristique eleifend. Suspendisse vitae mi a mauris semper venenatis eu at justo</p>
          <ArticleButton>Кнопка</ArticleButton>
        </Section>
        <Section>
          <h3>Блок с кнопкой</h3>
          <Promocod>ALBERT</Promocod>
        </Section>
        <div className="border-bottom" />
        <Title>Другие статьи</Title>
        <div className="otherSection">
          <CardResource/>
          <CardResource/>
          <CardResource/>
        </div>
      </div>
    </ArticleWrap>
  )
}

export default Article;