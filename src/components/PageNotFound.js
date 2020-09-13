/*jshint esversion: 6 */
import React from 'react';

/**
 * Returns HTML if the route is invalid.
 */
const PageNotFound = () => {
  return(
    <li className="not-found">
      <h3>No Matching Route found</h3>
      <p>The page and/or route you requested does not exist on this server. Please try again.</p>
    </li>
  );
}

export default PageNotFound;