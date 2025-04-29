import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Women's Safety App</h1>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/home-page"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ReportIncident"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              Report Incident
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/safety-tips"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              Safety Tips
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nearby-help"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              Nearby Help
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
