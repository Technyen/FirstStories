import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
    return (
        <div className='Header'>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">CHILDREN STORIES</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </div>
    )
  }

  export default Header