import React, {useEffect, useState} from "react";
import axios from "axios";

import AdminModalTask from "../../adminModalTask/adminModalTask";
import MainInput from "../../../inputs/mainInput/mainInput";
import MainButton from "../../../buttons/mainButton/mainButton";
import {Line} from "../../adminModalTask/style";
import Question from "./question/question";

import * as Style from './style';

import plus from '../../../../assets/media/icon/plus-blue.svg'

import ServerSettings from "../../../../service/serverSettings";

const TF = ({
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
  // утверждения
  const [questions, setQuestions] = useState([])

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
      const data = JSON.parse(currentTaskData.list_tf_question)
      setQuestions(data);
    } else {
      setIndexSection(currentSectionIndex);
      setIndexLesson(currentLessonIndex);
      setIndexTask(currentTaskIndex);
      if (questions.length === 0) {
        setQuestions([
          {
            question: '',
            result: 'True'
          }
        ])
      }
    }
  }, [])

  const questionsRender = questions.map((question, key) => {
    return <Question data={question} key={key}/>
  })

  // добавление еще одного утверждения
  const addMore = () => {
    setQuestions([...questions, {question: '', result: 'True'}])
  }

  // создание задания
  const createTask = async (e) => {
    e.preventDefault();
    const questions = e.target.start;
    const results = e.target.result;

    // массив утверждений
    let listQuestions = [];
    // создаем массив объуктов утверждений
    let counter = 0;
    questions.forEach(question => {
      listQuestions.push({question: question.value, result: results[counter].value});
      counter++;
    })

    // создаем объект задания
    const task = {
      section: section.id,
      title: e.target.title.value,
      list_tf_question: JSON.stringify(listQuestions),
      task_type: 'TF',
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
    const questions = e.target.start;
    const results = e.target.result;

    // массив утверждений
    let listQuestions = [];
    // создаем массив объуктов утверждений
    let counter = 0;
    questions.forEach(question => {
      listQuestions.push({question: question.value, result: results[counter].value});
      counter++;
    })

    // создаем объект задания
    const task = {
      ...taskData,
      title: e.target.title.value,
      list_tf_question: JSON.stringify(listQuestions)
    }
    // обновляем текущую секцию
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
      title={'True or false'}
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
          <h3 className="title">Утверждения</h3>

          {questionsRender}

          <Style.AddMore onClick={addMore}>
            <img src={plus} alt="plus"/>
            <p>Добавить утрвеждение</p>
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

export default TF;