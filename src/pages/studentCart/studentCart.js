import React, {useState, useEffect} from "react";
import axios from "axios";

import UserAvatar from "./userAvatar/userAvatar";
import InfoBlock from "../../components/infoBlock/infoBlock";
import Tabs from "./tabs/tabs";
import StudentModal from "./studentModal/studentModal";

import * as Style from './styled'

import pan from './media/pan.svg'

import ServerSettings from "../../service/serverSettings";

const server = new ServerSettings();

const StudentCart = ({id}) => {
  const [studentData, setStudentData] = useState({
      email: '',
      name: ''
  })

  const [showStudentModal, setShowStudentModal] = useState(false)

  useEffect(() => {
    getDataUser().catch(error => {console.error(error)});
  }, [id])

  const getDataUser = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    await axios.get(`${server.getApi()}api/users/${id}/`)
      .then(res => {
        setStudentData(res.data)
      }).catch(error => {console.error(error)});
  }

  return (
    <Style.Wrapper className={'container'}>
      <div className="left">
        <UserAvatar data={studentData}/>

        <InfoBlock
          data={{
            title: 'Информация',
            type: 'table',
            margin: 24,
            icon: pan,
            table_content: [
              {
                name: 'Город',
                value: 'Простоквашино'
              },
              {
                name: 'Телефон',
                value: '+38(066)474-22-81'
              },
              {
                name: 'Почта',
                value: studentData.email
              }
            ],
            button: {
              text: 'Показать больше информации',
              func: () => setShowStudentModal(true)
            }
          }}
        />

        <InfoBlock
          data={{
            title: 'Следующее занятие',
            type: 'double-text',
            margin: 24,
            double_text: {
              top: '#2 Finance',
              bot: '12 октября, 09:00 - 10:00'
            }
          }}
        />

        <InfoBlock
          data={{
            title: 'Домашние задания',
            type: 'single-text',
            single_text: 'Нет заданий на проверке'
          }}
        />
      </div>
      <div className="right">
        <Tabs/>
      </div>

      {
        showStudentModal && <StudentModal data={studentData} close={() => setShowStudentModal(false)}/>
      }
    </Style.Wrapper>
  )
}

export default StudentCart