import axiosInstance from "./iTeacherApi";

class CoursesServices {
  getAllCourses = async () => {
    return await axiosInstance.get(`/courses/`)
      .then(res => {
        return res
      })
      .catch(error => console.error(error));
  }
}

export default CoursesServices;