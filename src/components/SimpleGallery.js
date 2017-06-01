import React, { Component } from 'react';
import {Link} from 'react-router-dom';

var util = require('../helper/utility');

class SimpleGallery extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="gallery-container">
        <div className="gallery">
          <img src={this.props.exampleImage} />
        </div>
        <div className="thumbnails">
          <ul className="thumbnail-list">
          {
            this.props.images.map(function(image){
              return <li> <img src={image.thumbnail} /> </li>
            })
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default SimpleGallery;
