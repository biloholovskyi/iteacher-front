const onMessage = (e, socket, user, setTopAlertText, teacherModalConnect, setDataInState, setSection) => {
  const data = JSON.parse(e.data);

  // проверяем сообщение от нас или нет
  if (parseInt(data.message.user.id) === parseInt(user.id)) {

  } else {
    // получаем тип сообщения
    // eslint-disable-next-line default-case
    switch (data.message.type) {
      case 'connect':
        // если подключенный пользователь преподаватель
        if (user.type === 'teacher') {
          // если новый пользователь ученик
          if (data.message.user.type === 'student') {
            // убираем уведомления о том что студент не подключен
            setTopAlertText(false)
          }
        } else {
          // если подключенный пользователь студент

          // если новый пользователь преподаватель
          if (data.message.user.type === 'teacher') {
            // убираем уведомления о том что преподаватель не подключен
            teacherModalConnect(false);
          }
        }

        socket.send(JSON.stringify({
          'message': {
            type: 'connect',
            user: {
              type: user.type,
              id: user.id
            }
          }
        }));
        break

      case 'disconnect':
        // если подключенный пользователь преподаватель
        if (user.type === 'teacher') {
          // если сообщение от ученика
          if (data.message.user.type === 'student') {
            // добавляем оповещение о том что студент отключился
            setTopAlertText('Ученик еще не вошел')
          }
        } else {
          // если подключенный пользователь студент
          // если данные от преподавателя
          if (data.message.user.type === 'teacher') {
            // добавляем оповещение что препод отключился
            teacherModalConnect(true)
          }
        }
        break

      case 'change_section':
        setSection(data.message.activeSection);
        break

      case 'update_task':
        setDataInState(data)
        break
    }
  }
  //
  // // получаем тип сообщения
  // // eslint-disable-next-line default-case
  // switch (data.message.type) {
  //   case 'connect':
  //     // проверяем чьи данные пришли
  //     if (parseInt(data.message.user.id) === parseInt(this.props.user.id)) {
  //       console.log('fake')
  //     } else {
  //       // если данные другого пользователя
  //       // если подключенный пользователь преподаватель
  //       if (this.props.user.type === 'teacher') {
  //         // если новый пользователь ученик
  //         if (data.message.user.type === 'student') {
  //           // убираем уведомления о том что студент не подключен
  //           this.props.setTopAlertText(false)
  //         }
  //       } else {
  //         // если подключенный пользователь студент
  //
  //         // если новый пользователь преподаватель
  //         if (data.message.user.type === 'teacher') {
  //           // убираем уведомления о том что преподаватель не подключен
  //           this.setState({waitStudentModal: false});
  //         }
  //
  //         // отправляем сообщения для препода что ученик уже подключен
  //         this.chatSocket.send(JSON.stringify({
  //           'message': {
  //             type: 're_connect',
  //             user: {
  //               type: this.props.user.type,
  //               id: this.props.user.id
  //             }
  //           }
  //         }));
  //       }
  //     }
  //     break
  //\


  //   case 're_connect':
  //     // проверяем от нас сообщение или нет
  //     if (parseInt(data.message.user.id) === parseInt(this.props.user.id)) {
  //       console.log('fake')
  //     } else {
  //       // если подключенный пользователь преподаватель
  //       if (this.props.user.type === 'teacher') {
  //         // если сообщение от ученика
  //         if (data.message.user.type === 'student') {
  //           // убераем оповещение о том что ученик не подключен
  //           this.props.setTopAlertText(false)
  //         }
  //       } else {
  //         // если подключенный пользователь студент
  //         // если сообщение от препода
  //         if (data.message.user.type === 'teacher') {
  //           // убераем оповещение о том что препод не подключен
  //           this.setState({waitStudentModal: false})
  //         }
  //       }
  //     }
  //     break
  //


  //   case 'disconnect':
  //     // проверяем сообщение от нас или нет
  //     if (parseInt(data.message.user.id) === parseInt(this.props.user.id)) {
  //       console.log('fake')
  //     } else {
  //       // если подключенный пользователь преподаватель
  //       if (this.props.user.type === 'teacher') {
  //         // если сообщение от ученика
  //         if (data.message.user.type === 'student') {
  //           // добавляем оповещение о том что студент отключился
  //           this.props.setTopAlertText('Ученик еще не вошел')
  //         }
  //       } else {
  //         // если подключенный пользователь студент
  //         // если данные от преподавателя
  //         if (data.message.user.type === 'teacher') {
  //           // добавляем оповещение что препод отключился
  //           this.setState({waitStudentModal: true})
  //         }
  //       }
  //     }
  //     break
  //


}

export {onMessage}