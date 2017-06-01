import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';

const logoUrl = require('../logoa.png');

class HeroLanding extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    };
  }

  // Simple vanilla script to go back to the home page...
  navigateHome(){
    window.location = "/";
  }

  render() {
    return (
      <div className="hero-comp" onClick={this.navigateHome}>
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
