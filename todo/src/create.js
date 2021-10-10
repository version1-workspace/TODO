import React, {Component} from 'react';

class Create extends Component {
	constructor(props){
		super(props);
		this.state = { newtaskval: '' };
		
		this.textChange = this.textChange.bind(this);
		this.textSubmit = this.textSubmit.bind(this);
	}
	
	textChange(event){
		this.setState( { newtaskval: event.target.value } );
	}
	
	textSubmit(event){
		event.preventDefault();
		
		const newtask = this.state.newtaskval;
		if( newtask === '' || newtask.length < 3 ){
			return(false);
		}
		if( newtask !== '' && window.confirm('新しいタスクを登録しますか?') ){
			this.props.sendTaskVal(newtask);
			this.setState( { newtaskval: '' } );
		}
	}
	
	render() {
		return(
			<form onSubmit={this.textSubmit}>
				<input type="text" value={this.state.newtaskval} onChange={this.textChange} />
				<button>追加</button>
			</form>
		);
	}
}

export default Create;