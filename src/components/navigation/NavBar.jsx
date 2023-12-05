import React from 'react'
import { Links } from './Links'
import { links } from '../../data/Menu'
import { Login } from './Login';

export const NavBar = () => {
  const ulStyle = "navbar-nav me-auto mb-2 mb-lg-0";
  const liStyle = "nav-item";
  const aStyle = "nav-link active text-white";

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
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
            <Links options={{ links, ulStyle, liStyle, aStyle }} />
            <Login/>
            
          </div>
        </div>
      </nav>
    </>
  )
}
