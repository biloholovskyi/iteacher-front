import React, {Component} from "react";
import {connect} from "react-redux";

import {getAllTemplates} from "../../actions";

import CommonTabs from "./CommonTabs";
import MyTemplates from "./MyTabs";

import {TabsHead, TabsHeadNav, TabsBody} from "./addCoursesStyle";

import axiosInstance from "../../service/iTeacherApi";

class CourseTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    this.setTemplates();
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if(JSON.stringify(this.props.templates) !== JSON.stringify(this.state.courses)) {
  //     this.setTemplates();
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    if(JSON.stringify(prevProps.templates) !== JSON.stringify(prevState.courses)) {
      this.setTemplates();
    }
  }

  // добавляем все шаблоны курсов
  setTemplates = () => {
    const {template} = this.props;
    // проверяем есть ли шаблонны в редаксе
    if(!template || template.length < 1) {
      // получаем курсы
      this.getTemplates().catch(error => console.error(error));
    } else {
      this.setState({courses: this.props.templates});
    }
  }

  getTemplates = async () => {
    await axiosInstance.get(`/template/`)
      .then(res => {
        getAllTemplates(res.data);
        this.setState({courses: res.data});
      }).catch(error => console.log(error));
  }

  render() {
    const {courses} = this.state;
    return (
      <>
        <TabsBody>
          <CommonTabs
            className={"templateItem"}
            courses={courses}
          />
        </TabsBody>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    templates: state.templates
  }
};

const mapDispatchToProps = {
  getAllTemplates
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseTabs);