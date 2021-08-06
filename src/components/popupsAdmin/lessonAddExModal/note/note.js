import React, {useEffect, useState} from "react";
import '../text/react-draft-wysiwyg.css';
import {Editor} from "react-draft-wysiwyg";
import {EditorState, ContentState, convertFromHTML} from "draft-js";
import {stateToHTML} from "draft-js-export-html";

import AdminModalTask from "../../adminModalTask/adminModalTask";
import MainButton from "../../../buttons/mainButton/mainButton";
import SimpleTextArea from "../../../inputs/simpleTextArea/simpleTextArea";

import bold from "../../../../assets/media/icon/bold.svg";
import italic from "../../../../assets/media/icon/italic.svg";
import underline from "../../../../assets/media/icon/underline.svg";
import unordered from "../../../../assets/media/icon/mark_list.svg";
import link from "../../../../assets/media/icon/link.svg";
import image from "../../../../assets/media/icon/photo.svg";

import * as Style from "../sentenceOfWords/style";
import {Form} from '../tf/style'
import {NoteEditor} from './styled';

import axiosInstance, {uploadFile} from "../../../../service/iTeacherApi";


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
  const [studentVisibility, setStudentVisibility] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorContent, setEditorContent] = useState();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
    setEditorContent(stateToHTML(editorState.getCurrentContent()))
  };

  // добавление или обновление
  useEffect(() => {
    // Передаем старрые значения
    const currentLessonIndex = template.lesson.findIndex(l => parseInt(l.id) === parseInt(lesson));
    const currentSectionIndex = template.lesson[currentLessonIndex].sections.findIndex(s => parseInt(s.id) === parseInt(section.id));
    const currentTaskIndex = template.lesson[currentLessonIndex].sections[currentSectionIndex].tasks.findIndex(task => parseInt(task.id) === parseInt(edit));
    const currentTaskData = template.lesson[currentLessonIndex].sections[currentSectionIndex].tasks[currentTaskIndex];
    
    if (typeof edit === 'number') {
      setEditorState(EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(currentTaskData.desc)
        )
      ))
      setEditorContent(editorState)
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
    if (currentTaskData)
      setStudentVisibility(currentTaskData.student_visibility);
  }, [])

  
  // создание задания
  const createTask = async (e) => {
    e.preventDefault();
    
    // создаем объект задания
    const task = {
      section: section.id,
      title: studentVisibility ? 'Заметка' : 'Заметка (видна только вам)',
      desc: editorContent,
      task_type: 'NOTE',
      student_visibility: studentVisibility
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

    // создаем объект задания
    const task = {
      ...taskData,
      title: studentVisibility ? 'Заметка' : 'Заметка (видна только вам)',
      desc: editorContent,
      task_type: 'NOTE',
      student_visibility: studentVisibility
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
          <div className="desc">Введите текст заметки</div>
          <div>
            <span className="switch-text text-muted">Видимость для ученика</span>
            <label className="switch">
                <input type="checkbox" checked={studentVisibility} onChange={() => setStudentVisibility(!studentVisibility)}/>
                <span className="switch-slider"></span>
            </label>
          </div>
        </Style.TextBlock>

        {/* {
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
        } */}

        <NoteEditor>
          <Editor
            defaultEditorState={editorState}
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={onEditorStateChange}
            toolbar={{
              options: ['inline', 'image', 'link', 'list',],
              inline: {
                inDropdown: false,
                className: 'media icon_font',
                component: undefined,
                dropdownClassName: undefined,
                options: ['bold', 'italic', 'underline'],
                bold: {icon: bold, className: undefined},
                italic: {icon: italic, className: undefined},
                underline: {icon: underline, className: undefined},
              },
              list: {
                inDropdown: false,
                className: 'media icon_list',
                component: undefined,
                dropdownClassName: undefined,
                options: ['unordered', 'ordered'],
                unordered: {icon: unordered, className: undefined},
                //ordered: { icon: ordered, className: undefined },
              },
              // textAlign: {
              //   inDropdown: false,
              //   className: 'media icon_text',
              //   component: undefined,
              //   dropdownClassName: undefined,
              //   options: ['left', 'center', 'right'],
              //   left: {icon: left, className: undefined},
              //   center: {icon: center, className: undefined},
              //   right: {icon: right, className: undefined},
              //   //justify: { icon: justify, className: undefined },
              // },
              link: {
                inDropdown: false,
                className: 'media icon_link',
                component: undefined,
                popupClassName: undefined,
                dropdownClassName: undefined,
                showOpenOptionOnHover: true,
                defaultTargetOption: '_self',
                options: ['link'],
                link: {icon: link, className: undefined},
                //unlink: { icon: unlink, className: undefined },
                linkCallback: undefined
              },
              image: {
                icon: image,
                className: 'media',
                component: undefined,
                popupClassName: undefined,
                urlEnabled: true,
                uploadEnabled: true,
                alignmentEnabled: false,
                uploadCallback: uploadFile,
                alt: {present: true, mandatory: false},
                previewImage: true,
                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                defaultSize: {
                  height: 'auto',
                  width: 'auto',
                },
              },
            }}
          />
        </NoteEditor>

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