import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [activeLi, setActiveLi] = useState(null);
  const handleClick = (activeLi)=>{
    setActiveLi(activeLi);
  }

  const getActiveClass = (isActive) => {
    return isActive ? "nav-link active" : "nav-link";
  }
  const NAV_BAR_TABS = [
    {general:  "HOME"},
    {about: "ABOUT ME"},
    {health: "HEALTH"},
    {entertainment: "ENTERTAINMENT"},
    {sports: "SPORTS"},
    {business: "BUSINESS"},
    {technology: "TECHNOLOGY"}
  ]

  const iterateNavBars = () => {
    return  NAV_BAR_TABS.map((v)=>{
      const keys = Object.keys(v);
      const k = keys[0]
        const to = "/"+k;
        return (
        <li className="nav-item" onClick={()=>handleClick(k)}>
          <Link
            className={getActiveClass(activeLi == k)} 
            aria-current="page"
            to={to}
          >
          {v[k]}
          </Link>
      </li>)
    })

  }
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
              {iterateNavBars()}
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
