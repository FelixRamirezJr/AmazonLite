import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoadingIcon from '../Loading.gif';


class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src={LoadingIcon} />
      </div>
    );
  }
}

export default Loading;
