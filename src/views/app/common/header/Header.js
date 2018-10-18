import React, { Component } from 'react';
import { Link } from 'carbon-components-react';
import SearchHeader from './search'

import NavLogo from './../../../../assets/img/favicon.ico'

class ForumHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render () {
    return (
      <div className="bx--row header-style">
          <div className="bx--col-md-2 header-menu">
            <img src={NavLogo} alt="logo"></img>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <Link href="/">
            Home
            </Link>
          </div>
          <div className="bx--col-md-6 header-menu header-border">
            <SearchHeader></SearchHeader>
          </div>
          <div className="bx--col-md-2 header-menu">
            <Link href="#">
            About
            </Link>
          </div>
          <div className="bx--col-md-2 header-menu">
            <Link href="#">
            Sign In
            </Link>
          </div>
        </div>
    );  
  }
}

export default ForumHeader;