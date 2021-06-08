import React, {useEffect, useState} from "react";
import axios from "axios";

import AdminModalTask from "../../adminModalTask/adminModalTask";
import MainInput from "../../../inputs/mainInput/mainInput";
import Question from "../tf/question/question";
import {Line} from "../../adminModalTask/style";

import * as Style from '../tf/style';

import plus from '../../../../assets/media/icon/plus-blue.svg'
import MainButton from "../../../buttons/mainButton/mainButton";

import ServerSettings from "../../../../service/serverSettings";

const Connect = ({
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
  // слова
  const [words, setWords] = useState([])

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
      const data = JSON.parse(currentTaskData.list_connects)
      setWords(data);
    } else {
      setIndexSection(currentSectionIndex);
      setIndexLesson(currentLessonIndex);
      setIndexTask(currentTaskIndex);
      if (words.length === 0) {
        setWords([
          {
            start: '',
            end: 'True'
          }
        ])
      }
    }
  }, [])

  const connects = words.map((data, key) => {
    return <Question key={key} connect data={data}/>
  })

  // добавление еще одной связи
  const addMore = () => {
    setWords([...words, {start: '', end: ''}])
  }

  // создание задания
  const createTask = async (e) => {
    e.preventDefault();
    const start = e.target.start;
    const end = e.target.end;

    // массив связей
    let listConnects = [];
    // создаем массив объуктов утверждений
    let counter = 0;
    start.forEach(words => {
      listConnects.push({start: words.value, end: end[counter].value});
      counter++;
    })

    // создаем объект задания
    const task = {
      section: section.id,
      title: e.target.title.value,
      list_connects: JSON.stringify(listConnects),
      task_type: 'CONNECT',
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
    const start = e.target.start;
    const end = e.target.end;

    // массив связей
    let listConnects = [];
    // создаем массив объуктов утверждений
    let counter = 0;
    start.forEach(words => {
      listConnects.push({start: words.value, end: end[counter].value});
      counter++;
    })

    // создаем объект задания
    const task = {
      ...taskData,
      title: e.target.title.value,
      list_connects: JSON.stringify(listConnects),
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
      title={'Связи'}
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

        <Style.QuestionsBlock>
          <h3 className="title">Слова для связей</h3>

          {connects}

          <Style.AddMore onClick={addMore}>
            <img src={plus} alt="plus"/>
            <p>Добавить утверждение</p>
          </Style.AddMore>
        </Style.QuestionsBlock>

        <MainButton
          func={() => console.log('...')}
          text={type === 'add' ? 'Добавить' : 'Сохранить'}
          width={118}
          type={'submit'}
        />
      </Style.Form>
      {/*children*/}
    </AdminModalTask>
  )
}

export default Connect;