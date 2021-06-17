import ServerSettings from "./serverSettings";
import axios from "axios";
const api = new ServerSettings();

class CoursesServices {
  getAllCourses = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    return await axios.get(`${api.getApi()}api/courses/`)
      .then(res => {
        return res
      })
      .catch(error => console.error(error));
  }
}

export default CoursesServices;