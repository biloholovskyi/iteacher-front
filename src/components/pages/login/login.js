import React, {useState, useEffect} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

import {loginUser} from "../../../actions";

import LoginTabs from "./loginTabs/loginTabs";

import * as Style from './styled';

import logo from '../../../assets/media/icon/logo.svg';

import ServerSettings from "../../../service/serverSettings";

const Login = () => {
  const [validation, setValidation] = useState(false)

  // логин пользователя
  const onLogin = async (e) => {
    e.preventDefault();
    // получаем с сервера пользователя
    const login = e.target.login.value; // email пользователя
    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/users/${login}/`, {
      validateStatus: (status) => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
    })
      .then(res => {
        console.log(res);
        // проверяем найденный ли пользователь
        if (res.data.toString().includes('DoesNotExist')) {
          setValidation(true)
        } else {
          // проверяем на всякий случай тип ответа
          if (typeof res.data == "object") {
            // значит пользователь найден
            // проверяем пароль
            if (res.data.password === e.target.password.value) {
              this.props.loginUser(res.data);
              // this.createToken(res.data);
            } else {
              setValidation(true)
            }
          } else {
            // значит ошибка на сервере
            alert('Some error on server');
          }
        }
      }).catch(error => {
        try {
          // тип ошибки
          const typeError = error.message.data;
          // если пользователь не найден
          if (typeError.includes('DoesNotExist')) {
            alert('wrong password or login');
          } else {
            // если другая ошибка
            alert('Ошибка на сервере')
          }
        } catch {
          console.log('precess');
        }
      });
  }

  return (
    <Style.WithOutHeaderContainer>
      <div className={'container'}>
        <Style.SignInModalWrapp>
          <Style.SignInModal>
            <img src={logo} alt="image" className={'logo'}/>
            <h4>Добро пожаловать 👋</h4>
            <Style.TabsBody>
              <LoginTabs validation={validation} onLogin={onLogin}/>
            </Style.TabsBody>
          </Style.SignInModal>
          <div className={'registration_block'}>Еще не зарегистрированы? <NavLink
            to='/registration'>Зарегистрироваться</NavLink></div>
        </Style.SignInModalWrapp>
      </div>
    </Style.WithOutHeaderContainer>
  )
}

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tabStatus: 'signIn',
//       validation: false,
//     }
//   }
//
//   componentDidMount() {
//
//   }
//
//   // логин пользователя
//   onLogin = async (e) => {
//     e.preventDefault();
//     // получаем с сервера пользователя
//     const login = e.target.login.value; // email пользователя
//     const server = new ServerSettings();
//     //if(login.length === 0) { this.setState({ disabled: true }); } else {this.setState({ disabled: false });}
//     await axios.get(`${server.getApi()}api/users/${login}/`, {
//       validateStatus: (status) => {
//         return true; // I'm always returning true, you may want to do it depending on the status received
//       },
//     })
//       .then(res => {
//         // проверяем найденный ли пользователь
//         if (res.data.toString().includes('DoesNotExist')) {
//           //alert('wrong password or login');
//           this.validatePassword();
//         } else {
//           // проверяем на всякий случай тип ответа
//           if (typeof res.data == "object") {
//             // значит пользователь найден
//             // проверяем пароль
//             if (res.data.password === e.target.password.value) {
//               this.props.loginUser(res.data);
//               this.createToken(res.data);
//             } else {
//               //alert('wrong password or login');
//               this.validatePassword();
//             }
//           } else {
//             // значит ошибка на сервере
//             alert('wrong password or login');
//           }
//         }
//       }).catch(error => {
//         try {
//           // тип ошибки
//           const typeError = error.message.data;
//           // если пользователь не найден
//           if (typeError.includes('DoesNotExist')) {
//             alert('wrong password or login');
//           } else {
//             // если другая ошибка
//             alert('Ошибка на сервере')
//           }
//         } catch {
//           console.log('precess');
//         }
//       });
//   }
//
//   createToken = (user) => {
//     // в стор добавляем только ид польвателя / либо емейл
//     const value = JSON.stringify({email: user.email});
//
//     localStorage.setItem('iteacher_login', value);
//   }
//
//   // change active tab
//   changeTab = (e, tab) => {
//     this.setState({tabStatus: tab});
//     document.querySelector('.tabs-active').classList.remove('tabs-active');
//     e.target.classList.add('tabs-active');
//   };
//
//   // проверяем валидацю
//   validatePassword = () => {
//     this.setState(() => {
//       return {
//         ...this.state,
//         validation: true
//       }
//     })
//   }
//
//   render() {
//     return (
//       <Style.WithOutHeaderContainer>
//         <div className={'container'}>
//           <Style.SignInModalWrapp>
//             <Style.SignInModal>
//               <img src={logo} alt="image" className={'logo'}/>
//               <h4>Добро пожаловать 👋</h4>
//               <Style.TabsBody>
//                 <LoginTabs validation={this.state.validation} onLogin={this.onLogin} />
//               </Style.TabsBody>
//             </Style.SignInModal>
//             <div className={'registration_block'}>Еще не зарегистрированы? <NavLink to='/registration'>Зарегистрироваться</NavLink></div>
//           </Style.SignInModalWrapp>
//         </div>
//       </Style.WithOutHeaderContainer>
//     )
//   }
// }

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);