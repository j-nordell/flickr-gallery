/*jshint esversion: 6 */
import React, { Component } from 'react';
import Nav from './Nav';
import Form from './Form';
import PhotoContainer from './PhotoContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <Form history={this.props.history}></Form>
        <Nav></Nav>
        <PhotoContainer></PhotoContainer>
      </div>
    );
  }
}
  


export default Home;
