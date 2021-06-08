import React, {Component} from 'react';
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../../../../../iteacher_backend/frontend/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import bold from '../../../assets/media/icon/bold.svg';
import italic from '../../../assets/media/icon/italic.svg';
import underline from '../../../assets/media/icon/underline.svg';
import image from '../../../assets/media/icon/photo.svg';
import link from '../../../assets/media/icon/link.svg';
import left from '../../../assets/media/icon/left.svg';
import center from '../../../assets/media/icon/center.svg';
import right from '../../../assets/media/icon/right.svg';
import unordered from '../../../assets/media/icon/mark_list.svg'

class ControlledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {

    function uploadImageCallBack(file) {
      return new Promise(
        (resolve, reject) => {
          const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
          xhr.open('POST', 'https://api.imgur.com/3/image');
          xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
          const data = new FormData(); // eslint-disable-line no-undef
          data.append('image', file);
          xhr.send(data);
          xhr.addEventListener('load', () => {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          });
          xhr.addEventListener('error', () => {
            const error = JSON.parse(xhr.responseText);
            reject(error);
          });
        },
      );
    }

    const {editorState} = this.state;
    return (
      <>
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            options: ['textAlign', 'inline', 'image', 'link', 'list',],
            inline: {
              inDropdown: false,
              className: 'icons icon_font',
              component: undefined,
              dropdownClassName: undefined,
              options: ['bold', 'italic', 'underline'],
              bold: {icon: bold, className: undefined},
              italic: {icon: italic, className: undefined},
              underline: {icon: underline, className: undefined},
            },
            list: {
              inDropdown: false,
              className: 'icons icon_list',
              component: undefined,
              dropdownClassName: undefined,
              options: ['unordered', 'ordered'],
              unordered: {icon: unordered, className: undefined},
              //ordered: { icon: ordered, className: undefined },
              //indent: { icon: indent, className: undefined },
              //outdent: { icon: outdent, className: undefined },
            },
            textAlign: {
              inDropdown: false,
              className: 'icons icon_text',
              component: undefined,
              dropdownClassName: undefined,
              options: ['left', 'center', 'right'],
              left: {icon: left, className: undefined},
              center: {icon: center, className: undefined},
              right: {icon: right, className: undefined},
              //justify: { icon: justify, className: undefined },
            },
            link: {
              inDropdown: false,
              className: 'icons icon_link',
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
              className: 'icons',
              component: undefined,
              popupClassName: undefined,
              urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true,
              uploadCallback: uploadImageCallBack,
              alt: { present: true, mandatory: false },
              previewImage: false,
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              defaultSize: {
                height: 'auto',
                width: 'auto',
              },
            },
          }}
        />

        {/*<textarea*/}
        {/*  disabled*/}
        {/*  value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}*/}
        {/*/>*/}
      </>
    )
  }
}

export default ControlledEditor;
