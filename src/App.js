/*jshint esversion: 6 */
import React, { Component } from 'react';
import axios from 'axios';
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
import apiKey from './config';

// import { render } from '@testing-library/react';

class App extends Component { 

    constructor() {
      super();
      this.state = {
        microsoft: [],
        macintosh: [],
        linux: [],
        searchResults: []
      };
    }

    componentDidMount() {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=microsoft&per_page=24&format=json&nojsoncallback=1`)
          .then(response =>  {
              this.setState({
                microsoft: response.data.photos.photo
              });
              console.log(this.state.microsoft);
          })
          .catch(error =>  {
            console.log("Error parsing/fetching data", error);
          });

    }

    render() {
      return(
      <BrowserRouter>
          <div className="container">
            <Switch>
              <Route exact path="/" render={ () => <Redirect to="/microsoft" />} />
              <Route exact path="/microsoft" render={() => <Home results={this.state.microsoft}/>}/>
              <Route exact path="/macintosh" component={Home} />
              <Route exact path="/linux" component={Home} />
              <Route exact path="/search/:term" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
      </BrowserRouter>
    );
    }
  }


export default App;
