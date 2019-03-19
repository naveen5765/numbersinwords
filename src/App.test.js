import React from 'react';
import { configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe("Number in Words Conversion", () => {
  let app;
  beforeEach(() =>{
    app = shallow(<App />);
  });

  describe("UI Requirement", () => {
    it('show an input field to the user in order to enter the number', () => {
      expect(app.find('#input_numbers').length).toBe(1);
    });
  
    it('not allow the user to enter non numeric characters', () => {
      app.find('#input_numbers').simulate('change', {target: {value: 'a'}});
      expect(app.find('#input_numbers').props().value).toBe('');
    });
  
    it('allow the user to enter numbers', () => {
      app.setState({ value: 123 });
      expect(app.find('#input_numbers').props().value).toBe(123);
    });
  
    it('show a button to convert the numbers to words and disable it when the input is empty', () => {
      expect(app.find('#btn_convert').length).toBe(1);
      expect(app.find('#btn_convert').props().disabled).toBe(true);
    });
  
    it('enable the button when the input is not empty', () => {
      app.setState({ value: 123 });
      expect(app.find('#btn_convert').props().disabled).toBe(false);
    });

    it('should call the function to convert the number on click of the button', () => {
      const instance = app.instance();
      const spy = jest.spyOn(instance, 'convertNumberToWords');

      app.setState({ value: 123 });
      app.find('#btn_convert').simulate('click');

      expect(spy).toHaveBeenCalled();
    });
  })
  
  describe("Function to convert the number", () => {
    it('should return "one" when passing number 1', () => {
      const result = app.instance().convertNumberToWords(1);
      expect(result).toBe('one');
    });

    it('should display the result of the function on the screen and clear the input', () => {
      app.setState({ value: 1 });
      app.find('#btn_convert').simulate('click');

      expect(app.find('#number_in_words').text()).toBe("one");
    });

    it('should return "two" when passing number 2', () => {
      const result = app.instance().convertNumberToWords(2);
      expect(result).toBe('two');
    });

    it('should return "three" when passing number 3', () => {
      const result = app.instance().convertNumberToWords(3);
      expect(result).toBe('three');
    });

    it('should return "ten" when passing number 10', () => {
      const result = app.instance().convertNumberToWords(10);
      expect(result).toBe('ten');
    });

    it('should return "twenty" when passing number 20', () => {
      const result = app.instance().convertNumberToWords(20);
      expect(result).toBe('twenty');
    });

    it('should return "seventy nine" when passing number 79', () => {
      const result = app.instance().convertNumberToWords(79);
      expect(result).toBe('seventy nine');
    });

    it('should return "one hundred" when passing number 100', () => {
      const result = app.instance().convertNumberToWords(100);
      expect(result).toBe('one hundred');
    });

    it('should return "one hundred and eighty eight" when passing number 188', () => {
      const result = app.instance().convertNumberToWords(188);
      expect(result).toBe('one hundred and eighty eight');
    });

    it('should return "seven hundred and fourty five" when passing number 745', () => {
      const result = app.instance().convertNumberToWords(745);
      expect(result).toBe('seven hundred and fourty five');
    });

    it('should return "one thousand" when passing number 1000', () => {
      const result = app.instance().convertNumberToWords(1000);
      expect(result).toBe('one thousand');
    });

    it('should return "one thousand five hundred and sixty four" when passing number 1564', () => {
      const result = app.instance().convertNumberToWords(1564);
      expect(result).toBe('one thousand five hundred and sixty four');
    });

    it('should return "seven thousand six hundred and thirty two" when passing number 7632', () => {
      const result = app.instance().convertNumberToWords(7632);
      expect(result).toBe('seven thousand six hundred and thirty two');
    });

    it('should return "ten thousand" when passing number 10000', () => {
      const result = app.instance().convertNumberToWords(10000);
      expect(result).toBe('ten thousand');
    });

    it('should not accept a number more than 10000, instead return a error message "Number exceeded the limit"', () => {
      const result = app.instance().convertNumberToWords(18290);
      expect(result).toBe('Number exceeded the limit');
    });

    it('should return "ten thousand" when passing string 10000', () => {
      const result = app.instance().convertNumberToWords('10000');
      expect(result).toBe('ten thousand');
    });
  })
})

