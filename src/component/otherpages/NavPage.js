import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavPage = () => {
  return (
    <div className="container my-1">
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Crud-App using React-17
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </div>
          </div>

          <Link exact to="/addnew" className="btn btn-outline-light">
            Add New (+)
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavPage;
