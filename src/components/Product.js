import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Loading from './Loading';
import SimpleGallery from './SimpleGallery';

var util = require('../helper/utility');

class Product extends Component {

  constructor(props){
    super(props);
    this.state = {
      productSet: false
    };
  }

  componentDidMount(){

  }

  render() {

    /* Set gallery images */
    var images = util.getGalleryProductImages( this.props.item.ImageSets );

    return (
      <div>
        <div className="col s12 m7">
          <SimpleGallery exampleImage={this.props.item.LargeImage.URL} images={images} />
        </div>
        <div className="col s6 push-s2">
          
        </div>
      </div>
    );
  }
}

export default Product;
