import React from 'react';
import TestUtils from 'react-dom/test-utils';
import App from './App';

describe("Number in Words Conversion", () => {
  let app;
  beforeEach(() =>{
    app = TestUtils.renderIntoDocument(
      <App />
    );
  });

  it('show an input field to the user in order to enter the number', () => {
    expect(TestUtils.findRenderedDOMComponentWithClass(app, 'input_numbers')).toBeTruthy();
  });
})

