import React, { Component } from 'react';
import {Switch,Route,Link} from 'react-router-dom';

class Listing extends Component {
  constructor(props){
    super(props);
    this.state = {
      hello: "Hello World"
    };
  }
  render() {
    return (
      <div>
          Listing Skeleton
          <Link to='/Product/3'> Go to My Product </Link>
      </div>
    );
  }
}

export default Listing;
