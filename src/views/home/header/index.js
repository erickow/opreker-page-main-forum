import React, { Component } from 'react';
import { Link } from 'carbon-components-react';
import './style.css';

import NavLogo from './../../../assets/img/favicon.ico';
import Logo1 from './../../../assets/img/dummy1.jpeg';

class HomeHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render () {
    return (
      <div>
        <div className="bx--row header-row" >
          <div className="bx--col-md-1 menu"  style={{flexBasis:'5%'}}>
            <Link className="" href="#">
            <img src={NavLogo} alt="logo" style={{width:'100%', height:'100%'}}></img>
            </Link>
          </div>
          <div className="bx--col-xs-1 menu menu-left">
            <Link className="menu-text" href="/" >
            Home
            </Link>
          </div>
          <div className="bx--col-xs-1 menu menu-left">
            <Link className="menu-text" href="/forum" style={{color:'white'}}>
            Forum
            </Link>
          </div>
          <div className="space-center"></div>
          <div className="bx--col-xs-1 menu menu-right">
            <Link className="menu-text" href="#" style={{color:'white'}}>
            About
            </Link>
          </div>
          <div className="bx--col-xs-1 menu">
            <Link className="menu-text" href="#" style={{color:'white'}}>
            Masuk
            </Link>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col" >
          <img src={Logo1} alt="logo" 
              style={{width:'100%', height:'30rem', zIndex:'-1', position:'absolute',marginTop:'-5rem'}}>
          </img>
          </div>
        </div>
      </div>
    );  
  }
}

export default HomeHeader;