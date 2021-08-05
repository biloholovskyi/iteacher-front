import React, {Component} from 'react';
import {connect} from "react-redux";

import {loginUser} from "../../actions";

import StudentItem from "./studentItem/studentItem";
import Note from "./note/Note";
import StudentEmpty from "./studentEmpty/studentEmpy";
import MainButton from "../../components/buttons/mainButton/mainButton";
import AddNewStudent from "./addNewStudent/addNewStudent";

import {
  Caption,
  CoursesList,
  StudentsWrap,
  DropDown,
  Input,
  SearchBlock,
  SortBlock,
  Title,
  FilterBtn
} from "./styled";

import search from "../../assets/media/icon/search.svg";
import arrow from "../../assets/media/icon/arrow.svg";
import sort from "../../assets/media/icon/sort.svg";
import filter from "../../assets/media/icon/filter.svg";

import axiosInstance from "../../service/iTeacherApi";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: false,
      students: [],
      courses: [],
      activeLink: null,
      idStudent: null,
      data: [], // notations
      modalAddStudent: false
    };
    //document.body.addEventListener('click', (e) => this.closeBody(e));
  }

  componentDidMount() {
    this.getListStudents();
    this.updateCourses();
    // this.setNotationsToState();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps && JSON.stringify(prevProps.user) !== JSON.stringify(this.props.user)) {
      this.getListStudents();
      this.updateCourses();
    }

    if (prevProps && JSON.stringify(prevProps.notations) !== JSON.stringify(this.props.notations)) {
      // this.setNotationsToState();
    }
  }

  // передаем кусры из стора
  updateCourses = () => {
    if (this.props.user) {
      this.setState({courses: this.props.user.courses});
    }
  }

  // получаем список студентов
  getListStudents = async () => {
    if (!this.props.user) {
      return
    }
    //
    // // получаем список курсов
    // const courses = this.props.user.courses;
    // // перебираем курсы и выделяем уникальные id
    // let students = [];
    // for (let course of courses) {
    //   if (!students.includes(course.student) && course.student) {
    //     students.push(course.student)
    //   }
    // }
    //
    // // получаем данные студентов
    // let studentsData = []
    //
    // for (const id of students) {
    //   axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    //   axios.defaults.xsrfCookieName = 'csrftoken';
    //
    //   const server = new ServerSettings();
    //   await axios.get(`${server.getApi()}api/users/${id}/`)
    //     .then(res => {
    //       studentsData.push(res.data);
    //     })
    //     .catch(error => console.error(error))
    // }

    this.setState({students: JSON.parse(this.props.user.studentList)});
  }

  setNotationsToState = (id) => {
    if (!this.props.notations || this.props.notations.length < 1) {
      return
    }

    return this._filterNotations(this.props.notations, id);
  }

  _filterNotations = (notations, id) => {
    // teacher
    const teacherNotations = notations.filter(note => note.teacher.toString() === this.props.user.id.toString());

    // students
    return teacherNotations.filter(note => note.student.toString() === id.toString());
  }

  _filterStudents = (students) => {
    let needStudents = [];
    students.forEach(student => {
      this.props.user.courses.forEach(id => {
        if (student.courses[0] === id) {
          const course = this.props.courses.find(c => c.id.toString() === id.toString());
          const newStudent = {
            ...student,
            course
          }
          needStudents.push(newStudent);
        }
      })
    })

    return needStudents;
  }

