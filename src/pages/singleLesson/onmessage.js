const onMessage = (e, socket, user, setTopAlertText, teacherModalConnect, setDataInState, setSection, setActiveWordInRedux, setActiveEmptyInRedux, updateChatData) => {
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

            socket.send(JSON.stringify({
              'message': {
                type: 're_connect',
                user: {
                  type: user.type,
                  id: user.id
                }
              }
            }))
          }
        } else {
          // если подключенный пользователь студент

          // если новый пользователь преподаватель
          if (data.message.user.type === 'teacher') {
            // убираем уведомления о том что преподаватель не подключен
            teacherModalConnect(false);

            socket.send(JSON.stringify({
              'message': {
                type: 're_connect',
                user: {
                  type: user.type,
                  id: user.id
                }
              }
            }))
          }
        }
        break

      case 're_connect':
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

      case 'active_word':
        setActiveWordInRedux(data.message.data)
        break

      case 'active_empty':
        setActiveEmptyInRedux(data.message.data)
        break

      case 'chat_message':
        updateChatData(data.message.data)
        break
    }
  }
}

export {onMessage}