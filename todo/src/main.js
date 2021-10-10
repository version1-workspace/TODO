import React, {Component} from 'react';
import Create from './create';
import TaskList from './tasklist';

class Main extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			taskset: [],
			max_id: 0
		};
		this.submitClick = this.submitClick.bind(this);
		this.removeClick = this.removeClick.bind(this);
	}

	submitClick(value){
		const maxId = this.state.max_id;
		const taskSet = this.state.taskset;
		taskSet.push( { id: maxId+1, name: value } );
		
		this.setState({
			taskset: taskSet,
			max_id: maxId+1
		});
	}

	removeClick(event){
		const beforeState = this.state.taskset;
		const removeId = Number( event.currentTarget.getAttribute('data-id') );
		const newState = beforeState.filter( i => i.id !== removeId );
		
		this.setState({
			taskset: newState
		});
	}

	render() {
		return(
			<div>
				<Create sendTaskVal={this.submitClick} />
				<TaskList taskData={this.state.taskset} remove2={this.removeClick} />
			</div>
		);
	}
}

export default Main;