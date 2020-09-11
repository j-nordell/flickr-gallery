/*jshint esversion: 6 */
import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = () => {
  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        <Photo></Photo>
        <Photo></Photo>
        <Photo></Photo>
        <Photo></Photo>
        {/* <!-- Not Found --> */}
        <NotFound></NotFound>
      </ul>
    </div>
  );
}

export default PhotoContainer;