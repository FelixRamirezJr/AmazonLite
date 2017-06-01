import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const logoUrl = require('../logoa.png');

class HeroLanding extends Component {
  render() {
    return (
      <div className="hero-comp">
        <div className="row welcome-nav">
          <div className="col s12">
            <div className="logo">
              Amazon Lite
              <img className="smile" src={logoUrl}/>
            </div>
          </div>
        </div>
        <div className="hero hero-landing">
          <span> Harry Potter Edition </span>
        </div>
      </div>
    );
  }
}

export default HeroLanding;
