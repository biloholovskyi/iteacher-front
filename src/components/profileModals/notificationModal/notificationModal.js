import React, {Component} from "react";
import NotificationItem from './notificationItem';
import NotificationSingle from './NotificationSingle';

//styled
import {NotificationWrap} from './NotificationStyled';
//icons
import close from '../../../assets/media/icon/close.svg';

class NotificationModal extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      NotificationItem: false
    }
  }

  showSingleItem = () => {
    this.setState(() => {
      return {
        ...this.state,
        NotificationItem: true
      }
    })
  }

  closeSingleItem = () => {
    this.setState(() => {
      return {
        ...this.state,
        NotificationItem: false
      }
    })
  }

  render(){
    const {closed} = this.props;
    return(
      <>
        <NotificationWrap className={'modal'}>
          <img onClick={closed} src={close} alt="icon" className={'close'}/>
          <div className="caption">Уведомления</div>
          <div className="notificationBody">
            <NotificationItem open={this.showSingleItem} active={true}/>
            <NotificationItem open={this.showSingleItem} waitLesson={true}/>
            <NotificationItem open={this.showSingleItem}/>
            <NotificationItem open={this.showSingleItem}/>
            <NotificationItem open={this.showSingleItem}/>
            <NotificationItem open={this.showSingleItem}/>
            <NotificationItem open={this.showSingleItem}/>
          </div>
        </NotificationWrap>

        {
          this.state.NotificationItem
          ? <NotificationSingle
              closed={this.closeSingleItem}
            />
          : null
        }
      </>
    )
  }
}

export default NotificationModal;