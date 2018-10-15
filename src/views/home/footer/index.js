import React, {Component} from 'react';
import {Tile} from 'carbon-components-react';
import './style.css';

class HomeFooter extends Component{
  render(){
    return(
      <div className="bx--row footer-custom">
        <div className="bx--col-md-12">
          <Tile>
            Copyright @2018
          </Tile>
        </div>
      </div>
    );
  }
}

export default HomeFooter;