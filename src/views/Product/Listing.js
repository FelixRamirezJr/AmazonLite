import React, { Component } from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductListing from '../../../src/components/ProductListing';
import HeroLanding from '../../../src/components/HeroLanding';

var util = require('../../../src/helper/utility');


class Listing extends Component {
  constructor(props){
    super(props);
    this.state = {
      hello: "Hello World",
      page: 1,
      itemArray: []
    };
  }

  componentDidMount(){
    fetch('https://node-apac-get-wrapper.herokuapp.com/item_search' +
      util.amazonSearch( this.state.page ),{
      method: 'GET',
      }).then((response) => response.json())
      .then((responseJson) => {
         //this.setState({ debugMessage: responseJson.ItemSearchResponse.toString() });
         this.setState({ itemArray: responseJson.ItemSearchResponse.Items.Item });
         return "okay";
      })
      .catch(function(error){
      //this.setState({ debugMessage: "failed" });
      throw error;
    });
  }

  render() {
    return (
      <div className="row">
        <HeroLanding />
        <div id="columns">
        {
             this.state.itemArray.map(function(item) {
                 return <ProductListing key={item.ASIN} item={item}  />
             })
        }
        </div>
      </div>
    );
  }
}

export default Listing;
