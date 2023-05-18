import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav">
        <h1 className='nav-title'>WORLDWIDE TIMEKEEPER</h1>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/search" className="nav-link">Search</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/clocks" className="nav-link">Clocks List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/addNewClock" className="nav-link">Add New Clock</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
