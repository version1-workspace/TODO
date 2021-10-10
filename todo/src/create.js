import React, {Component} from 'react';

class Create extends Component {
	constructor(props){
		super(props);
		
		const date = new Date();
		const str = date.getFullYear()
				+ '/' + ('0' + (date.getMonth() + 1)).slice(-2)
				+ '/' + ('0' + date.getDate()).slice(-2);
		this.state = {
			newtaskval: '',
			limitdate: str
		};
		
		this.dateChange = this.dateChange.bind(this);
		this.textChange = this.textChange.bind(this);
		this.textSubmit = this.textSubmit.bind(this);
	}
	
	dateChange(event){
		this.setState( { limitdate: event.target.value } );
	}
	
	textChange(event){
		this.setState( { newtaskval: event.target.value } );
	}
	
	textSubmit(event){
		event.preventDefault();
		
		const newtask = this.state.newtaskval;
		const limitdate = this.state.limitdate;
		if( newtask === '' || newtask.length < 3 ){
			return(false);
		}
		if( newtask !== '' && window.confirm('新しいタスクを登録しますか?') ){
			this.props.sendTaskVal(newtask);
			this.props.sendTaskLimit(limitdate);
			this.setState( { newtaskval: '' } );
		}
	}
	
	render() {
		return(
			<form onSubmit={this.textSubmit}>
				<input type="text" value={this.state.limitdate} onChange={this.dateChange} />
				<input type="text" value={this.state.newtaskval} onChange={this.textChange} />
				<button>追加</button>
			</form>
		);
	}
}

export default Create;