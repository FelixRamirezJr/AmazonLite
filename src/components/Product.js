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

  render() {

    /* Set gallery images */
    var images = util.getGalleryProductImages( this.props.item.ImageSets );

    return (
      <div className="product">
        <div className="col s12 m7 left-container">
          <SimpleGallery exampleImage={this.props.item.LargeImage.URL} images={images} />
          <div className="info">
            <div className="title darker"> {this.props.item.ItemAttributes.Title } </div>
            <div className="author"> By {this.props.item.ItemAttributes.Author}  </div>
          </div>
          <div className="amazon-info">
            <div className="title darker"> Manufacturer </div>
            <div className="description lighter"> {this.props.item.ItemAttributes.Manufacturer} </div>
            <div className="title darker"> Dimensions (LxWxH) </div>
            <div className="description lighter">
              {this.props.item.ItemAttributes.ItemDimensions.Length["_"]}x
              {this.props.item.ItemAttributes.ItemDimensions.Width["_"]}x
              {this.props.item.ItemAttributes.ItemDimensions.Height["_"]} in {" "}
              {this.props.item.ItemAttributes.ItemDimensions.Height["$"].Units}
            </div>
            <div className="title darker"> Amazon URL </div>
            <div className="description lighter">
              <a className="truncate" href={this.props.item.DetailPageURL}> 
                {this.props.item.DetailPageURL}
              </a>
            </div>
          </div>
        </div>
        <div className="col s6 push-s2">

        </div>
      </div>
    );
  }
}

export default Product;
