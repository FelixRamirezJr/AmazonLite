import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Loading from './Loading';
import SimpleGallery from './SimpleGallery';

var util = require('../helper/utility');

class Product extends Component {

  constructor(props){
    super(props);
    this.state = {
      productSet: false,
      goBack: false
    };
    this.goBack = this.goBack.bind(this);
  }

  goBack(){
    this.setState({ goBack: true });
  }

  render() {

    /* Set gallery images */
    if( this.state.goBack ){
      return <Redirect to="/"/>;
    }
    var images = util.getGalleryProductImages( this.props.item.ImageSets );

    var price = "Not available";
    if( this.props.item.ItemAttributes.ListPrice ){
      price = this.props.item.ItemAttributes.ListPrice.FormattedPrice;
    }

    var dims = "Not available";
    if (this.props.item.ItemAttributes.ItemDimensions != undefined){
      dims = <span>
                      {this.props.item.ItemAttributes.ItemDimensions.Length["_"]}x
                      {this.props.item.ItemAttributes.ItemDimensions.Width["_"]}x
                      {this.props.item.ItemAttributes.ItemDimensions.Height["_"]} in {" "}
                      {this.props.item.ItemAttributes.ItemDimensions.Height["$"].Units}
                    </span>;
    }

    return (
      <div className="product">
        <div className="col s12 m7 left-container white-object">
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
              {dims}
            </div>
            <div className="title darker"> EAN </div>
            <div className="description lighter">
              {this.props.item.ItemAttributes.EAN}
            </div>
          </div>
        </div>
        <div className="col s12 m4 offset-m1 right-container white-object">
          <div className="price-title lighter"> List Price </div>
          <div className="info">
            <div className="price darker"> {price} </div>
            <a target="_blank" className="btn full" href={this.props.item.DetailPageURL}>
              Buy Now
            </a>
            <button className="btn full" onClick={this.goBack}> Go back </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
