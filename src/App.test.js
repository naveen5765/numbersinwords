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

  it('show an input field to the user in order to enter the number', () => {
    expect(app.find('.input_numbers').length).toBe(1);
  });

  it('not allow the user to enter non numeric characters', () => {
    app.find('.input_numbers').simulate('change', {target: {value: 'a'}});
    debugger;
    expect(app.find('.input_numbers').props().value).toBe('');
  });

  it('allow the user to enter numbers', () => {
    app.setState({ value: 123 });
    expect(app.find('.input_numbers').props().value).toBe(123);
  });

  it('show a button to convert the numbers to words and disable it when the input is empty', () => {
    expect(app.find('.btn_convert').length).toBe(1);
    expect(app.find('.btn_convert').is('[disabled]')).toBe(true);
  });
})

