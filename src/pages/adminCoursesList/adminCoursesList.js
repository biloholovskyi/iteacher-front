import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";

import {setTypeAdminHead, getAllTemplates} from "../../actions";

import Button from "../../components/buttons/button/button";
import ItemCourse from "./itemCourse/itemCourse";
import PopupAddCourse from "../../components/popupsAdmin/popupCourse/addCourse/popupAddCourse";

import {
  CoursesListStyleWrap,
  Row1,
  Row2,
  TitleWrap,
  Title,
  ArrowDown,
  SortWrap,
  SortTitle,
  SortSelect,
} from './adminCoursesListStyled';

import axiosInstance from "../../service/iTeacherApi";


const AdminCoursesList = (props) => {
  const [templatesListData, setTemplatesListData] = useState([]);

  useEffect(() => {
    // если в редаксе пустой список шаблонов загружаем новый список
    if(!props.templates || props.templates.length < 1) {
      getTemplates().catch(error => console.error(error));
    } else {
      setTemplatesListData(props.templates)
    }
  }, [props.templates])

  const getTemplates = async () => {
    await axiosInstance.get(`/template/`)
      .then(res => {
        console.log(res.data)
        getAllTemplates(res.data);
        setTemplatesListData(res.data)
      }).catch(error => console.log(error));
  }

  // заменна данных в шапке
  useEffect(() => {
    props.setTypeAdminHead('default', '', null);
  })

  // открытияе модалки для создания / редактирования курса
  const [showPopupCreate, setShowPopupCreate] = useState(false);
  // // установка типа сортировки
  const [sort, setSort] = useState('price');

  // сортировка, ее нужно переделать или починить
  useEffect(() => {
    // sort list
    switch (sort) {

      case 'date':
        sortByDate();
        break;

      case 'popularity':
        sortByPopulatity();
        break;

      case 'price':
        sortByPrice();
        break;

      default:
        break;

    }

  }, [sort]);


  function sortByDate() {

    const updated = [...props.templates].sort((a, b) => {

      const _a = parseInt(Date.parse(new Date(a.dateOfCreate.replace('.', '-'))));
      const _b = parseInt(Date.parse(new Date(b.dateOfCreate.replace('.', '-'))));

      if (_a < _b) return -1;
      if (_a > _b) return 1;
      return 0;

    });

    // props.getCoursesList(updated);

  }

  function sortByPopulatity() {

    const updated = [...props.templates].sort((a, b) => {

      if (parseInt(a.counter) > parseInt(b.counter)) return -1;
      if (parseInt(a.counter) < parseInt(b.counter)) return 1;
      return 0;

    });

    // props.getCoursesList(updated);

  }

  function sortByPrice() {

    const updated = [...props.templates].sort((a, b) => {

      if (parseInt(a.price) < parseInt(b.price)) return -1;
      if (parseInt(a.price) > parseInt(b.price)) return 1;
      return 0;

    });

    // props.getCoursesList(updated);

  }

  return (
    <CoursesListStyleWrap>
      <div className="container">

        {
          showPopupCreate
          && <PopupAddCourse close={() => setShowPopupCreate(false)}/>
        }
        <Row1>
          <TitleWrap>
            <Title>Курсы</Title>
            <ArrowDown/>
          </TitleWrap>
          <SortWrap>
            <SortTitle>Сортировать по</SortTitle>
            {/*<SortSelect onChange={(e) => setSort(e.target.value)} value={sort} name="sort-course">*/}
            {/*позже нужно будет включить сортировку*/}
            <SortSelect value={'date'} name="sort-course" readOnly={true}>
              <option className="sort__option" value="date">Дате создания</option>
              <option className="sort__option" value="popularity">Популярности</option>
              <option className="sort__option" value="price">Cтоимости</option>
            </SortSelect>
          </SortWrap>

          <Button
            type="add"
            text="Создать курс"
            func={() => setShowPopupCreate(true)}
          />

        </Row1>
        <Row2>
          {templatesListData.reverse().map((course, k) =>
            <ItemCourse
              key={k}
              course={course}
            />
          )}
        </Row2>
      </div>
    </CoursesListStyleWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    templates: state.templates
  }
};

const mapDispatchToProps = {
  setTypeAdminHead,
  getAllTemplates
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCoursesList);