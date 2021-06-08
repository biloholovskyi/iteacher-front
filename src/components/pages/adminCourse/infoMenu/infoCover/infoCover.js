import React from 'react';

import { CoverLi } from './infoCoverStyled';

const InfoCover = ({ image, func }) => (

  <CoverLi image = { image } onClick = { func }>

    <span className = "cover__world">N</span>

    <div className = "cover__wrap">

      <span className = "cover__btn">Изменить обложку</span>

    </div>

  </CoverLi>

);

export default InfoCover;