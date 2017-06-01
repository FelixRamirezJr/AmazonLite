/* Loading.js component is used throughout the application whenever we need
 * to wait or load. This component will just play a centered loading icon gif. 
*/
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
