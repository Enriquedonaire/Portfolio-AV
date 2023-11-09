import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <header className="container-fluid">
        <div className="row alt-header">
          <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div className="alt-img">
              <Link to="/Portfolio-AV">
                <img src={`${process.env.PUBLIC_URL}/img/EnriqueDonaire.png`} width="50%" height="" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div className="nav-links">
              <ul>
                <li>
                  <Link to='/Portfolio-AV'>| Work </Link>
                </li>
                <li>
                  <Link to='/Portfolio-AV/about'>| About</Link>
                </li>
                <li>
                  <Link to='/Portfolio-AV/contact'> | Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
