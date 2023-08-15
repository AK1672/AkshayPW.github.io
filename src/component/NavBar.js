import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand">Akshay Shukla</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="btn" Link to="/">About Me</a>
        </li>
        <li class="nav-item">
          <a class="btn" Link to="/Journey">My Journey</a>
        </li>
      </ul>

    </div>
  </div>
      <section class="d-flex">      
      <a
        class="btn text-white btn-floating m-1"
        style={{background: "#0082ca"}}
        href="https://www.linkedin.com/in/akshay-shukla-71047b204"
        role="button"
        target="_blank" rel="noreferrer"
        ><i class="fa fa-linkedin"></i
      ></a>

      <a
        class="btn text-white btn-floating m-1"
        style={{background: "#333333"}}
        href="https://github.com/AK1672"
        target="_blank" rel="noreferrer"
        role="button"
        ><i class="fa fa-github"></i
      ></a>
    </section>
</nav>
    </>
  )
}
