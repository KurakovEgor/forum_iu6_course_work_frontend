import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './PostList';

import {THREAD_LIST_URL_TEST} from 'constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostList url={THREAD_LIST_URL_TEST} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
