import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-light  p-3">
      <ul className="nav justify-content-center flex-column flex-md-row  gap-3">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active">Management</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/welcome" className="nav-link" activeClassName="active">Welcome Message</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/welcomeform" className="nav-link" activeClassName="active">Welcome Form</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Welmess" className="nav-link" activeClassName="active">Text Message</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Documentupload" className="nav-link" activeClassName="active">Document Upload</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
