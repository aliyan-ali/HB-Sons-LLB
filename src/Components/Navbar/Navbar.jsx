import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="bordcast container d-flex justify-content-between">
        <img src="/assets/Frame 4.svg" alt="" />
        <img src="/assets/Time.svg" alt="" />
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent container">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            <img src="/assets/image 1.svg" alt="" srcset="" />
          </a>
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
                <a class="nav-link active text-danger" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  tabindex="-1"
                >
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  tabindex="-1"
                >
                  Contect us
                </a>
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