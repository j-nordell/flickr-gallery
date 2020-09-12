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
import Form from './components/Form';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';
// import { render } from '@testing-library/react';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
          <div className="container">
            <Form></Form>
            <Nav></Nav>
            <Switch>
              <Route exact path="/" render={ () => <Redirect to="/search/microsoft" /> } />
              <Route exact path="/microsoft" component={PhotoContainer} />
              <Route exact path="/macintosh" component={PhotoContainer} />
              <Route exact path="/linux" component={PhotoContainer} />
              <Route path="/search/:term" component={PhotoContainer} />
              <Route component={NotFound} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
