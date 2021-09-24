import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mirror Today
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/general"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  GENERAL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  HEALTH
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  ENTERTAINMENT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  SPORTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  BUSINESS
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  TECHNOLOGY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
