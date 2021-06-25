import React, {useEffect, useState} from "react";
import axios from "axios";

import AdminModalTask from "../../adminModalTask/adminModalTask";
import MainInput from "../../../inputs/mainInput/mainInput";
import MainButton from "../../../buttons/mainButton/mainButton";
import SimpleTextArea from "../../../inputs/simpleTextArea/simpleTextArea";

import * as Style from "../sentenceOfWords/style";
import {Form} from '../tf/style'

import ServerSettings from "../../../../service/serverSettings";

const Note = ({
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
      title: 'Заметка (видна только вам)',
      desc: text,
      task_type: 'NOTE',
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
    const text = e.target.text.value;

    // создаем объект задания
    const task = {
      ...taskData,
      title: e.target.title.value,
      desc: text
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
      title={'Заметка для учителя'}
      close={close}
    >
      {/*children*/}
      <Form
        onSubmit={(e) => {
          type === 'add' ? createTask(e) : editTask(e)
        }}
      >
        <Style.TextBlock>
          <div className="desc">Введите текст заметки (заметка будет видна только вам)</div>
        </Style.TextBlock>

        {
          type === 'add'
            ? (
              <SimpleTextArea
                name={'text'}
                required={true}
                placeholder={''}
              />
            )
            : (
              <SimpleTextArea
                name={'text'}
                required={true}
                placeholder={''}
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

export default Note;