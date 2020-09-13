/*jshint esversion: 6 */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/microsoft'>Microsoft</NavLink></li>
        <li><NavLink to='/macintosh'>Macintosh</NavLink></li>
        <li><NavLink to='/linux'>Linux</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;