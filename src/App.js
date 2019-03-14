import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state= {
    value: ''
  }

  changeValue = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label>{"Number <-> Words"}</label>
        </header>
        <div>
          <input type="number" className="input_numbers" value={this.state.value} onChange={this.changeValue}/>
        </div>
      </div>
    );
  }
}

export default App;
