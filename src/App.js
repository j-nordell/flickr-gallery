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
          })
          .catch(error =>  {
            console.log("Error parsing/fetching data", error);
          });
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=macintosh&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
            this.setState({
              macintosh: response.data.photos.photo
            });
          })
          .catch(error => {
            console.log("Error parsing/fetching data", error);
          });
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=linux&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
            this.setState({
              linux: response.data.photos.photo
            });
          })
          .catch(error => {
            console.log("Error parsing/fetching data", error);
          });
    }
    
    performSearch = (searchTerm) => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
            this.setState({
              searchResults: response.data.photos.photo
            });
          })
          .catch(error => {
            console.log("Error parsing/fetching data", error);
          });
      }

    render() {
      return(
      <BrowserRouter>
          <div className="container">
            <Switch>
              <Route exact path="/" render={ () => <Redirect to="/microsoft" />} />
              <Route exact path="/microsoft" render={(props) => <Home {...props} results={this.state.microsoft} searchFunction={this.performSearch}/>}/>
              <Route exact path="/macintosh" render={(props) => <Home {...props} results={this.state.macintosh} searchFunction={this.performSearch}/>} />
              <Route exact path="/linux" render={(props) => <Home {...props} results={this.state.linux} searchFunction={this.performSearch}/> }/>
              <Route exact path="/search/:term" render={(props) => <Home {...props} results={this.state.searchResults} searchFunction={this.performSearch} />} />
              <Route component={NotFound} />
            </Switch>
          </div>
      </BrowserRouter>
    );
    }
  }


export default App;
