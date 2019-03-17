import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state= {
    value: '',
    result: ''
  }

  changeValue = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({value: event.target.value})
    }
  }

  isNumberAvailable = () => {
    const isNumberAvailable = (this.state.value === '') ? false : true;
    return isNumberAvailable;
  }

  convertNumberToWords = (number) => {
    return number === 2 ? 'two': 'one';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label>{"Number <-> Words"}</label>
        </header>
        <div>
          <input className="input_numbers" value={this.state.value} onChange={this.changeValue} />
          <button className="btn_convert" disabled={!this.isNumberAvailable()} 
            onClick={
              () => {
                this.setState({
                  result: this.convertNumberToWords(this.state.value)
                })
              }
            }
            >Convert</button>
        </div>
        <div>
          <span className="number_in_words">{this.state.result}</span>
        </div>
      </div>
    );
  }
}

export default App;
