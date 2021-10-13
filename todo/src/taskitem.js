import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    const taskid = this.props.item.id;
    const tasklimit = this.props.item.limit;
    const taskname = this.props.item.name;

    return (
      <li key={taskid}>
        {taskname}（{tasklimit}まで）
        <button data-id={taskid} onClick={this.props.remove1}>
          &#10005;
        </button>
        <button data-id={taskid} onClick={this.props.edit}>
          編集
        </button>
      </li>
    );
  }
}

export default TaskItem;
