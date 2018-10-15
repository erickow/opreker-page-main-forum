import React, { Component } from 'react';
import { Tile } from 'carbon-components-react';
import Rating from './../rating/Rating';

import Logo from './../../../../assets/img/dummy.jpg';

class CardPreview extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render () {
    return (
      <div className="bx--col-md-3">
        <Tile>
          <img src={Logo} alt="logo" style={{width:'100%', height:'10rem'}}></img>
          <Rating rating={this.props.item.rating}/>
          <h4>{ this.props.item.title }</h4>
          <p>{ this.props.item.description }</p>
        </Tile>
      </div>
    );  
  }
}

export default CardPreview;