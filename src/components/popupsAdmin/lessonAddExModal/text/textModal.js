import React, {Component} from "react";
import './react-draft-wysiwyg.css'; // editor default style
import {Editor} from "react-draft-wysiwyg";
import {EditorState, ContentState, convertFromHTML} from "draft-js";
import {stateToHTML} from "draft-js-export-html";

import InputText from "../../../inputs/inputsAdmin/inputText/inputText";
import Button from "../../../buttons/button/button";

import closed from "../../../../assets/media/icon/close.svg";
import arrow from '../../../../assets/media/icon/arrow-left.svg';
import bold from "../../../../assets/media/icon/bold.svg";
import italic from "../../../../assets/media/icon/italic.svg";
import underline from "../../../../assets/media/icon/underline.svg";
import unordered from "../../../../assets/media/icon/mark_list.svg";
import link from "../../../../assets/media/icon/link.svg";
import image from "../../../../assets/media/icon/photo.svg";

import {TextModalBody, TextModalOverlay} from './textStyled';

import axiosInstance, {uploadFile} from "../../../../service/iTeacherApi";

export default class TextModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      textArea: '',
      type: 'add',
      indexTask: 0,
      indexSection: 0,
      indexLesson: 0,
      editorState: EditorState.createEmpty()
    }
  }

  componentDidMount() {
    this.setTypeModal();
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      editorContentHtml: stateToHTML(editorState.getCurrentContent()),
    });
  };


  // проверяем модалка на создания или редактирование
  setTypeModal = () => {
    const {edit, template, lesson, section} = this.props;
    // нужно передать старые значения
    const currentLessonIndex = template.lesson.findIndex(l => parseInt(l.id) === parseInt(lesson));
    const currentSectionIndex = template.lesson[currentLessonIndex].sections.findIndex(s => parseInt(s.id) === parseInt(section.id));
    const currentTaskIndex = template.lesson[currentLessonIndex].sections[currentSectionIndex].tasks.findIndex(task => parseInt(task.id) === parseInt(edit));
    const currentTaskData = template.lesson[currentLessonIndex].sections[currentSectionIndex].tasks[currentTaskIndex];
    if (typeof edit === 'number') {
      // задаем редактор по умолчанию
      const editorState = EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(currentTaskData.desc)
        )
      )

      this.setState({
        type: 'edit',
        text: currentTaskData.title,
        textArea: currentTaskData.desc,
        indexTask: currentTaskIndex,
        indexLesson: currentLessonIndex,
        indexSection: currentSectionIndex,
        editorState
      });
    } else {
      this.setState({
        indexTask: currentTaskIndex,
        indexLesson: currentLessonIndex,
        indexSection: currentSectionIndex
      });
    }
  }

  // создаем текстовое задание
  createTask = async () => {
    const {indexSection, indexLesson} = this.state;
    // создаем объект текстового задания
    const task = {
      section: this.props.section.id,
      title: this.state.text,
      desc: this.state.editorContentHtml,
      task_type: 'TEXT',
    }

    await axiosInstance.post(`/tasks/`, task)
      .then(res => {
        this.props.update(res.data, indexLesson, indexSection);
        this.props.close();
      })
      .catch(error => console.error(error));
  }

  // изминения задания
  editTask = async () => {
    const {section, close} = this.props;
    const {indexTask, text, textArea, indexSection, indexLesson} = this.state;
    // обновляем текущую секцию
    const newTask = {
      ...section.tasks[indexTask],
      task_type: 'TEXT',
      title: text,
      desc: this.state.editorContentHtml
    }

    this.props.update(newTask, indexLesson, indexSection, true, indexTask);

    await axiosInstance.put(`/tasks/${newTask.id}/update/`, newTask)
      .then(res => {
        close()
      })
      .catch(error => console.error(error));
  }

  render() {
    const {back, close} = this.props;
    const {type, editorState} = this.state;

    return (
      <TextModalOverlay>
        <TextModalBody>
          <img onClick={close} className={'closed'} src={closed} alt="icon"/>
          <div className="caption">
            {
              type === 'add' ? (
                <button
                  onClick={back}
                  className={'arrow_back'}>
                  <img src={arrow} alt="icon"/>
                </button>
              ) : null
            }
            <h2 className={'title'}>Текст</h2>
          </div>
          <InputText
            placeholder={'Условия упражнения'}
            value={this.state.text}
            set={(value) => this.setState({text: value})}
          />

          <div className="smallText">Текст</div>

          <Editor
            defaultEditorState={editorState}
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={this.onEditorStateChange}
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

          <Button
            type="create-text-task"
            text={type === 'add' ? 'Добавить' : 'Сохранить'}
            func={type === 'add' ? this.createTask : this.editTask}
          />

        </TextModalBody>
      </TextModalOverlay>
    )
  }
}