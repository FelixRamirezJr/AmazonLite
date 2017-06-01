/* ProductListing.js Component takes in a amazon search index item and creates
 * a Pintrest like box with the given item info. This component will be
 * called from the Grid view(Pages/Listing.js).
*/
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Loading from './Loading';

class ProductListing extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      redirectTo: "Product/" + this.props.item.ASIN
    };
    this.goToItem = this.goToItem.bind(this);
  }
  goToItem(){
    this.setState({ redirect: true });
  }

  // Make sure no null values are passed in and crashes system
  componentWillReceiveProps(nextProps) {
    if(nextProps.item.ItemAttributes.ListPrice.FormattedPrice != undefined ){
      this.setState({ listPrice: nextProps.item.ItemAttributes.ListPrice });
    }
  }
  render() {
    if( this.state.redirect ){
      return <Redirect push to={this.state.redirectTo}/>
    }
    var price = "Not available";
    if( this.props.item.ItemAttributes.ListPrice != undefined ) {
      price = this.props.item.ItemAttributes.ListPrice.FormattedPrice;
    }
    return (
      <div className="amazon-item z-depth-2">
        <img src={this.props.item.LargeImage.URL} onClick={this.goToItem}/>
        <div className="itemInfo">
        <a href={this.state.redirectTo} className="title darker">
          {this.props.item.ItemAttributes.Title}
        </a>
        <div className="price"> {price} </div>
        </div>

      </div>
    );
  }
}

export default ProductListing;
