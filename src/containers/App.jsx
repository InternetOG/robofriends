import React, { Component } from 'react';
import './App.css';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from './ErrorBoundry';


class App extends Component {

  constructor(){

    super();

    this.state = {
      robots: [],
      searchfield: '',
    }

  }

  // let promise = new Promise((resolve, reject) => {
  //   if (true)
  //   {
  //     console.log(resolve("It was resolved"));
  //   }
  //   else
  //   {
  //     console.log(reject("It was rejected"));
  //   }
  // })

  componentDidMount()
  {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(jsonRobots => this.setState({robots: jsonRobots}));
  }

  onSearchChange = (event) => {

    this.setState({
      searchfield: event.target.value
    })
  }

  render()
  {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    if (!robots.length)
    { 
      return <h1 className='text-xl pb-1'>Loading...</h1>
    }
    else
    {
      return (
        <div className='h-screen grid content-center p-20 maxsm:p-10 box-border text-center'>
          <h1 className='mb-5 text-6xl maxsm:text-4xl animate__animated animate__tada text-neutral-600'>Robosapien</h1>
          <Searchbox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <Cardlist robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;