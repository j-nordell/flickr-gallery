/*jshint esversion: 6 */
import React, { Component } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
// import { render } from '@testing-library/react';

class App extends Component { 
    render() {
      return(
      <BrowserRouter>
          <div className="container">
            <Switch>
              <Route exact path="/" render={ () => <Redirect to="/search/microsoft" />} />
              <Route exact path="/search/microsoft" component={Home} />
              <Route exact path="/search/macintosh" component={Home} />
              <Route exact path="/search/linux" component={Home} />
              <Route exact path="/search/:term" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
      </BrowserRouter>
    );
    }
  }


export default App;
