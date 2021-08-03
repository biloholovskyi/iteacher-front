import React, {Component} from "react";
import axios from "axios";

import InputName from './personalDateModal/inputName';
import InputEmail from './personalDateModal/inputEmail';
import InputDay from './personalDateModal/inputDay';
import InputMonth from './personalDateModal/inputMonth';
import InputYear from './personalDateModal/inputYear';
//styled and media
import close from '../../assets/media/icon/close.svg';
import {PersonalDataWrap, PersonalDataBody, Form,DeleteBtn, ChangeBtn, SaveChange} from './personalDataStyled';
import ava from '../../assets/media/icon/avatar.svg';
import ServerSettings from "../../service/serverSettings";
import {connect} from "react-redux";
import {loginUser} from "../../actions";

class PersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: null
    }
  }

  componentDidMount() {
    const server = new ServerSettings();
    // это не совсем понятно зачем
    setTimeout(() => {
      this.file = React.createRef();
    }, 1000)

    // заменяем фото пользователя
    const photo = this.props.user.photo ? this.props.user.photo : ava;
    this.setState({imagePreviewUrl: server.getApi() + photo.slice(1)})
  }

  // изминения данных пользователя
  changeData = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';
    // дата рождения
    let date = `${e.target.year.value}-${e.target.month.value}-${e.target.day.value}`;
    // проверяем правильно ли введена дата
    if(isNaN(parseInt(e.target.year.value)) || isNaN(parseInt(e.target.month.value)) || isNaN(parseInt(e.target.day.value))) {
      date = null
    }
    const server = new ServerSettings();

    const data = new FormData();
    data.set("username", e.target.login.value);
    data.set("email", e.target.email.value);
    data.set("login", this.props.user.login);
    data.set("password", this.props.user.password);
    if(date) {
      data.set('birth_date', date)
    }
    // проверяем была ли изменина фотография
    let sendData = data;
    if(this.state.file) {
      data.set("photo", this.state.file);
      sendData = data;
    }

    await axios.put(`${server.getApi()}api/users/${this.props.user.id}/update/`, sendData)
      .then(res => {
        // получаем правильный путь новой фото
        axios.get(`${server.getApi()}api/users/${this.props.user.email}/`)
          .then(res => {
            // обновляем данные пользователя в сторе
            this.props.loginUser(res.data);
            this.props.closed();
          }).catch(error => console.log(error));
      }).catch(error => console.error(error));
  }

  // замена фото
  _handleImageChange(e) {
    e.preventDefault();
    // открываем чтение файлов
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    const {closed} = this.props;
    const date = this.props.user.birth_date ? this.props.user.birth_date.split('-') : ['', '', ''];
    
    return (
      <PersonalDataWrap>
        <PersonalDataBody>
          <img onClick={closed} className={'close'} src={close} alt="icon"/>
          <h2>Личные данные</h2>
          <Form onSubmit={(e) => this.changeData(e)}>
            <InputName user={this.props.user}/>
            <InputEmail user={this.props.user}/>
            <div className="dateBlock">
              <h3>Дата рождения</h3>
              <div className="dateSelect">
                <InputDay day={date[2]}/>
                <InputMonth month={date[1]}/>
                <InputYear year={date[0]}/>
              </div>
            </div>
            <div className="photoSection">
              <h3>Фотография</h3>
              <div className="photoWrap">
                <img src={this.state.imagePreviewUrl} alt="photo" className={'avatar'}/>
                <input
                  ref={this.file}
                  accept="image/*"
                  className={'hidden-input'}
                  id="contained-button-file"
                  name={'photo'}
                  onChange={(e) => this._handleImageChange(e)}
                  type={'file'}
                />
                <ChangeBtn htmlFor={'contained-button-file'}>Заменить</ChangeBtn>
                <DeleteBtn>Удалить</DeleteBtn>
              </div>
            </div>
            <SaveChange>Сохранить изменения</SaveChange>
          </Form>
        </PersonalDataBody>
      </PersonalDataWrap>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);