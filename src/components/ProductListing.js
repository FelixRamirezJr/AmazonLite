import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class ProductListing extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    };
    this.goToItem = this.goToItem.bind(this);
  }
  goToItem(){
    this.setState({ redirect: true });
  }
  render() {
    if( this.state.redirect ){
      var redirectTo = "Product/" + this.props.item.ASIN;
      return <Redirect push to={redirectTo}/>
    }
    return (
      <div className="amazon-item z-depth-2" onClick={this.goToItem}>
        <img src={this.props.item.LargeImage.URL}/>
        <p>  for {this.props.item.ItemAttributes.ListPrice.FormattedPrice} </p>
      </div>
    );
  }
}

export default ProductListing;
