import React from 'react';
import { PopupWrapper, PopupContainer, Content, PopupClose } from './popupStyled';

const Popup = ({ children, onClose }) => (

  <PopupWrapper>

    <PopupContainer>

      <Content>

        <PopupClose onClick={ onClose } />

        { children }

      </Content>

    </PopupContainer>

  </PopupWrapper>

);

export default Popup;