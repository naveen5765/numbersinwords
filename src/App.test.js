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

  it('allow the user to enter only numbers', () => {
    app.setState({ value: 'sample' });
    debugger;
    expect(app.find('.input_numbers').get(0).value).toBeUndefined();
  });
})

