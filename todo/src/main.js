import React, { Component } from "react";
import Create from "./create";
import TaskList from "./tasklist";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskset: [],
      max_id: 0,
      editset: [],
    };
    this.submitClick = this.submitClick.bind(this);
    this.removeClick = this.removeClick.bind(this);
    this.editClick = this.editClick.bind(this);
  }

  submitClick(value, date) {
    const maxId = this.state.max_id;
    const taskSet = this.state.taskset;
    taskSet.push({ id: maxId + 1, name: value, limit: date });

    this.setState({
      taskset: taskSet,
      max_id: maxId + 1,
    });
  }

  removeClick(event) {
    const beforeState = this.state.taskset;
    const removeId = Number(event.currentTarget.getAttribute("data-id"));
    const newState = beforeState.filter((i) => i.id !== removeId);

    this.setState({
      taskset: newState,
    });
  }

  editClick(event) {
    const targetState = this.state.taskset;
    const editId = Number(event.currentTarget.getAttribute("data-id"));
    const editState = targetState.find((task) => {
      return task.id === editId;
    });

    this.setState({
      editset: editState,
    });
  }

  render() {
    return (
      <div>
        <Create onSubmit={this.submitClick} edit={this.state.editset} />
        <TaskList
          taskData={this.state.taskset}
          remove2={this.removeClick}
          edit={this.editClick}
        />
      </div>
    );
  }
}

export default Main;
