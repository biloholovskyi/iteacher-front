import React, {useEffect, useState} from "react";

import AdminModalTask from "../../adminModalTask/adminModalTask";
import MainInput from "../../../inputs/mainInput/mainInput";
import MainButton from "../../../buttons/mainButton/mainButton";
import SimpleTextArea from "../../../inputs/simpleTextArea/simpleTextArea";

import * as Style from "../sentenceOfWords/style";
import {Form} from '../tf/style'

import axiosInstance from "../../../../service/iTeacherApi";

const TransferWords = ({
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
    } else {
      setIndexSection(currentSectionIndex);
      setIndexLesson(currentLessonIndex);
      setIndexTask(currentTaskIndex);
    }
  }, [])

  // создание задания
  const createTask = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;

    // создаем объект задания
    const task = {
      section: section.id,
      title: e.target.title.value,
      desc: text,
      task_type: 'TRANSFER_WORDS',
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
    const text = e.target.text.value;

    // создаем объект задания
    const task = {
      ...taskData,
      title: e.target.title.value,
      desc: text
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
      title={'Перенести слова'}
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

        <Style.TextBlock>
          <div className="title">Текст задания</div>
          <div className="desc">Напишите текст. Слова и фразы, которые нужно вставить из рамочки, заключите в квадратные
            скобки. В конце каждого предложения ставьте точку или запятую.
          </div>
        </Style.TextBlock>

        {
          type === 'add'
            ? (
              <SimpleTextArea
                name={'text'}
                required={true}
                placeholder={'Пример: I like [walking] in the park in the morning.'}
              />
            )
            : (
              <SimpleTextArea
                name={'text'}
                required={true}
                placeholder={'Пример: I like [walking] in the park in the morning.'}
                defaultValue={taskData.desc}
              />
            )
        }

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

export default TransferWords;