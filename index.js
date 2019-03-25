import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
 /* constructor() {
    super();
    this.state = {
      name: 'React'
    };
  } */

  state = {
    name: 'Bharath'
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
