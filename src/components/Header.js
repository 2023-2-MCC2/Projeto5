import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

function Header(){
    return(
<header>
      <nav class="container">
        <nav class="navbar navbar-light bg-$gray-800 fixed-top">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand transparent-after-scroll">Tracksuit Project </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-light" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">TRACKSUIT INITIATIVE</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/about" class="nav-link">Sobre nós</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Mais
                    </a>
                    <ul class="dropdown-menu dropdown-menu-light">
                      <li><Link to="/contact" class="dropdown-item">Entre em contato</Link></li>
                      <li><Link to="https://allmylinks.com/tracksuitprojects-donates1" target="_blank" class="dropdown-item">Doe para as Instituições</Link></li>
                      </ul>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </nav>
      </nav>
    </header>
    )
}

export default Header;