import React from 'react';
import ReactDOM from 'react-dom';
import CreateForumForm from './CreateForumForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateForumForm url="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
