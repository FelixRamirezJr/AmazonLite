import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductListing extends Component {
  render() {
    return (
      <div className="col s4">
        <div className="card">
          <div className="card-image">
            <img src={this.props.item.LargeImage.URL}/>
          </div>
          <div className="card-content">
            {this.props.item.ItemAttributes.Title}
          </div>
          <div className="card-action">
            <a href="#"> {this.props.item.ItemAttributes.ListPrice.FormattedPrice} </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListing;
