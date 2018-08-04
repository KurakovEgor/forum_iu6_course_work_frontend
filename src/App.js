import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import './App.css';

import ForumList from './components/ForumList/ForumList';
import ThreadList from './components/ThreadList/ThreadList';
import PostList from './components/PostList/PostList';
import CreateForumForm from './components/CreateForumForm/CreateForumForm';
import CreateThreadForm from './components/CreateThreadForm/CreateThreadForm';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Status from './components/Status/Status';

import * as constants from './constants';

class App extends Component {
  render() {
    return (
          <div className="App">
            <Navbar url = {constants.USER_URL} />
            <Switch>
              <Route exact path='/' render={(props) => ( <ForumList url={constants.FORUM_LIST_URL}/> )} />
              <Route path='/login' render={(props) => ( <Login url={constants.USER_URL}/> )} />
              <Route path='/signup' render={(props) => ( <Signup url={constants.USER_URL}/> )} />
              <Route path='/forum/:slug' render={(props) => ( <ThreadList {...props} url={constants.FORUM_LIST_URL}/> )} />
              <Route path='/thread/:thread_slug' render={(props) => ( <PostList {...props} url={constants.THREAD_URL}/> )} />
              <Route path='/create/forum' render={(props) => ( <CreateForumForm {...props} url={constants.FORUM_LIST_URL}/> )} />
              <Route exact path='/create/thread/:forum_slug' render={(props) => ( <CreateThreadForm {...props} url={constants.FORUM_LIST_URL}/> )} />
              <Route exact path='/create/post/:thread_slug' render={(props) => ( <CreatePostForm {...props} url={constants.THREAD_URL}/> )} />
              <Route exact path='/status' render={(props) => ( <Status {...props} url={constants.SERVICE_URL}/> )} />
            </Switch>
          </div>
    );
  }
}

export default App;
