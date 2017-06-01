import React, { Component } from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import Product from '../../components/Product';
import Loading from '../../../src/components/Loading';

var util = require('../../helper/utility');

class Show extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.match.params.id,
      item: false,
      debug: ""
    };
  }
  componentDidMount(){
    this.setState({ debug: 'https://node-apac-get-wrapper.herokuapp.com/item_lookup' + util.getAmazonProduct( this.state.id )});
    fetch('https://node-apac-get-wrapper.herokuapp.com/item_lookup' +
      util.getAmazonProduct( this.state.id ),{
      method: 'GET',
      }).then((response) => response.json())
      .then((responseJson) => {
         this.setState({ item: responseJson.ItemLookupResponse.Items.Item });
         return "okay";
      })
      .catch(function(error){
      throw error;
    });
  }
  render() {
    if( this.state.item == false){
      return <Loading />
    }
    return (
      <div className="row product-page">
        <Product asin={this.state.id} item={this.state.item} />
      </div>
    );
  }
}

export default Show;
