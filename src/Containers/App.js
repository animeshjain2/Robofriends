import React, {Component} from 'react';
import CardList from '../Component/CardList';
import Searchbox from '../Component/Searchbox';
import Scroll from '../Component/Scroll';

 class App extends Component{
 	constructor(){
 		super()
 		this.state= {
 			robots:[],
 			searchfield:''
 		}
 	}

 	onSearchChange = (event) => {
		console.log(event);	
		this.setState({searchfield:event.target.value})	
 	}

 	componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
})
			if(this.state.robots.length===0)
			{
				return <h1>Loading</h1>
			}else{
			 	return (
			
 		<div className='tc'>
 		<h1>RobotFriends</h1>
 		<Searchbox searchChange={this.onSearchChange}/>
 		<Scroll>
 		<CardList robots = {filteredRobots} />
 		</Scroll>
 		</div>
 		);
}}}
 	

export default App ;
