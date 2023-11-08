import React from 'react';

const NavBar = () => {
  return (
    <div>
      <header className="container-fluid">
        <div className="row alt-header">
          <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div className="alt-img">
              <a href="/">
                <img src={`${process.env.PUBLIC_URL}/img/EnriqueDonaire.png`} width="50%" height="" alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div className="nav-links">
              <ul>
                <li>
                  <a href={`${process.env.PUBLIC_URL}/`}>| Work </a>
                </li>
                <li>
                  <a href={`${process.env.PUBLIC_URL}/about`}>| About</a>
                </li>
                <li>
                  <a href={`${process.env.PUBLIC_URL}/contact`}>| Contact</a>
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
