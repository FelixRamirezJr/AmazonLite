import React, { Component } from 'react';
import {Switch,Route,Link} from 'react-router-dom';

class Show extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.match.params.id
    };
  }
  render() {
    return (
      <div>
        Show product for {this.state.id} skeleton
      </div>
    );
  }
}

export default Show;
