import React from 'react';
import ReactDOM from 'react-dom';
import ThreadList from './ThreadList';

import {THREAD_LIST_URL_TEST} from 'constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThreadList url={THREAD_LIST_URL_TEST} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
