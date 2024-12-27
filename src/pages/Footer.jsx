import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faVimeoV, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div>
      <footer className="container-fluid">
        <section className="icons container-fluid">
          <div className="icon">
            <a href="https://vimeo.com/user187493171" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon className="fa-brands fa-vimeo-v" icon={faVimeoV} />
            </a>
            <a href="https://www.instagram.com/kikidonaire/" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon className="fa-brands fa-pinterest" icon={faInstagram} />
            </a>
            <a href="https://www.github.com/Enriquedonaire" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon className="fa-brands fa-behance" icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/enrique-a-donaire" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon className="fa-brands fa-linkedin-in" icon={faLinkedinIn} />
            </a>
          </div>
        </section>
        <p>Copyright © 2023 Enrique Donaire. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
