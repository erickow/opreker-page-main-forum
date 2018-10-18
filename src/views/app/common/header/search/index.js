import React, { Component } from 'react';
import './style.css'
import { Search, ComboBox } from 'carbon-components-react';



class FileName extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event){

  }
  render () {
    return (
      <div className="bx--tile-custom">
        <div className="bx--row">
          <div className="bx--col-md-9">
            <Search
              className="search-input"
              id="search-item"
              labelText="search"
              placeHolderText="Cari Gadget"
            />
          </div>
          <div className="bx--col-md-3">
            <ComboBox className="custom-combobox"
              items={[
                {id: 'option-1',text: 'Option 1'},
                {id: 'option-2',text: 'Option 2'},
                {id: 'option-3',text: 'Option 3'}
              ]}
              placeholder="Category"
              onChange={this.onChange}
            />
          </div>
        </div>  
      </div>
    );  
  }
}

export default FileName;