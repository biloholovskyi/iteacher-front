import React, {Component} from "react";

import UserItem from './userItem';
import {UserList} from './usersStyled';
import {connect} from "react-redux";
import TeacherItem from "./teacherItem";


class StudentTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      hover: false
    }
  }

  componentDidMount() {
    this.getListStudents();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps && JSON.stringify(prevProps.users) !== JSON.stringify(this.props.users)) {
      this.getListStudents();
    }
  }

  getListStudents = () => {
    if (!this.props.users || this.props.users.length < 1) {
      return
    }

    this.setState({users: this.props.users});
  }

  render() {
    const {users} = this.state;
    const {open} = this.props;

    const elements = users.map(user => {
      return (
        <TeacherItem
          open={open}
          key={user.id}
          data={user}
          student={true}
        />
      )
    })

    return (
      <UserList>
        {elements}
      </UserList>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // students: state.students
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StudentTab);