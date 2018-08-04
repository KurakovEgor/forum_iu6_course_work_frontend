import React from 'react';
import ReactDOM from 'react-dom';
import PostItem from './PostItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostItem url="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
