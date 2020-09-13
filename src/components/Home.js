/*jshint esversion: 6 */
import React, { Component } from 'react';
import Nav from './Nav';
import Form from './Form';
import PhotoContainer from './PhotoContainer';

class Home extends Component {
  /** Component that displays the basic layout and passes needed information to the
   *  Form and PhotoContainer components
   */
  render() {
    return (
      <div>
        <Form history={this.props.history} searchFunction={this.props.searchFunction} />
        <Nav />
        <PhotoContainer data={this.props.results}/>
      </div>
    );
  }
}
  


export default Home;
