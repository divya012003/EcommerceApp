import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to='/' className="navbar-brand" href="#"><img style={{ height: "40px", marginLeft: "40px" }} src="/images/img/logo.png" alt="" srcSet="" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <form className="d-flex w-50" role="search">
              <input className="form-control mx-4 me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            < ul className='navbar-nav m-auto fw-bold'>
              {/* <li className='nav-item'>
                <NavLink to='/' className="nav-link text-danger "> Home </NavLink >
              </li> */}

              <li className='nav-item mx-4'>
                <NavLink to="/product" className="nav-link text-dark">Products</NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" href="#">Action</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#">Another action</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item" href="#">Something else here</NavLink></li>
                </ul>
              </li>

              <li className='nav-item mx-4'>
                <NavLink to="/contact" className="nav-link text-dark">Contact</NavLink>
              </li>

              <li className='nav-item mx-4'>
                <NavLink to="/wishlist" className="nav-link text-dark"><i class="fa-solid fa-heart" style={{ color: "#c40824" }}></i></NavLink>
              </li>
              <li className='nav-item mx-4'>
                <NavLink to="/cart" className="nav-link  text-dark"><i class="fa-solid fa-cart-shopping"></i></NavLink>
              </li>
              <div className="dropdown my-2 mx-4">
                <NavLink href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa-solid fa-user" style={{ color: "black" }}></i></NavLink>
                <div class="dropdown-menu">
                  <NavLink href="#" className="dropdown-item">Login</NavLink>
                  <NavLink href="#" className="dropdown-item">Register</NavLink>
                </div>
              </div>
            </ul>
            
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar;