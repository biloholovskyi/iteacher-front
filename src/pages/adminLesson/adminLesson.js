import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from "axios";

import {setTemplate, getAllTemplates, setActiveSection, setTypeAdminHead} from "../../actions";

import InfoMenu from "../adminCourse/infoMenu/infoMenu";
import Plan from "../../components/plan/plan";
import AdminChooseTemplateModal from "../../components/popupsAdmin/adminChooseTemplateModal/adminChooseTemplateModal";
import VideoModal from "../../components/popupsAdmin/lessonAddExModal/video/videoModal";
import TextModal from "../../components/popupsAdmin/lessonAddExModal/text/textModal";
import AddImageModal from '../../components/popupsAdmin/lessonAddExModal/image/addImageModal';
import AddAudioModal from '../../components/popupsAdmin/lessonAddExModal/audio/addAudio';
import AddDocumentModal from '../../components/popupsAdmin/lessonAddExModal/document/document';
import AddGallery from '../../components/popupsAdmin/lessonAddExModal/gallery/gallary';
import DragWords from '../../components/popupsAdmin/lessonAddExModal/dragWords/dragWords';
import TestModal from '../../components/popupsAdmin/lessonAddExModal/test/test';
import PopupAddPart from "../../components/popupsAdmin/popupPart/popupAddPart";
import WordColl from "../../components/popupsAdmin/lessonAddExModal/worldColl/wordColl/wordColl";
import TF from "../../components/popupsAdmin/lessonAddExModal/tf/tf";
import Connect from "../../components/popupsAdmin/lessonAddExModal/connect/connect";
import SentenceOfWords from "../../components/popupsAdmin/lessonAddExModal/sentenceOfWords/sentenceOfWords";
import TransferWords from "../../components/popupsAdmin/lessonAddExModal/transferWords/transferWords";
import WriteWord from "../../components/popupsAdmin/lessonAddExModal/writeWord/writeWord";
import Note from "../../components/popupsAdmin/lessonAddExModal/note/note";
import RecordAudio from "../../components/popupsAdmin/lessonAddExModal/recordAudio/recordAudio";

import {LessonWrap, CleanPlan} from './adminLessonStyled';

import ServerSettings from "../../service/serverSettings";

export async function addLessonPart(lessonID, data, selectTemplate, list, setTemplate, setTemplates) {
  // объект новой секции
  const newSection = {
    name: data,
    lesson: lessonID,
  }

  // сохраняем на сервере новую секцию
  // создать новый объект шаблона
  // получаем выбранный урок
  const currentLesson = selectTemplate.lesson.find(l => l.id.toString() === lessonID.toString());
  // сохраняем на сервере новую секцию
  axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
  axios.defaults.xsrfCookieName = 'csrftoken';

  const serverSettings = new ServerSettings();
  await axios.post(`${serverSettings.getApi()}api/section/`, newSection)
    .then(res => {
      // обновить запись выбраного шаблона в редаксе
      // получаем индекс нужного урока
      const currentIndexLesson = selectTemplate.lesson.findIndex(l => l.id.toString() === lessonID.toString());

      const newLessonsUpdate = {
        ...currentLesson,
        sections: [...currentLesson.sections, res.data]
      }
      // обновляем массив уроков
      const newArrayLessons = [...selectTemplate.lesson.slice(0, currentIndexLesson), newLessonsUpdate, ...selectTemplate.lesson.slice(currentIndexLesson + 1)]
      const newTemplate = {
        ...selectTemplate,
        lesson: newArrayLessons
      }
      setTemplate(newTemplate);

      // обновим массив всех шаблонов
      // нужно получить из массива нужный шаблон
      const needTemplateIndex = list.findIndex((t) => t.id.toString() === selectTemplate.id.toString());
      // заменить шаблон на обновленный
      const newArrayTemplates = [...list.slice(0, needTemplateIndex), newTemplate, ...list.slice(needTemplateIndex + 1)];

      // перезаписать в редакс
      setTemplates(newArrayTemplates);
    })
    .catch(error => console.error(error));
}

class AdminLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // нужно заменить на нормальный объект со всеми данными урока
      nameLesson: "Traveling",
      count: '1',
      // совершенно не понятно чем отличаються parts от sections
      parts: [],
      sections: [],
      // список всех разделов
      sectionsList: [],
      // активная секция
      activeSection: {},
      // активный шаблон
      activeTemplate: {},

      showPopupAddSection: false,
      showContentSection: false,
      showChooseTemplate: false,

      // модалки добавление новых заданий
      modalsCreateTask: {
        wordColl: false,
        tf: false,
        write: false,
        transfer: false,
        sentence: false,
        connect: false,
        textModal: false,
        videoModal: false,
        addImage: false,
        addAudio: false,
        addDocument: false,
        gallery: false,
        dragWord: false,
        test: false,
        note: false
      },
    };

  }

  componentDidMount() {
    // записываем в state все разделы
    this.setCurrentSections();

    // проверяем есть ли в пропсах список шаблонов
    if (!this.props.allTemplates || this.props.allTemplates.length < 1) {
      this.getTemplates().catch(error => console.error(error))
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // нужно обновлять список разделов при изминение
    if (JSON.stringify(prevProps.selectTemplate) !== JSON.stringify(this.props.selectTemplate)
      || JSON.stringify(prevProps.allTemplates) !== JSON.stringify(this.props.allTemplates)) {
      this.setCurrentSections();
    }

    // нужно обновлять текущую секцию
    if (JSON.stringify(prevProps.selectSection) !== JSON.stringify(this.props.selectSection)) {
      this.setActiveSectionData();
    }

    // нужно обновлять текущий шаблон
    if (JSON.stringify(prevProps.selectTemplate) !== JSON.stringify(this.props.selectTemplate)) {
      this.setActiveSectionData();
    }
  }

  // грузим данные шаблонов
  getTemplates = async () => {
    const server = new ServerSettings()
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    await axios.get(`${server.getApi()}api/template/`)
      .then(res => {
        this.props.getAllTemplates(res.data);
      }).catch(error => console.log(error));
  }

  // обновление данных шаблона
  // обновляем и текущую секуию и текущий шаблон и текущий урок
  // функция только для упражнений
  updateActiveData = (taskData, indexLesson, indexSection, edit, indexTask) => {
    // обновляем данные выбранной секции
    let newSection;
    // проверяем это обновление или создание нового задания
    if (edit) {
      newSection = {
        ...this.state.selectSection,
        tasks: [...this.state.selectSection.tasks.slice(0, indexTask), taskData, ...this.state.selectSection.tasks.slice(indexTask + 1)]
      }
    } else {
      newSection = {
        ...this.state.selectSection,
        tasks: [...this.state.selectSection.tasks, taskData]
      }
    }
    this.props.setActiveSection(newSection);

    // обновляем текущий шаблон
    const newLesson = {
      ...this.state.activeTemplate.lesson[indexLesson],
      sections: [...this.state.activeTemplate.lesson[indexLesson].sections.slice(0, indexSection), newSection, ...this.state.activeTemplate.lesson[indexLesson].sections.slice(indexSection + 1)]
    }

    const newTemplate = {
      ...this.state.activeTemplate,
      lesson: [...this.state.activeTemplate.lesson.slice(0, indexLesson), newLesson, ...this.state.activeTemplate.lesson.slice(indexLesson + 1)]
    }
    this.props.setTemplate(newTemplate);

    // обновляем весь список шаблонов
    const indexTemplate = this.props.allTemplates.findIndex(t => parseInt(t.id) === parseInt(newTemplate.id));
    const newTemplatesList = [...this.props.allTemplates.slice(0, indexTemplate), newTemplate, ...this.props.allTemplates.slice(indexTemplate + 1)];
    this.props.getAllTemplates(newTemplatesList);
  }

  // записываем в state список всех курсов
  setCurrentSections = () => {
    // в начале нужно проверить есть ли в редаксе уже данные
    if (JSON.stringify(this.props.selectTemplate) === JSON.stringify({})) {
      // нужно получить данные выбраного шаблона
      const currentTemplate = this.props.allTemplates.find((t) => t.id.toString() === this.props.templateID.toString());
      // если данные всех шаблонов еще не загрузились
      if (!currentTemplate) {
        return
      }
      this.props.setTemplate(currentTemplate);
      return
    }
    // нужно из масива всех уроков получить этот урок
    const currentLesson = this.props.selectTemplate.lesson.find(l => l.id.toString() === this.props.lessonID.toString());
    // записываем в state
    this.setState({sectionsList: currentLesson.sections});
    // меняем данные в шапке
    this.props.setTypeAdminHead('lesson', currentLesson.name, null)
  }

  // записываем активную секцию
  setActiveSectionData = () => {
    this.setState({
      selectSection: this.props.selectSection,
      activeTemplate: this.props.selectTemplate
    });
  }

  // закрытие всех модалок
  closeModal = () => {
    this.setState({
      modalsCreateTask: {
        wordColl: false,
        tf: false,
        write: false,
        transfer: false,
        sentence: false,
        connect: false,
        textModal: false,
        videoModal: false,
        addImage: false,
        addAudio: false,
        addDocument: false,
        gallery: false,
        dragWord: false,
        test: false,
        note: false,
        record: false
      }
    })
  }

  // какое то возвращение предыдущей модалки, пока не совсем понятно к чему оно
  ReturnPrevModal = () => {
    this.setState({
      showChooseTemplate: true,
      modalsCreateTask: {
        wordColl: false,
        tf: false,
        write: false,
        transfer: false,
        sentence: false,
        connect: false,
        textModal: false,
        videoModal: false,
        addImage: false,
        addAudio: false,
        addDocument: false,
        gallery: false,
        dragWord: false,
        test: false,
        note: false,
        record: false
      }
    })
  }

  // показать модалку создания задания
  showModalCreateTask = (type) => {
    this.setState({
      showChooseTemplate: false,
      modalsCreateTask: {
        ...this.state.modalsCreateTask,
        [type]: true
      }
    })
  }

  // открытие модалки для редактирования урока
  showEditTask = (e, id, modal) => {
    let type = '';
    switch (modal) {
      case 'TEXT':
        type = 'textModal'
        break
      case 'VIDEO':
        type = 'videoModal'
        break
      case 'PHOTO':
        type = 'addImage'
        break
      case 'DOCUMENT':
        type = 'addDocument'
        break
      case 'LIST_WORD_COLL':
        type = 'wordColl';
        break
      case 'TF':
        type = 'tf'
        break
      case 'WRITE_WORD':
        type = 'write';
        break
      case 'TRANSFER_WORDS':
        type = 'transfer';
        break
      case 'SENTENCE':
        type = 'sentence';
        break
      case 'CONNECT':
        type = 'connect';
        break
      case 'TEST':
        type = 'test';
        break
      case 'NOTE':
        type = 'note';
        break
      case 'AUDIO':
        type = 'addAudio';
        break
      case 'RECORD':
        type = 'record';
        break
      default:
        type = 'textModal'
        break
    }
    this.setState({modalsCreateTask: {...this.state.modalsCreateTask, [type]: id}})
  }

  render() {
    const {parts, sections, showPopupAddSection, showChooseTemplate, modalsCreateTask} = this.state;

    return (
      <>
        <LessonWrap>
          {/*модалка добавления раздела*/}
          {showPopupAddSection
          && <PopupAddPart
            func={(data) => {
              // в data попадает только название самого раздела
              addLessonPart(
                // передаем id урока
                this.props.lessonID,
                // название из модалки
                data,
                this.props.selectTemplate,
                this.props.allTemplates,
                this.props.setTemplate,
                this.props.getAllTemplates
              )
                .catch(error => console.error(error));
            }}
            close={() => this.setState({showPopupAddSection: false})}
          />
          }

          <div className="container">
            {this.state.sectionsList.length !== 0
              ? <div className="lesson__wrap">

                <div className="lesson__col">
                  <InfoMenu
                    type="section"
                    title="Разделы"
                    icon="CrossSvg"
                    lessonID={this.props.lessonID}
                    // список всех секций
                    dataSection={this.state.sectionsList}
                    // функция открытия модалки добавления раздела
                    func={() => this.setState({showPopupAddSection: true})}
                  />
                  <InfoMenu
                    type="simple"
                    title="Домашнее задание"
                  />

                </div>

                <Plan
                  open={() => this.setState({showChooseTemplate: true})}
                  editTask={this.showEditTask}
                  type="lesson"
                  title={'some title'}
                  textButton="Добавить задание"
                  lessonID={this.props.lessonID}
                  dataSection={parts}
                  list={sections}
                />

              </div>

              : <div className="lesson__wrap">

                <div className="lesson__col">
                  <InfoMenu
                    type="section"
                    title="Разделы"
                    icon="CrossSvg"
                    lessonID={this.props.lessonID}
                    // список всех секций
                    dataSection={this.state.sectionsList}
                    // функция открытия модалки добавления раздела
                    func={() => this.setState({showPopupAddSection: true})}
                  />
                  <InfoMenu
                    type="simple"
                    title="Домашнее задание"
                  />

                </div>
              </div>

            }

          </div>

        </LessonWrap>

        {/*open modal for choose template lesson */}

        {
          showChooseTemplate
            ? <AdminChooseTemplateModal
              close={() => this.setState({showChooseTemplate: false})}
              showModal={this.showModalCreateTask}
            />
            : null
        }

        {/*modal for add text block in lesson template*/}

        {
          modalsCreateTask.textModal
            ? <TextModal
              edit={modalsCreateTask.textModal}
              section={this.state.selectSection}
              template={this.state.activeTemplate}
              setTemplate={this.props.setTemplate}
              allTemplates={this.props.allTemplates}
              setAllTemplate={this.props.getAllTemplates}
              lesson={this.props.lessonID}
              setActiveSection={this.props.setActiveSection}
              close={this.closeModal}
              back={this.ReturnPrevModal}
              update={this.updateActiveData}
            />
            : null
        }

        {
          modalsCreateTask.note
            ? <Note
              edit={modalsCreateTask.note}
              section={this.state.selectSection}
              template={this.state.activeTemplate}
              setTemplate={this.props.setTemplate}
              allTemplates={this.props.allTemplates}
              setAllTemplate={this.props.getAllTemplates}
              lesson={this.props.lessonID}
              setActiveSection={this.props.setActiveSection}
              close={this.closeModal}
              back={this.ReturnPrevModal}
              update={this.updateActiveData}
            />
            : null
        }

        {
          modalsCreateTask.record &&
            <RecordAudio
              edit={modalsCreateTask.record}
              section={this.state.selectSection}
              template={this.state.activeTemplate}
              setTemplate={this.props.setTemplate}
              allTemplates={this.props.allTemplates}
              setAllTemplate={this.props.getAllTemplates}
              lesson={this.props.lessonID}
              setActiveSection={this.props.setActiveSection}
              close={this.closeModal}
              back={this.ReturnPrevModal}
              update={this.updateActiveData}
            />
        }

        {
          modalsCreateTask.wordColl
            ? <WordColl
              edit={modalsCreateTask.wordColl}
              section={this.state.selectSection}
              template={this.props.selectTemplate}
              setTemplate={this.props.setTemplate}
              allTemplates={this.props.allTemplates}
              setAllTemplate={this.props.getAllTemplates}
              lesson={this.props.lessonID}
              setActiveSection={this.props.setActiveSection}
              close={this.closeModal}
              back={this.ReturnPrevModal}
              update={this.updateActiveData}
            />
            : null
        }

        {/*modal for add video in lesson template*/}

        {
          modalsCreateTask.videoModal
            ? <VideoModal
              edit={modalsCreateTask.videoModal}
              section={this.state.selectSection}
              template={this.props.selectTemplate}
              setTemplate={this.props.setTemplate}
              allTemplates={this.props.allTemplates}
              setAllTemplate={this.props.getAllTemplates}
              lesson={this.props.lessonID}
              setActiveSection={this.props.setActiveSection}
              close={this.closeModal}
              back={this.ReturnPrevModal}
              update={this.updateActiveData}
            />
            : null
        }

        {/*modal for add image in lesson template*/}

        {
          modalsCreateTask.addImage
            ? <AddImageModal
              edit={modalsCreateTask.addImage}
              section={this.state.selectSection}
              template={this.props.selectTemplate}
              setTemplate={this.props.setTemplate}
              allTemplates={this.props.allTemplates}
              setAllTemplate={this.props.getAllTemplates}
              lesson={this.props.lessonID}
              setActiveSection={this.props.setActiveSection}
              close={this.closeModal}
              back={this.ReturnPrevModal}
              update={this.updateActiveData}
            />
            : null
        }

        {
          modalsCreateTask.tf &&
          <TF
            edit={modalsCreateTask.tf}
            section={this.state.selectSection}
            template={this.props.selectTemplate}
            setTemplate={this.props.setTemplate}
            allTemplates={this.props.allTemplates}
            setAllTemplate={this.props.getAllTemplates}
            lesson={this.props.lessonID}
            setActiveSection={this.props.setActiveSection}
            close={this.closeModal}
            back={this.ReturnPrevModal}
            update={this.updateActiveData}
          />
        }

        {
          modalsCreateTask.transfer &&
          <TransferWords
            edit={modalsCreateTask.transfer}
            section={this.state.selectSection}
            template={this.props.selectTemplate}
            setTemplate={this.props.setTemplate}
            allTemplates={this.props.allTemplates}
            setAllTemplate={this.props.getAllTemplates}
            lesson={this.props.lessonID}
            setActiveSection={this.props.setActiveSection}
            close={this.closeModal}
            back={this.ReturnPrevModal}
            update={this.updateActiveData}
          />
        }

        {
          modalsCreateTask.write &&
          <WriteWord
            edit={modalsCreateTask.write}
            section={this.state.selectSection}
            template={this.props.selectTemplate}
            setTemplate={this.props.setTemplate}
            allTemplates={this.props.allTemplates}
            setAllTemplate={this.props.getAllTemplates}
            lesson={this.props.lessonID}
            setActiveSection={this.props.setActiveSection}
            close={this.closeModal}
            back={this.ReturnPrevModal}
            update={this.updateActiveData}
          />
        }

        {
          modalsCreateTask.test &&
          <TestModal
            edit={modalsCreateTask.test}
            section={this.state.selectSection}
            template={this.props.selectTemplate}
            setTemplate={this.props.setTemplate}
            allTemplates={this.props.allTemplates}
            setAllTemplate={this.props.getAllTemplates}
            lesson={this.props.lessonID}
            setActiveSection={this.props.setActiveSection}
            close={this.closeModal}
            back={this.ReturnPrevModal}
            update={this.updateActiveData}
          />
        }

        {
          modalsCreateTask.connect &&
          <Connect
            edit={modalsCreateTask.connect}
            section={this.state.selectSection}
            template={this.props.selectTemplate}
            setTemplate={this.props.setTemplate}
            allTemplates={this.props.allTemplates}
            setAllTemplate={this.props.getAllTemplates}
            lesson={this.props.lessonID}
            setActiveSection={this.props.setActiveSection}
            close={this.closeModal}
            back={this.ReturnPrevModal}
            update={this.updateActiveData}
          />
        }

        {
          modalsCreateTask.sentence &&
          <SentenceOfWords
            edit={modalsCreateTask.sentence}
            section={this.state.selectSection}
            template={this.props.selectTemplate}
            setTemplate={this.props.setTemplate}
            allTemplates={this.props.allTemplates}
            setAllTemplate={this.props.getAllTemplates}
            lesson={this.props.lessonID}
            setActiveSection={this.props.setActiveSection}
            close={this.closeModal}
            back={this.ReturnPrevModal}
            update={this.updateActiveData}
          />
        }

        {/*modal for add audio file in lesson template*/}

        {
          modalsCreateTask.addAudio &&
          <AddAudioModal
            edit={modalsCreateTask.addAudio}
            section={this.state.selectSection}
            template={this.props.selectTemplate}
            setTemplate={this.props.setTemplate}
            allTemplates={this.props.allTemplates}
            setAllTemplate={this.props.getAllTemplates}
            lesson={this.props.lessonID}
            setActiveSection={this.props.setActiveSection}
            close={this.closeModal}
            back={this.ReturnPrevModal}
            update={this.updateActiveData}
          />
        }

        {/*modal for add document file in lesson template*/}

        {
          modalsCreateTask.addDocument
            ? <AddDocumentModal
              edit={modalsCreateTask.addDocument}
              section={this.state.selectSection}
              template={this.props.selectTemplate}
              setTemplate={this.props.setTemplate}
              allTemplates={this.props.allTemplates}
              setAllTemplate={this.props.getAllTemplates}
              lesson={this.props.lessonID}
              setActiveSection={this.props.setActiveSection}
              close={this.closeModal}
              back={this.ReturnPrevModal}
              update={this.updateActiveData}
            />
            : null
        }

        {/*add gallery */}

        {
          modalsCreateTask.gallery
            ? <AddGallery
              close={this.closeModal}
              back={this.ReturnPrevModal}
            />
            : null
        }

        {/* drag words modal */}

        {
          modalsCreateTask.dragWord
            ? <DragWords
              close={this.closeModal}
              back={this.ReturnPrevModal}
            />
            : null
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectTemplate: state.selectTemplate,
    selectSection: state.selectSection,
    allTemplates: state.templates
  }
}

const mapDispatchToProps = {
  setTemplate,
  getAllTemplates,
  setActiveSection,
  setTypeAdminHead
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLesson);