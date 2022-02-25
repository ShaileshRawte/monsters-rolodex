import React,{ Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';
//class App extends React.Component{
class App extends Component{
  showFirst = true;
  constructor(){
    console.log("constructor ");
    super();
    this.state ={ 
      monsters:[],
      searchField: ''};
    // No need to bind the funtion with this keywork when using arrow funtion it return the funtion 
    // if using a normal funtion it will not return until unless below funtion not bind
    //this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    console.log("componentDidMount ");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }

  handleChange = (e) => {
    this.setState({searchField :e.target.value});
  }

  render(){
     const {monsters, searchField} = this.state; // hold the value
     const fillteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
     return(
      <div className="App">
       <h1>Monsters Rolodex</h1>
        < SearchBox 
          placeholder='search monsetrs'
          handleChange={this.handleChange}
        />

        <CardList 
            monsters={ fillteredMonster}
        >
      
        </CardList>
      
      </div>

     );
   }
}

export default App;
