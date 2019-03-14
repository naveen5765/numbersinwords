import React from 'react';
import TestUtils from 'react-dom/test-utils';
import App from './App';

it('show an input field to the user in order to enter the number', () => {
  let app = TestUtils.renderIntoDocument(
    <App />
  );
  
  expect(TestUtils.findRenderedDOMComponentWithClass(app, 'input_numbers')).toBeTruthy();
});
