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
      expect(app.find('.input_numbers').length).toBe(1);
    });
  
    it('not allow the user to enter non numeric characters', () => {
      app.find('.input_numbers').simulate('change', {target: {value: 'a'}});
      expect(app.find('.input_numbers').props().value).toBe('');
    });
  
    it('allow the user to enter numbers', () => {
      app.setState({ value: 123 });
      expect(app.find('.input_numbers').props().value).toBe(123);
    });
  
    it('show a button to convert the numbers to words and disable it when the input is empty', () => {
      expect(app.find('.btn_convert').length).toBe(1);
      expect(app.find('.btn_convert').props().disabled).toBe(true);
    });
  
    it('enable the button when the input is not empty', () => {
      app.setState({ value: 123 });
      expect(app.find('.btn_convert').props().disabled).toBe(false);
    });

    it('should call the function to convert the number on click of the button', () => {
      const instance = app.instance();
      const spy = jest.spyOn(instance, 'convertNumberToWords');

      app.setState({ value: 123 });
      app.find('.btn_convert').simulate('click');

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
      app.find('.btn_convert').simulate('click');

      expect(app.find('.number_in_words').text()).toBe("one");
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
  })
})

