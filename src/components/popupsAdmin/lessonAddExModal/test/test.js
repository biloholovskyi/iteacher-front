import React, {useEffect, useState} from "react";

import Checkbox from './checkboxInput';
import AdminModalTask from "../../adminModalTask/adminModalTask";
import MainInput from "../../../inputs/mainInput/mainInput";
import {Form} from "../tf/style";
import {Line} from "../../adminModalTask/style";
import MainButton from "../../../buttons/mainButton/mainButton";

import {ToggleBlock, CheckBoxWrapper, CheckBoxLabel, CheckBox, MainBtnWrap, Answers} from './styled';

import plus from "../../../../assets/media/icon/add.svg";

import axiosInstance from "../../../../service/iTeacherApi";

const TestModal = ({
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
  // ответы
  const [answers, setAnswers] = useState([])

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
      const data = JSON.parse(currentTaskData.answers)
      setAnswers(data);
    } else {
      setIndexSection(currentSectionIndex);
      setIndexLesson(currentLessonIndex);
      setIndexTask(currentTaskIndex);
      if (answers.length === 0) {
        setAnswers([
          {
            answer: '',
            result: 'False'
          }
        ])
      }
    }
  }, [])

  // добавление еще одного ответа
  const addMore = () => {
    setAnswers([...answers, {answer: '', result: 'False'}])
  }

  const answersRender = answers.map((data, key) => {
    return <Checkbox data={data} key={key}/>
  })

  // создание задания
  const createTask = async (e) => {
    e.preventDefault();
    const results = e.target.status;
    const answers = e.target.answer;

    let answersData = [];

    let counter = 0;
    answers.forEach(answer => {
      answersData.push({answer: answer.value, results: results[counter].checked})
      counter++;
    })

    // создаем объект задания
    const task = {
      section: section.id,
      title: e.target.title.value,
      question: e.target.question.value,
      task_type: 'TEST',
      timer: e.target.timer.checked.toString(),
      answers: JSON.stringify(answersData)
    }

    await axiosInstance.post(`/tasks/`, task)
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
    const results = e.target.status;
    const answers = e.target.answer;

    let answersData = [];

    let counter = 0;
    answers.forEach(answer => {
      answersData.push({answer: answer.value, results: results[counter].checked})
      counter++;
    })

    // создаем объект задания
    const task = {
      ...taskData,
      title: e.target.title.value,
      question: e.target.question.value,
      timer: e.target.timer.checked.toString(),
      answers: JSON.stringify(answersData)
    }
    // обновляем текущую секцию
    update(task, indexLesson, indexSection, true, indexTask);

    await axiosInstance.put(`/tasks/${taskData.id}/update/`, task)
      .then(res => {
        close()
      })
      .catch(error => console.error(error));
  }

  return (
    <AdminModalTask
      type={type}
      back={back}
      title={'Тест'}
      close={close}
    >
      {/*children*/}
      <Form
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

        <Line/>

        <ToggleBlock>
          <h4>Таймер</h4>

          <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" name={'timer'}/>
            <CheckBoxLabel htmlFor="checkbox"/>
          </CheckBoxWrapper>
        </ToggleBlock>

        {
          type === 'add'
            ? (
              <MainInput
                type={'text'}
                label={'Вопрос'}
                name={'question'}
                required={true}
              />
            )
            : (
              <MainInput
                type={'text'}
                label={'Вопрос'}
                name={'question'}
                required={true}
                defaultValue={taskData.question}
              />
            )
        }

        <Answers>
          <h4>Ответы</h4>
          <div className="answers_block">
            {answersRender}
          </div>

          <MainBtnWrap type={'button'} onClick={addMore}>
            <img src={plus} alt="icon"/>
            Добавить ответ
          </MainBtnWrap>

        </Answers>

        <MainButton
          func={() => console.log('...')}
          text={type === 'add' ? 'Добавить' : 'Сохранить'}
          width={118}
          type={'submit'}
        />
      </Form>
      {/*children*/}
    </AdminModalTask>
  )
}

export default TestModal;