/* App.js in the main entry point of our single page react app.
 * The application utilizes React-Router-Dom
*/
import React, { Component } from 'react';
import './App.css';
import './Product.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/Nav';
import Listing from './views/Product/Listing';
import Show from './views/Product/Show';

class App extends Component {
  render() {
    return (
      <div className="container-wide">
        <div className="row">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Listing}/>
            <Route path='/Product/:id' component={Show} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
