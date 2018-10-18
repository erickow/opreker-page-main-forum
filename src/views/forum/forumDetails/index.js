import React, { Component } from 'react';
import { Tile } from 'carbon-components-react';
import Rating from './rating/Rating'

import Logo from './../../../assets/img/dummy.jpg';

class ForumDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render () {
    return (
      <div className="bx--grid">
        <div className="bx--row" style={{margin:'1rem'}}>
          <div className="bx--col-md-12" >
            <Tile>
            <div className="bx--row">
              <div className="bx--col-md-4" >
                <Tile>
                  <img src={Logo} alt="logo" style={{width:'100%', height:'15rem'}}></img>
                </Tile>
              </div>
              <div className="bx--col-md-8" >
                <Tile style={{width:'100%', height:'100%'}}>
                  
                  <div className="bx--row">
                  
                    <div className="bx--col-md-7" >
                    <h4> Xiaomi Redmi Note 5 Details</h4>
                    <br></br>
                      <ul style={{listStyleType: 'circle', marginLeft:'20px'}}>
                        <li>
                          Processor : Snapdragon 636
                        </li>
                        <br></br>
                        <li>
                          Camera : 16mp
                        </li>
                        <br></br>
                        <li>
                          Batery : 4000mAh
                        </li>
                        <br></br>
                        <li>
                          Display : Full Screen Display 16:9
                        </li>
                      </ul>
                    </div>
                    <div className="bx--col-md-5" >
                    <div style={{width:'100%', height:'100%'}}>
                      <h5>Rating</h5>
                      <br></br>
                      <br></br>
                      <span style={{fontSize:'100px'}}>&nbsp;5.0</span>
                      <br></br>
                      <Rating></Rating>
                    </div>
                    </div>
                  </div>
                </Tile>
              </div>
            </div>
            </Tile>
          </div>
        </div>
      </div>
    );  
  }
}

export default ForumDetail;