// close modal
  closeModal = () => {
    this.setState(() => {
      return {
        ...this.state,
        notes: false
      }
    });
  }

  // open notes section
  openNote = (id) => {
    this.setState({
      idStudent: id,
      data: this.setNotationsToState(id),
      notes: true
    });
  }

  // close modal on click body
  // closeBody = (e) => {
  //   const block = document.querySelector('.note');
  //   if(block === null) {
  //     return
  //   }
  //   const button = document.querySelectorAll('.openNotes');
  //   const status = e.target === block || block.contains(e.target);
  //   const statusModal = e.target === button;
  //   if (!status && !statusModal) {
  //     this.setState(() => {
  //       return {
  //         ...this.state,
  //         notes: false
  //       }
  //     });
  //   }
  // }

  // создание учениника
  createNewStudent = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    // проверяем есть ли пользователеь с таким емейлом уже
    await axiosInstance.get(`/users/${email.toLowerCase()}/`)
      .then(res => {
        // если есть проверяем тип пользователя
        if (res.data.type === 'student') {
          // если это ученик подключаем его к преподу
          const studentListParse = this.props.user.studentList && JSON.parse(this.props.user.studentList);
          console.log(studentListParse);
          console.log(res.data);
          if (studentListParse && studentListParse.find(st => parseInt(st.id) === parseInt(res.data.id))) {
            this.setState({modalAddStudent: false})
          } else {
            if (!studentListParse) {
              const newData = new FormData();
              newData.set("username", this.props.user.username);
              newData.set("email", this.props.user.email);
              newData.set("studentList", JSON.stringify([res.data]));

              axiosInstance.put(`/users/${this.props.user.id}/update/`, newData)
                .then((res) => {
                  // обновляем данные пользователя в сторе
                  axiosInstance.get(`/users/${this.props.user.id}/`, {
                    validateStatus: (status) => {
                      return true; // I'm always returning true, you may want to do it depending on the status received
                    },
                  })
                    .then(res => {
                      this.props.loginUser(res.data);
                      this.setState({modalAddStudent: false})
                    }).catch(error => {
                    console.error(error);
                  });
                })
                .catch(error => console.error(error))
            } else {
              const newData = new FormData();
              newData.set("username", this.props.user.username);
              newData.set("email", this.props.user.email);
              newData.set("studentList", JSON.stringify([...JSON.parse(this.props.user.studentList), res.data]));

              axiosInstance.put(`/users/${this.props.user.id}/update/`, newData)
                .then((res) => {
                  // обновляем данные пользователя в сторе
                  axiosInstance.get(`/users/${this.props.user.id}/`, {
                    validateStatus: (status) => {
                      return true; // I'm always returning true, you may want to do it depending on the status received
                    },
                  })
                    .then(res => {
                      this.props.loginUser(res.data);
                      this.setState({modalAddStudent: false})
                    }).catch(error => {
                    console.error(error);
                  });
                })
                .catch(error => console.error(error))
            }
          }
        } else {
          // если это не ученик
          alert('Этот пользователь не ученик')
        }
      })
      .catch(error => {
        console.error(error)
        // если нету пользователя создаем нового
        // создаем пароль
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0, n = charset.length; i < 8; ++i) {
          password += charset.charAt(Math.floor(Math.random() * n));
        }

        const data = new FormData();
        data.set('username', email.toLowerCase());
        data.set('email', email.toLowerCase());
        data.set('password', password);
        data.set('type', 'student')

        axiosInstance.post(`/users/`, data)
          .then(res => {
            // отправляем письмо
            axiosInstance.get(`/users/email/${res.data.id}/`)
              .catch(error => {
                console.error(error);
              });

            // если это ученик подключаем его к преподу
            const studentListParse = this.props.user.studentList && JSON.parse(this.props.user.studentList);

            if (studentListParse && studentListParse.find(st => parseInt(st.id) === parseInt(res.data.id))) {
              this.setState({modalAddStudent: false})
            } else {
              if(!studentListParse) {
                const newData = new FormData();
                newData.set("username", this.props.user.username);
                newData.set("email", this.props.user.email);
                newData.set("studentList", JSON.stringify([res.data]));
                
                axiosInstance.put(`/users/${this.props.user.id}/update/`, newData)
                  .then((res) => {
                    // обновляем данные пользователя в сторе
                    axiosInstance.get(`/users/${this.props.user.id}/`, {
                      validateStatus: (status) => {
                        return true; // I'm always returning true, you may want to do it depending on the status received
                      },
                    })
                      .then(res => {
                        this.props.loginUser(res.data);
                        this.setState({modalAddStudent: false})
                      }).catch(error => {
                      console.error(error);
                    });
                  })
              } else {
                const newData = new FormData();
                newData.set("username", this.props.user.username);
                newData.set("email", this.props.user.email);
                newData.set("studentList", JSON.stringify([...JSON.parse(this.props.user.studentList), res.data]));

                axiosInstance.put(`/users/${this.props.user.id}/update/`, newData)
                  .then((res) => {
                    // обновляем данные пользователя в сторе
                    axiosInstance.get(`/users/${this.props.user.id}/`, {
                      validateStatus: (status) => {
                        return true; // I'm always returning true, you may want to do it depending on the status received
                      },
                    })
                      .then(res => {
                        this.props.loginUser(res.data);
                        this.setState({modalAddStudent: false})
                      }).catch(error => {
                      console.error(error);
                    });
                  })
              }
            }
          }).catch(error => console.error(error));
      })
  }

  render() {
    const {students, courses} = this.state;
    console.log(students)

    // check if there are any courses . If there are no courses render EMPTY course page
    // if (!students || students.length === 0) return <StudentEmpty courses={courses}/>

    return (
      <StudentsWrap>
        {
          this.state.modalAddStudent &&
          <AddNewStudent add={this.createNewStudent} close={() => this.setState({modalAddStudent: false})}/>
        }

        <div className='container'>
          <Caption>
            <Title>Ученики</Title>

            <MainButton text={'Добавить ученика'} func={() => this.setState({modalAddStudent: true})}/>
            {/*<FilterBtn>*/}
            {/*  <img src={filter} alt="icon"/>*/}
            {/*</FilterBtn>*/}
          </Caption>
          <Caption>
            {/*<SearchBlock>*/}
            {/*  <Input>*/}
            {/*    <img src={search} alt="icon"/>*/}
            {/*    <input type="text" placeholder="Поиск"/>*/}
            {/*  </Input>*/}
            {/*  <DropDown>*/}
            {/*    <p>Курс</p>*/}
            {/*    <img src={arrow} alt="icon"/>*/}
            {/*  </DropDown>*/}
            {/*</SearchBlock>*/}
            {/*<SortBlock>*/}
            {/*  <img src={sort} alt="icon"/>*/}
            {/*  <p>Сортировать по</p>*/}
            {/*  <p><b>алфавиту</b></p>*/}
            {/*  <img src={arrow} alt="icon"/>*/}
            {/*</SortBlock>*/}
          </Caption>
          {/*ADD students LIST*/}
          <CoursesList>
            {
              students && students.map(student => {
                // получаем ближайшее события студента

                return (
                  <StudentItem
                    key={student.id}
                    data={student}
                    note={this.openNote}
                  />
                )
              })
            }
            {/*ADD NOTES BLOCK*/}
            {
              this.state.notes
                ? <Note
                  data={this.state.data}
                  closed={this.closeModal}
                />
                : null
            }
          </CoursesList>
        </div>
      </StudentsWrap>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
    courses: state.courses,
    user: state.user,
    notations: state.notations
  }
};

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);