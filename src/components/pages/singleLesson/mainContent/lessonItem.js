import React, {Component} from "react";


export default class LessonItem extends Component {
  constructor(props) {
    super(props);
    this.state = {disabled: "1"}
  }

  clicky(e) {
    const id = e.target.id
    this.setState({disabled: id})
  }

  render() { 
    return (
      <div className="trueOrFalse" onClick={this.clicky.bind(this)}>
        <button disabled={this.state.disabled === "1"} id="1">True</button>
        <button disabled={this.state.disabled === "2"} id="2">False</button>
      </div>
    )
  }
}