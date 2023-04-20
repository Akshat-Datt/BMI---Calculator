import React from 'react'
import BMI from './BMI.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const myColor = {
    color: 'rgba(255, 173, 102, 1)',
    fontWeight: 'bold',
    
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src={BMI} alt="BMI"/>
    </Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={myColor}>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/history" style={myColor}>HISTORY</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-danger" type="submit">
          <Link className="nav-link" id="aaa" to="/About">ABOUT</Link>
        </button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar