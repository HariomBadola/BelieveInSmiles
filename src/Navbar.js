import React from 'react'
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div>
        <section className='container'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="#">BIS</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Events">Events</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Stories">Stories</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Contact" >Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
    </div>
  )
}

export default Navbar;
