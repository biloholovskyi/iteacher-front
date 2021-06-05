import React, {Component} from "react";
import {connect} from "react-redux";

import CommonTabs from "./commonTabs/commonTabs";
import {TabsBody} from "./styled";


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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(this.props.templates) !== JSON.stringify(this.state.courses)) {
      this.setTemplates();
    }
  }

  // добавляем все шаблоны курсов
  setTemplates = () => {
    this.setState({courses: this.props.templates});
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CourseTabs);