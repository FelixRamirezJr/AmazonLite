import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class ProductListing extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      asin: "",
      largeImage: "",
      listPrice: ""
    };
    this.goToItem = this.goToItem.bind(this);
  }
  goToItem(){
    this.setState({ redirect: true });
  }

  // Make sure no null values are passed in and crashes system
  componentWillReceiveProps(nextProps) {
    if(nextProps.item.ItemAttributes.ListPrice != null){
      this.setState({ listPrice: nextProps.item.ItemAttributes.ListPrice });
    }
  }
  render() {
    if( this.state.redirect ){
      var redirectTo = "Product/" + this.props.item.ASIN;
      return <Redirect push to={redirectTo}/>
    }
    return (
      <div className="amazon-item z-depth-2" onClick={this.goToItem}>
        <img src={this.props.item.LargeImage.URL}/>
        <p>  for {this.state.listPrice} </p>
      </div>
    );
  }
}

export default ProductListing;
