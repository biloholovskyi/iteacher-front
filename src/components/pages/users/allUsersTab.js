import React, {Component} from "react";
import UserItem from './userItem';
import TeacherItem from './teacherItem';
import {connect} from "react-redux";

//styled
import {UserList} from './usersStyled';

class AllUsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      users: [],
      hover: false
    }
  }

  componentDidMount() {
    this.getListUsers();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps && JSON.stringify(prevProps.users) !== JSON.stringify(this.props.users)) {
      this.getListUsers();
    }
  }

  getListUsers = () => {
    //console.log(this.props);
    if (!this.props.users || this.props.users.length < 1) {
      return
    }

    this.setState({users: this.props.users});
  }

  render() {
    const {users} = this.state;
    const {open} = this.props;

    const usersList = users.map(user => {
      return (
        <TeacherItem
          open={open}
          key={user.id}
          data={user}
        />
      )
    })

    return (
      <UserList>
        {usersList}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersList);