import React, {Component} from 'react';
import { } from 'carbon-components-react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

import {connect} from 'react-redux';
import {getPopulars} from '../../HomeAction'
import PropTypes from 'prop-types';

import CardPreview from './../cardPreview/CardPreview';

class SliderComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getPopulars();
  }
  render(){
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      focusOnSelect: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 715,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const {populars} = this.props.items;

    var items = populars;

    items = items.map(function(item, index) {
      return(
        <CardPreview item={item} key={index}/>
      );
    });
    return(
      <div className="">
        <Slider {...settings}>
          { items }          
        </Slider>
      </div>
    );
  }
}
SliderComponent.propTypes = {
  getPopulars: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
}
const mapStateToProps = (state) =>({
  items: state.home
});

export default connect(mapStateToProps, {getPopulars})(SliderComponent);