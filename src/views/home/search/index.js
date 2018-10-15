import React, { Component } from 'react';
import './style.css'
import { Search } from 'carbon-components-react';



class FileName extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render () {
    return (
      
      <div className="bx--row" style={{marginTop:'5rem'}}>
      <div className="bx--offset-md-2 bx--col-md-8" >
        <div className="bx--tile-custom">
            <Search
              className="search-input"
              id="search-item"
              labelText="search"
              placeHolderText="Cari Gadget"
            />
        </div>
      </div>
    </div>
    );  
  }
}

export default FileName;