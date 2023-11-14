import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/sass/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <header className="container-fluid">
      <div className="row alt-header">
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
          <div className="alt-img">
            <Link to="/Portfolio-AV/">
              <img
                src={`${process.env.PUBLIC_URL}/img/EnriqueDonaire.png`}
                alt="logo"
                className="logo-img"
              />
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/Portfolio-AV/">| Work </Link>
              </li>
              <li>
                <Link to="/about">| About</Link>
              </li>
              <li>
                <Link to="/contact"> | Contact</Link>
              </li>
              <li>
                <a href="/Portfolio-AV/Enrique Donaire Videographer.pdf.pdf" download target='_blank' rel='noreferrer'>
                  | CV <FontAwesomeIcon icon={faFilePdf} size="lg" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
