import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import { robots } from './robots';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(users => {
				this.setState({robots: users});
			}); 
		
	}
	
	onSearchChange = (event) => {
		console.log(event.target.value);
		this.setState({ searchfield: event.target.value });
		/*const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})*/
		/*this.setState({
			robots: filteredRobots
		});*/
	}
	
	render() {
		//const { robots, searchfield } = this.state;
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>;
		} else {
			return (
				<div className='tc'>
					<h1 className='f1' >RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
		
		
	}
}

export default App;
