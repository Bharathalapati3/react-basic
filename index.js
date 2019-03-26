import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Bharath',
      isToggleOn : true
      };
    this.toggleClick = this.toggleClick.bind(this);
  } 

  /*state = {
    name: 'Bharath',
    isToggleOn : true
  }*/

  toggleClick(){
this.setState((state) =>({isToggleOn:!state.isToggleOn}))

  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          click below for Switch 
        </p>
        <button onClick = {this.toggleClick}> Click Me!</button>
        <h1>{this.state.isToggleOn ? 'ON' : 'OFF'}</h1>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
