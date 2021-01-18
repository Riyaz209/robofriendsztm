import React from 'react';
import './hello.css';

class Hello extends React.Component {
	render(){
		return (
			<div className='f1 tc'>
				<h1>Hello World Component - editing fo git</h1>
				<p>{this.props.greeting}</p>
			</div>
		);
	}
}

export default Hello;