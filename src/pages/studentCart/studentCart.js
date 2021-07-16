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
  const [studentData, setStudentData] = useState(null)

  const [tableData, setTableData] = useState([])

  const [showStudentModal, setShowStudentModal] = useState(false)

  useEffect(() => {
    getDataUser().catch(error => {console.error(error)});
  }, [id])

  useEffect(() => {
    updateTableData().catch();
  }, [studentData, id, showStudentModal]);

  // обновляем данные студента для таблицы
  const updateTableData = async () => {
    if(!studentData) {return}

    const dataArray = [];

    if(studentData.city) {dataArray.push({name: 'Город', value: studentData.city})}
    if(studentData.phone) {dataArray.push({name: 'Телефон', value: studentData.phone})}
    if(studentData.email) {dataArray.push({name: 'Почта', value: studentData.email})}

    setTableData(dataArray)
  }


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
            table_content: tableData,
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
        <Tabs id={id}/>
      </div>

      {
        showStudentModal && <StudentModal update={getDataUser} data={studentData} close={() => setShowStudentModal(false)}/>
      }
    </Style.Wrapper>
  )
}

export default StudentCart