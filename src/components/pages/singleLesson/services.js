import axios from "axios";

import ServerSettings from "../../../service/serverSettings";

class ClassRoom {
  // проверяем существует ли в базе такой урок
  checkRoom = async (id) => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    // получаем данные урока
    const serverSettings = new ServerSettings();
    const response = await axios.get(`${serverSettings.getApi()}api/classrooms/${id}/`)
      .catch(error => console.error(error));

    return response
  }
}

export default ClassRoom;