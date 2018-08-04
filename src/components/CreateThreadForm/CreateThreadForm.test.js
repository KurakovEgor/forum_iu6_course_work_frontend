import React from 'react';
import ReactDOM from 'react-dom';
import CreateThreadForm from './CreateThreadForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateThreadForm url="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
