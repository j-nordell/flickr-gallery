/*jshint esversion: 6 */
import React from 'react';

/**
 * Takes the props object and uses the URL to create a list item for the picture
 * @param {Object} props 
 */
const Photo = (props) => {
  return(
    <li>
      <img src={`${props.url}`} alt="" />
    </li>
  );  
}

export default Photo;