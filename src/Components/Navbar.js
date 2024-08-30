import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-dark">
  <div className="container-fluid text-center">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
        <li className="nav-item strong">
          <Link className="nav-link active text-dark" aria-current="page" to="/">NEW ARRIVALS</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/form">CAST & CREW</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-dark" to="/contact">WOMEN</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-dark" to="/Products">MEN</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-dark" to="/Products">BOYS&GIRLS</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-dark" to="/Products">FRAGRANCES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/Products">MAKEUP</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/Products">CATALOUGE</Link>
        </li>
      
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar

