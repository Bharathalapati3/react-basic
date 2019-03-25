import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      isToggleOn : true
      };
    this.toggleClick = this.toggleClick.bind(this);
  } 

  /*state = {
    name: 'Bharath',
    isToggleOn : true
  }*/

  toggleClick(){
this.setState({isToggleOn:false})

  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          click below to login 
        </p>
        <button onClick = {this.toggleClick}> Click Me!</button>
        {this.state.isToggleOn ? 'ON' : 'OFF'}

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
