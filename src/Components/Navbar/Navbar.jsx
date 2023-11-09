import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="nav-container">
      <div className="bordcast container d-flex justify-content-between">
        <img src="/assets/Frame 4.svg" alt="" />
        <img src="/assets/Time.svg" alt="" />
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent container">
        <div class="container-fluid ">
          <Link class="navbar-brand" to="/">
            <img src="/assets/image 1.svg" alt="" srcset="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active text-danger" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link "
                  to="/services"
                  tabindex="-1">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link "
                  to="/contectus"
                  tabindex="-1">
                  Contect us
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-danger rounded-pill" type="submit">
                Register/login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </nav>
  );
}

export default Navbar