/*jshint esversion: 6 */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink to={'/search/microsoft'}>Microsoft</NavLink></li>
        <li><NavLink to='/search/macintosh'>Macintosh</NavLink></li>
        <li><NavLink to='/search/linux'>Linux</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;