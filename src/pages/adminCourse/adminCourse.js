import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import axios from "axios";

import InfoMenu from "./infoMenu/infoMenu";
import Plan from '../../components/plan/plan';

import PopupAddLesson from "../../components/popupsAdmin/popupLesson/addLesson/popupAddLesson";
import {PopupEditLesson} from "../../components/popupsAdmin/popupLesson/editLesson/popupEditLesson";
import PopupChangeCover from "../../components/popupsAdmin/popupChangeCover/popupChangeCover";
import PopupEditCourse from "../../components/popupsAdmin/popupCourse/editCourse/popupEditCourse";

import {CourseWrap} from './adminCourseStyled';

import {setTypeAdminHead, setTemplate, getAllTemplates} from "../../actions";

import ServerSettings from "../../service/serverSettings";
const server = new ServerSettings()

// получения данных курса, похоже Андрея, нужно проверить нужно ли это нам
export async function getCourseData(token, list, id, setID, setData, reject) {

  try {

    //TODO await axios post -> API (+ user token check) -> response
    let courseInfo;

    list.forEach(course => {

      if (course.id === id) {
        courseInfo = course
      }

    })

    const response = {

      success: true,
      courseInfo: courseInfo

    }

    if (response.success && response.courseInfo !== null) {

      console.log(`Курс #${id} - ${response.courseInfo.name}`);
      console.log(`Данные для курса:`, response.courseInfo);
      setID([id, ""]);
      setData(response.courseInfo);

    } else {

      if (!response.success) {
        throw(response.error);
      }

      console.warn(`Курс #${id} в базе данных не найден, перенаправляю на страницу списка курсов`);
      reject();

    }

  } catch (err) {

    console.error(err);

  }

}

const AdminCourse = (props) => {
  // показ модалки, скорее всего модалки на редактирования курса
  const [showPopupCover, setShowPopupCover] = useState(false);
  // тут тожа модалка на редактирования курса, не совсем понятно что где
  const [showPopupEditCourse, setShowPopupEditCourse] = useState(false);
  // модалка добавления урока
  const [showPopupAddLesson, setShowPopupAddLesson] = useState(false);
  // модалка редактирования урока, хотя не совсем понятно что это за модалка
  const [showPopupEditLesson, setShowPopupEditLesson] = useState(false);

  // установка данных курса, это похоже уже делал я
  const [templateData, setTemplateData] = useState({});

  // тут я уже рефакторил, это рендер данных по шаблону
  useEffect(() => {
    // проверяем есть ли шаблоны в списке
    if(!props.templates || props.templates.length < 1) {
      getTemplates().catch(error => console.error(error))
    }

    // находим нужный нам шаблон из общего списка
    console.log(props)
    const data = props.templates.find(t => t.id.toString() === props.templateID.toString());
    // передаем данные которые мы получили
    setTemplateData(data);
    // записываем данные шаблона в редакс
    props.setTemplate(data);

    // передаем данные для переключения шапки
    // проверка нужна что бы не передавать пустые данные в шапку и тем самым ломая ее
    if (data) {
      props.setTypeAdminHead('course', data.name)
    }

    // эта проверка нужна на случай если у нас еще не определился id или по какой либо причине нету данных
    // нужно более адекватным способом переделать это
    if (!data) {
      setTemplateData({
        level: '',
        price: '',
        // обложка курса по дефолту
        background: "linear-gradient(60.64deg, #0093E9 0%, #80D0C7 100%)"
      })
    }
  }, [props])

  // грузим данные шаблонов
  const getTemplates = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    await axios.get(`${server.getApi()}api/template/`)
      .then(res => {
        props.getAllTemplates(res.data);
        setTemplateData(res.data)
      }).catch(error => console.log(error));
  }


  const {level, price, background, lesson, background_image, bg_type} = templateData;

  // количество уроков
  let count_lessons = 0;
  // проверяем получили ли уже данные
  if(JSON.stringify(templateData) !== JSON.stringify({}) && templateData.lesson) {
    count_lessons = templateData.lesson.length;
  }


  const dataSection = [
    [
      'Длительность курса',
      `${count_lessons}${(count_lessons === 0 || count_lessons >= 5) ? ' уроков' : count_lessons === 1 ? ' урок' : ' урока'}`
    ],
    ['Длительность урока', '60 минут'],
    ['Уровень', level]
  ];

  return (
    <CourseWrap>
      {showPopupCover
      && <PopupChangeCover
        close={() => setShowPopupCover(false)}
      />
      }

      {showPopupEditCourse
      && <PopupEditCourse
        id={props.templateID}
        previous={templateData}
        close={() => setShowPopupEditCourse(false)}
      />
      }

      {/*модалка добавления урока*/}
      {showPopupAddLesson
      && <PopupAddLesson
        // нужно передать id шаблона
        course={templateData.id}
        // несовсем понятно зачем в урок передавать список всех уроков шаблона
        // возможно это нужно для драга
        lessonsList={lesson}
        // это либо для нумерации либо для драга
        //lessonsCounter={lesson.length}
        // закрытия модалки
        close={() => setShowPopupAddLesson(false)}
      />
      }

      {showPopupEditLesson
      && <PopupEditLesson
        // это похоже id урока
        id={showPopupEditLesson}
        // не совсем понятно зачем это
        num={1}
        course={templateData.id}
        close={() => setShowPopupEditLesson(false)}
      />
      }

      <div className="container">

        <div className="course__wrap">

          <div className="course__col">

            <InfoMenu
              type="info"
              title="Информация"
              icon="PenSvg"
              dataSection={dataSection}
              func={() => setShowPopupEditCourse(true)}
            />

            <InfoMenu
            func={() => setShowPopupCover(true)}
            type="cover"
            title="Обложка"
            image={background}
            bgImage={background_image}
            bgType={bg_type}
          />

          </div>

          <Plan
            type="course"
            title="План занятий"
            textButton="Добавить занятие"
            // список уроков
            list={templateData.lesson}
            // тут наверное тоже нужно будет переделывать
            add={() => setShowPopupAddLesson(true)}
            // изминения урока
            edit={setShowPopupEditLesson}
            // не совсем понятно зачепм это нужно передавать
            selectedCourseID={props.templateID}
          />
        </div>
      </div>
    </CourseWrap>

  )

};

const mapStateToProps = (state) => {
  return {
    templates: state.templates,
  }
};

const mapDispatchToProps = {
  setTypeAdminHead,
  setTemplate,
  getAllTemplates
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCourse);