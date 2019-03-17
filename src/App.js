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
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'] ;
    const tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty'];
    if(number <= 19)
      return units[number];
    else{
      let numberSplitInString = number.toString().split('');
      let words = '';
      if(numberSplitInString.length === 2){
        numberSplitInString.forEach((element,index) => {
          if(index === 0){
            words+= tens[numberSplitInString[0]] + " ";
          }else if(index === 1 && element !== '0'){
            words+= units[numberSplitInString[1]] + " ";
          }
        });
      }
      if(numberSplitInString.length === 3){
        numberSplitInString.forEach((element,index) => {
          if(index === 0){
            words+= units[numberSplitInString[0]] + " hundred ";
          }else if(index === 1 && element === '1'){
            words+= "and "+ units[numberSplitInString[1] + 11] + " ";
          }else if(index === 1 && element !== '0'){
            words+= "and "+ tens[numberSplitInString[1]] + " ";
          }else if(index === 2 && element !== '0'){
            words+= units[numberSplitInString[1]] + " ";
          }
        });
      }
      return words.trim();
    }
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
