import React from 'react'

export const NavBar = () => {
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Link-1
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Link-2
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Link-3
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
                <button type="button" className="btn btn-info">
                  Sign-up
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
