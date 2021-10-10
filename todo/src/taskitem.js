import React, {Component} from 'react';

class TaskItem extends Component {
	render() {
		
		const taskid = this.props.item.id;
		const taskname = this.props.item.name;
		
		return(
			<li key={taskid}>
				{taskname}
				<button data-id={taskid} onClick={this.props.remove1}>
				&#10005;</button>
			</li>
		);
			
	}
}

export default TaskItem;