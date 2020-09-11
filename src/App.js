/*jshint esversion: 6 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

function App() {
  return (
      <body>
        <div class="container">
          <Form></Form>
          <Nav></Nav>
          <PhotoContainer></PhotoContainer>
        </div>
      </body>
  );
}

export default App;
