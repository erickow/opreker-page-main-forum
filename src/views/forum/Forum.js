import React, { Component } from 'react';
import ForumHeader from './../app/common/header/Header';
import ForumDetail from './forumDetails';
import ThreadList from './threadList'
import { } from 'carbon-components-react';

class Forum extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render () {
    return (
      <div>
        <ForumHeader/>
        <ForumDetail/>
        <ThreadList/>
      </div>
    );  
  }
}

export default Forum;