/*jshint esversion: 6 */
import React from 'react';

const Nav = () => {
  return(
    <nav className="main-nav">
      <ul>
        <li><a href='#top'>Cats</a></li>
        <li><a href='#top'>Dogs</a></li>
        <li><a href='#top'>Computers</a></li>
      </ul>
    </nav>
  );
}

export default Nav;