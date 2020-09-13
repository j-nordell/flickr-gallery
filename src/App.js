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
import PageNotFound from './components/PageNotFound';
import LoadingSpinner from './components/LoadingSpinner';
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

    /**
     * When the App mounts three separate calls are made to the Flickr API
     * and stored in the appropriate state properties so that the call is not
     * made every time a link is clicked, but only once
     */  
    componentDidMount() {
        /* gets the results for the search "microsoft" */
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=microsoft&per_page=24&format=json&nojsoncallback=1`)
          .then(response =>  {
              this.setState({
                microsoft: response.data.photos.photo
              });
          })
          .catch(error =>  {
            console.log("Error parsing/fetching data", error);
          });
        /* gets the results for the search "macintosh" */
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=macintosh&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
            this.setState({
              macintosh: response.data.photos.photo
            });
          })
          .catch(error => {
            console.log("Error parsing/fetching data", error);
          });
        /* Gets the results for the search "linux" */
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
    
    /* dynamic search based on what the user enters in the search box */
    performSearch = (searchTerm) => {
      this.setState({ loading: true }, () => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
              setTimeout(() => {
              this.setState({
                searchResults: response.data.photos.photo,
                loading: false
              });
            }, 3000);
            })
            .catch(error => {
            console.log("Error parsing/fetching data", error);
          });
        });
      }
    
    /* controls the routing of the app and passes down needed properties of the app to the components */
    render() {
      return(
      <BrowserRouter>
          <div className="container">
            <Switch>
              <Route exact path="/" render={ () => <Redirect to="/microsoft" />} />
              <Route exact path="/microsoft" render={(props) => <Home {...props} results={this.state.microsoft} searchFunction={this.performSearch}/>}/>
              <Route exact path="/macintosh" render={(props) => <Home {...props} results={this.state.macintosh} searchFunction={this.performSearch}/>} />
              <Route exact path="/linux" render={(props) => <Home {...props} results={this.state.linux} searchFunction={this.performSearch}/> }/>
              <Route exact path="/search/:term" render={(props) => this.state.loading ? <LoadingSpinner /> : <Home {...props} results={this.state.searchResults} searchFunction={this.performSearch} />} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
      </BrowserRouter>
    );
    }
  }


export default App;
