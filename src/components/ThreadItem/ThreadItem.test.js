import React from 'react';
import ReactDOM from 'react-dom';
import ThreadItem from './ThreadItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThreadItem url="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
