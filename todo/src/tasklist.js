import React, { Component } from "react";
import TaskItem from "./taskitem";

class TaskList extends Component {
  render() {
    const taskdata = this.props.taskData;

    if (taskdata.length === 0) {
      return <p>なし</p>;
    } else {
      return (
        <ul>
          {taskdata.map((i) => (
            <TaskItem
              key={i.id}
              item={i}
              remove1={this.props.remove2}
              edit={this.props.edit}
            />
          ))}
        </ul>
      );
    }
  }
}

export default TaskList;
