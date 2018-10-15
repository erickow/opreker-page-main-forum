import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './style.css'

class Rating extends Component{
  render(){
    return(
      <div className="rating-custom">
        <StarRatingComponent 
          name="rate" 
          value={5}
        />
      </div>
    );
  }
}

export default Rating;