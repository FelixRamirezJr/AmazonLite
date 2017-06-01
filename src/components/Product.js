import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Loading from './Loading';

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
    if( !this.state.productSet ){
      return <Loading />;
    }
    return (
      <div> Fun </div>
    );
  }
}

export default Product;
