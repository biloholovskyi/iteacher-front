import axiosInstance from "../../service/iTeacherApi";

class ClassRoom {
  // проверяем существует ли в базе такой урок
  checkRoom = async (id) => {
    // получаем данные урока
    const response = await axiosInstance.get(`/classrooms/${id}/`)
      .catch(error => console.error(error));

    return response
  }
}

export default ClassRoom;