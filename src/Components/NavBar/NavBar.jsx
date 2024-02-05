import React from 'react'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom'



 const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <nav className="navbar navbar-expand-lg p-3" data-bs-theme="dark">
        <div className="container">
          <Link className='app-logo fs-2 fw-bold' to="/">START FRAMWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`${pathname === '/about'? 'active':''} nav-link`} to="about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className={`${pathname === '/portofolio'? 'active':''} nav-link`} to="portofolio">PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link className={`${pathname === '/contact'? 'active':''} nav-link`} to="contact"> CONTACT</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;