import React, {useState, useEffect} from "react";
import axios from "axios";

import AdminModalTask from "../../../adminModalTask/adminModalTask";
import MainInput from "../../../../inputs/mainInput/mainInput";
import MainButton from "../../../../buttons/mainButton/mainButton";

import ColumnBlock from "./columnBlock/columnBlock";

import {Line} from "../../../adminModalTask/style";

import * as Style from './style';

import plus from '../../../../../assets/media/icon/plus-blue.svg'

import ServerSettings from "../../../../../service/serverSettings";

const WordColl = ({
                    edit,
                    back,
                    close,
                    section,
                    setActiveSection,
                    template,
                    setTemplate,
                    allTemplates,
                    setAllTemplate,
                    lesson,
                    update
                  }) => {
  // добавление или обновление
  const [type, setType] = useState('add');
  // для редактирования
  const [taskData, setTaskData] = useState({});
  const [indexLesson, setIndexLesson] = useState(0);
  const [indexSection, setIndexSection] = useState(0);
  const [indexTask, setIndexTask] = useState(0);
  // добавление еще одной колонки
  const [column, setColumn] = useState([])

  // добавление или обновление
  useEffect(() => {
    // Передаем старрые значения
    const currentLessonIndex = template.lesson.findIndex(l => parseInt(l.id) === parseInt(lesson));
    const currentSectionIndex = template.lesson[currentLessonIndex].sections.findIndex(s => parseInt(s.id) === parseInt(section.id));
    const currentTaskIndex = template.lesson[currentLessonIndex].sections[currentSectionIndex].tasks.findIndex(task => parseInt(task.id) === parseInt(edit));
    const currentTaskData = template.lesson[currentLessonIndex].sections[currentSectionIndex].tasks[currentTaskIndex];
    if (typeof edit === 'number') {
      setType(edit);
      setTaskData(currentTaskData);
      setIndexSection(currentSectionIndex);
      setIndexLesson(currentLessonIndex);
      setIndexTask(currentTaskIndex);

      // для рендера старый данных
      const data = JSON.parse(currentTaskData.list_column)
      setColumn(data);
    } else {
      setIndexSection(currentSectionIndex);
      setIndexLesson(currentLessonIndex);
      setIndexTask(currentTaskIndex);
      if (column.length === 0) {
        setColumn([
          {
            name: '',
            words: ''
          }
        ])
      }
    }
  }, [])

  const columnRender = column.map((col, key) => {
    return <ColumnBlock key={key} col={col}/>
  })

  // добавление еще одной колонки
  const addMoreColumn = () => {
    setColumn([...column, {name: '', words: ''}])
  }

  // создание задания
  const createTask = async (e) => {
    e.preventDefault();
    const columns = e.target.name_column;
    const words = e.target.words_column;
    // массив колонок
    let listColumns = [];
    // создаем массив объектов колонок
    let counter = 0;
    columns.forEach(col => {
      // название колонки
      const name = col.value;
      // слова в колонке
      const wordArray = words[counter].value.split(' ');
      counter++;
      listColumns.push({name, words: wordArray});
    })

    // создаем объект задания
    const task = {
      section: section.id,
      title: e.target.title.value,
      list_column: JSON.stringify(listColumns),
      task_type: 'LIST_WORD_COLL',
    }

    // отправляем его на сервер
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const serverSettings = new ServerSettings();
    await axios.post(`${serverSettings.getApi()}api/tasks/`, task)
      .then(res => {
        // обновляем данные выбранной секции
        update(res.data, indexLesson, indexSection);
        close();
      })
      .catch(error => console.error(error));
  }

  // изминения задания
  const editTask = async (e) => {
    e.preventDefault();
    const columns = e.target.name_column;
    const words = e.target.words_column;
    // массив колонок
    let listColumns = [];
    // создаем массив объектов колонок
    let counter = 0;
    columns.forEach(col => {
      // название колонки
      const name = col.value;
      // слова в колонке
      const wordArray = words[counter].value.split(' ');
      counter++;
      listColumns.push({name, words: wordArray});
    })

    // создаем объект задания
    const task = {
      ...taskData,
      title: e.target.title.value,
      list_column: JSON.stringify(listColumns),
    }

    update(task, indexLesson, indexSection, true, indexTask);

    // обновляем сервер
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const serverSettings = new ServerSettings();
    await axios.put(`${serverSettings.getApi()}api/tasks/${taskData.id}/update/`, task)
      .then(res => {
        close()
      })
      .catch(error => console.error(error));
  }

  return (
    <AdminModalTask
      type={type}
      back={back}
      title={'Слова по колонкам'}
      close={close}
    >
      {/*children*/}

      <Style.Form
        onSubmit={(e) => {
          type === 'add' ? createTask(e) : editTask(e)
        }}
      >
        {
          type === 'add'
            ? (
              <MainInput
                type={'text'}
                label={'Условия упражнения'}
                name={'title'}
                required={true}
              />
            )
            : (
              <MainInput
                type={'text'}
                label={'Условия упражнения'}
                name={'title'}
                required={true}
                defaultValue={taskData.title}
              />
            )
        }

        <Line style={{marginTop: 9}}/>

        {columnRender}

        <Style.AddColumn onClick={addMoreColumn} type={'button'}>
          <img src={plus} alt="+"/>
          <p>Добавить колонку</p>
        </Style.AddColumn>

        <MainButton
          func={() => console.log('click')}
          text={type === 'add' ? 'Добавить' : 'Сохранить'}
          width={118}
          type={'submit'}
        />
      </Style.Form>

      {/*children*/}
    </AdminModalTask>
  )
}

export default WordColl;