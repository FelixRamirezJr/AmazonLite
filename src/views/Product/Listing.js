import React, { Component } from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../../../src/components/Loading';
import ProductListing from '../../../src/components/ProductListing';
var util = require('../../../src/helper/utility');


class Listing extends Component {
  constructor(props){
    super(props);
    this.state = {
      hello: "Hello World",
      itemArray: [],
      numberOfPages: 6 // One page == 10 items. We need to get at least 50.
    };
    this.populateGrid();
  }

  populateGrid(page){
    for( var i = 1; i < this.state.numberOfPages + 1; i++ )
    {
      fetch('https://node-apac-get-wrapper.herokuapp.com/item_search' +
        util.amazonSearch( i ),{
        method: 'GET',
        }).then((response) => response.json())
        .then((responseJson) => {
           var currArr = this.state.itemArray;
           var productArr = responseJson.ItemSearchResponse.Items.Item;
           for( var i = 0; i < productArr.length; i++ )
           {
             currArr.push( <ProductListing key={productArr[i].ASIN} item={productArr[i]} /> );
           }
           this.setState({ itemArray: currArr });
           return "okay";
        })
        .catch(function(error){
        throw error;
      });
    }
  }

  render() {
    var productGrid = null;
    if( this.state.itemArray.length < this.state.numberOfPages * util.perPage ){
      productGrid = <Loading />;
    } else {
      productGrid = this.state.itemArray;
    }
    return (
        <div id="columns">
          {productGrid}
        </div>
    );
  }
}

export default Listing;
