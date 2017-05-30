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

    };
  }
  render() {
    var items = this.state.items;

    return (
      <div className="start">
        <HeroLanding />
      </div>
    );
  }
}

export default Listing;
