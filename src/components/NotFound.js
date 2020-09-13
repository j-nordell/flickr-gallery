/*jshint esversion: 6 */
import React from 'react';

/**
 * Returns HTML if the search yielded no results
 */
const NotFound = () => {
  return(
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
  );
}

export default NotFound;