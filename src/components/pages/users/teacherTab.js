import React, {Component} from "react";

import TeacherItem from './teacherItem';
import {UserList} from './usersStyled';
import {connect} from "react-redux";


class TeacherTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      hover: false
    }
  }

  componentDidMount() {
    this.getListTeachers();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps && JSON.stringify(prevProps.users) !== JSON.stringify(this.props.users)) {
      this.getListTeachers();
    }
  }

  getListTeachers = () => {
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
          teahcer={true}
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
    // users: state.users
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherTab);