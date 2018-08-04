import React from 'react';
import ReactDOM from 'react-dom';
import ForumItem from './ForumItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForumItem url="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
