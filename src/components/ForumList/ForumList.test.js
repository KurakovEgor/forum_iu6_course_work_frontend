import React from 'react';
import ReactDOM from 'react-dom';
import ForumList from './ForumList';

import {FORUM_LIST_URL_TEST} from 'constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForumList url={FORUM_LIST_URL_TEST} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
