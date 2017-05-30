import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const logoUrl = require('../logoa.png');
const guestUrl = require('../me.jpg');

class HeroLanding extends Component {
  render() {
    return (
      <div className="hero-comp">
        <div className="row welcome-nav">
          <div className="col s12 m3">
            <div className="logo">
              Amazon Lite
              <img className="smile" src={logoUrl}/>
            </div>
          </div>
          <div className="col s12 m9">
            <div className="right">
              Hello
            </div>
          </div>
        </div>
        <div className="hero hero-landing">
          Some cool pictures later
        </div>
      </div>
    );
  }
}

export default HeroLanding;
