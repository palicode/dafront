import React from 'react';
import { render } from 'react-testing-library';
import App from '../index';

describe('App', () => {
  it('should be mounted with no props', () => {
    const wrapper = render(<App />);
    expect()
    expect(wrapper).toMatchSnapshot();
  })
})
