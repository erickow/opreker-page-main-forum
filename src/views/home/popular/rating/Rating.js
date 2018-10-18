import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './style.css'

class Rating extends Component{
  render(){
    return(
      <div className="rating-custom">
        <StarRatingComponent 
          name="rate" 
          value={this.props.rating}
        />
      </div>
    );
  }
}

export default Rating;