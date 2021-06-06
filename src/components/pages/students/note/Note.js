import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from "axios";

import NoteForm from "./noteForm/noteForm";
import NotesList from "./noteList/noteList";

import {NotesWrap, Notes} from "./styled";

import close from "../../../../assets/media/icon/close.svg";

import ServerSettings from "../../../../service/serverSettings";

class Note extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.serverSettings = new ServerSettings();
  }

  componentDidMount() {
    this.setNotationsToState();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.notations && JSON.stringify(prevProps.notations) !== JSON.stringify(this.props.notations)) {
      this.setNotationsToState();
    }
  }

  setNotationsToState = () => {
    if(!this.props.data || this.props.data.length < 1) {
      return
    }

    this.setState({data: this.props.data});
  }

  // add message
  addItem(note) {

    this.setState(({data})=>{
      const newArr = [...data, note];
      return {
        data: newArr
      }
    })
  }

  // delete message
  deleteItem = async (id) => {
    await axios.delete(`${this.serverSettings.getApi()}api/notations/${id}/`)
      .then(res => {
        console.log(res);
        this.setState(({data}) => {
          const index = data.findIndex(elem => elem.id === id);

          const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
          return {
            data: newArr
          }
        });
      }).catch(error => console.log(error));
  }

  render() {
    const {closed, data} = this.props;
    return (
      <NotesWrap>
        <Notes className={'note'}>
          <div className="notesHeader">
            <h3>Заметки</h3>
            <img onClick={(e) => {closed(e)}} src={close} alt="icon"/>
          </div>
          <NotesList
            posts={this.state.data}
            onDelete={this.deleteItem}
          />
          <NoteForm
            studentID={this.props.data[0].student}
            teacherID={this.props.data[0].teacher}
            onAdd={this.addItem}
          />
        </Notes>
      </NotesWrap>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Note);