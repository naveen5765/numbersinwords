import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

class App extends Component {
  state= {
    value: ''
  }

  changeValue = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({value: event.target.value})
    }
  }

  isNumberAvailable = () => {
    const isNumberAvailable = _.isNumber(this.state.value) === true ? true : false;
    return isNumberAvailable;
  }

  convertNumberToWords = () => {
    return;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label>{"Number <-> Words"}</label>
        </header>
        <div>
          <input className="input_numbers" value={this.state.value} onChange={this.changeValue} />
          <button className="btn_convert" disabled={!this.isNumberAvailable()} onClick={this.convertNumberToWords}>Convert</button>
        </div>
      </div>
    );
  }
}

export default App;
