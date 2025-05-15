import React from 'react';
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <nav className="bg-light p-3">
      <ul className="nav justify-content-center flex-column flex-md-row gap-3">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Management
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/welcome"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Welcome Message
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/welcomeform"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Welcome Form
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Welmess"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Text Message
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Documentupload"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Document Upload
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
