import React from "react";


//styled
import {CardResourceWrap} from './Styled';
//icons
import res from '../../../assets/media/image/respurse.png';
import like from '../../../assets/media/icon/like.svg';
import {Link} from "react-router-dom";

const CardResource = () => {
  return(

      <CardResourceWrap className='card'>
        <Link to={'/article'}>
          <img className={'img'} src={res} alt="image"/>
          <div className="content">
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend ornare metus</div>
            <div className="info">
              <div className="like">
                <img src={like} alt="icon"/>
                <div className="count">2</div>
              </div>
              <div className="date">Вчера, 21:01</div>
            </div>
          </div>
        </Link>
      </CardResourceWrap>

  )
}

export default CardResource;