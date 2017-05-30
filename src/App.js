import React, { Component } from 'react';
import './App.css';
import './Product.css';
import {Switch,Route} from 'react-router-dom';

import Listing from './views/Product/Listing';
import Show from './views/Product/Show';

class App extends Component {
  render() {
    return (
      <div className="container-wide">
        <Switch>
          <Route exact path='/' component={Listing}/>
          <Route path='/Product/:id' component={Show} />
        </Switch>
      </div>
    );
  }
}

export default App;
