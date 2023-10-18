import { NavLink } from 'react-router-dom'
import logo from '../../images/react.png'
import React from 'react'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className='container-fluid'>
            <img src={logo} alt='logo' style={{height:"35px"}}/>
            <div className="navbar-brand">
              ProjectOPedia
            </div>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
              </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/topicscovered">
                    Topics
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}
export default Header