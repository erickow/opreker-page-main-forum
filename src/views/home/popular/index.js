import React, { Component } from 'react';
import {Tile } from 'carbon-components-react';
import './style.css';

import Slider from './slider/Slider'

class HomePopular extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render () {
    return (
      <div>
        <Tile className="tile-popular">
          <div className="bx--row" >
            <div className="bx--col-md-12" style={{textAlign: 'center'}} >
              <h2>Popular Gadget</h2>
            </div>
            <div className="bx--col-md-12 slider-custom">
              <Slider/>
            </div>
          </div>
        </Tile>
      </div>
    );  
  }
}

export default HomePopular;