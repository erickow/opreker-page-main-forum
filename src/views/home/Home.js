import React, { Component } from 'react';
import {} from 'carbon-components-react';

import HomeHeader from './header';
import HomeSearch from './search';
import HomePopular from './popular';
import HomeFooter from './footer';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render () {
    return (
      <div className="" >
        <HomeHeader/>
        <HomeSearch/>
        <HomePopular/>
        <HomeFooter/>
      </div>
    );  
  }
}

export default Home;